import { createServer } from "node:http";
import { config } from "dotenv";
import handler from "./chat.js";

config();

const server = createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/chat") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const vercelReq = Object.assign(req, { body: JSON.parse(body) });

      // Adapt Node.js response to Vercel response API
      const vercelRes = Object.assign(res, {
        status: (code: number) => {
          res.writeHead(code, { "Content-Type": "application/json" });
          return vercelRes;
        },
        json: (data: unknown) => {
          res.end(JSON.stringify(data));
          return vercelRes;
        },
      });

      handler(vercelReq as never, vercelRes as never);
    });
  } else {
    res.writeHead(404).end();
  }
});

server.listen(3001, () => {
  console.log("API dev server running on http://localhost:3001");
});
