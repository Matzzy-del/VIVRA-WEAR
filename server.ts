import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing with custom limit for payload flexibility
  app.use(express.json({ limit: "50mb" }));

  // API Endpoint: Image Generation using gemini-3-pro-image
  app.post("/api/generate-image", async (req, res) => {
    try {
      const { prompt, aspectRatio = "1:1", imageSize = "1K" } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "O prompt é obrigatório." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY não configurada. Por favor, adicione-a no menu Settings > Secrets do AI Studio.",
        });
      }

      // Initialize the Google GenAI SDK
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Request image generation using the paid high-quality model
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image",
        contents: [{ text: prompt }],
        config: {
          imageConfig: {
            aspectRatio,
            imageSize, // "1K", "2K", "4K"
          },
        },
      });

      let base64Image = null;
      let textResponse = "";

      const parts = response.candidates?.[0]?.content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData) {
            base64Image = part.inlineData.data;
          } else if (part.text) {
            textResponse += part.text;
          }
        }
      }

      if (base64Image) {
        return res.json({
          success: true,
          imageUrl: `data:image/png;base64,${base64Image}`,
          text: textResponse,
        });
      } else {
        return res.status(500).json({
          error: "Nenhuma imagem foi retornada pelo modelo. Verifique se o prompt respeita as diretrizes de segurança.",
          text: textResponse,
        });
      }
    } catch (error: any) {
      console.error("Erro na geração de imagem pelo servidor:", error);
      return res.status(500).json({
        error: error.message || "Erro interno durante a geração de imagem.",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Mount Vite middleware in development or serve static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Vivra Backend] Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
