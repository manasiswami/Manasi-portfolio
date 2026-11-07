import process from "node:process";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";

dotenv.config();

console.log("API key loaded:", Boolean(process.env.BREVO_API_KEY));
console.log("API key length:", process.env.BREVO_API_KEY?.length);
console.log("API key prefix:", process.env.BREVO_API_KEY?.slice(0, 7));

const app = express();

const PORT = process.env.PORT || 5000;

// Trust Render's proxy when deployed.
// This allows rate limiting to identify client IPs.
if (process.env.RENDER === "true") {
  app.set("trust proxy", 1);
}

// ============================
// CORS CONFIGURATION
// ============================

const allowedOrigins = (
  process.env.CLIENT_URL || "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

// Parse incoming JSON requests.
app.use(express.json({ limit: "10kb" }));

// ============================
// RATE LIMITING
// ============================

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many messages. Please try again later."
  }
});

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running!");
});
// ============================
// HEALTH CHECK API
// ============================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio backend is running."
  });
});

// ============================
// CONTACT API
// ============================

app.post(
  "/api/contact",
  contactLimiter,
  async (req, res) => {
    try {
      const {
        name,
        email,
        subject,
        message,
        website
      } = req.body ?? {};

      // Honeypot spam protection.
      if (
        typeof website === "string" &&
        website.trim() !== ""
      ) {
        return res.status(200).json({
          message: "Your message was received."
        });
      }

      // Check required fields.
      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof subject !== "string" ||
        typeof message !== "string"
      ) {
        return res.status(400).json({
          message: "Please provide all required fields."
        });
      }

      const cleanName = name.trim();
      const cleanEmail = email.trim();
      const cleanSubject = subject.trim();
      const cleanMessage = message.trim();

      // Validate name.
      if (
        !cleanName ||
        cleanName.length > 80 ||
        /[\r\n]/.test(cleanName)
      ) {
        return res.status(400).json({
          message: "Please enter a valid name."
        });
      }

      // Validate email.
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(cleanEmail) ||
        cleanEmail.length > 254 ||
        /[\r\n]/.test(cleanEmail)
      ) {
        return res.status(400).json({
          message: "Please enter a valid email address."
        });
      }

      // Validate subject.
      if (
        !cleanSubject ||
        cleanSubject.length > 120 ||
        /[\r\n]/.test(cleanSubject)
      ) {
        return res.status(400).json({
          message: "Please enter a valid subject."
        });
      }

      // Validate message.
      if (
        !cleanMessage ||
        cleanMessage.length > 4000
      ) {
        return res.status(400).json({
          message: "Please enter a valid message."
        });
      }

      // Check Brevo configuration.
      const {
        BREVO_API_KEY,
        BREVO_SENDER_EMAIL,
        BREVO_SENDER_NAME,
        CONTACT_RECEIVER_EMAIL
      } = process.env;

      if (
        !BREVO_API_KEY ||
        !BREVO_SENDER_EMAIL ||
        !CONTACT_RECEIVER_EMAIL
      ) {
        return res.status(503).json({
          message: "Email service is not configured yet."
        });
      }

      // Send email through Brevo HTTPS API.
      const brevoResponse = await fetch(
        "https://api.brevo.com/v3/smtp/email",
        {
          method: "POST",

          headers: {
            "accept": "application/json",
            "api-key": BREVO_API_KEY,
            "content-type": "application/json"
          },

          body: JSON.stringify({
            sender: {
              name: BREVO_SENDER_NAME || "Portfolio Contact",
              email: BREVO_SENDER_EMAIL
            },

            to: [
              {
                email: CONTACT_RECEIVER_EMAIL
              }
            ],

            replyTo: {
              email: cleanEmail,
              name: cleanName
            },

            subject: `Portfolio enquiry: ${cleanSubject}`,

            textContent: `
Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
            `
          }),

          signal: AbortSignal.timeout(15000)
        }
      );

      const emailResult = await brevoResponse
        .json()
        .catch(() => ({}));

      if (!brevoResponse.ok) {
        console.error(
          "Brevo API error:",
          brevoResponse.status,
          emailResult
        );

        return res.status(502).json({
          message: "Unable to send your message. Please try again later."
        });
      }

      return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully!"
      });

    } catch (error) {
      console.error("Contact API error:", error);

      return res.status(502).json({
        message: "Something went wrong. Please try again later."
      });
    }
  }
);

// ============================
// ERROR HANDLING
// ============================

app.use((error, req, res, next) => {
  console.error("Server error:", error.message);

  if (error.message === "Origin not allowed by CORS") {
    return res.status(403).json({
      message: "This website is not allowed to access the API."
    });
  }

  if (error.type === "entity.too.large") {
    return res.status(413).json({
      message: "Request body is too large."
    });
  }

  return res.status(500).json({
    message: "Internal server error."
  });
});

// ============================
// START SERVER
// ============================

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
