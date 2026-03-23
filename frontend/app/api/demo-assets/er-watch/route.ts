import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "components",
    "ui",
    "20260322T191538Z-er-watch.webm",
  );
  const fileBuffer = await readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "video/webm",
      "Content-Disposition": 'inline; filename="20260322T191538Z-er-watch.webm"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
