# Frontend

This folder is a standalone Next.js app and can be used as the Vercel project root.

## Deploy on Vercel

1. Import this `frontend/` folder as the project root in Vercel, or deploy the folder by itself.
2. Install dependencies with `npm install`.
3. Build with `npm run build`.

## Environment

- `NEXT_PUBLIC_API_BASE_URL`
  - Leave blank to use the same origin as the deployed frontend.
  - Set it to your backend URL if the API is hosted separately.
