import cors from "cors";
import express from "express";

import treeRouter from "./routes/treeRouter.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.use("/api/trees", treeRouter);

app.use((error, _request, response, _next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong.";

  response.status(statusCode).json({ error: message });
});

export default app;
