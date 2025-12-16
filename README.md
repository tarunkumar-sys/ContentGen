# ContentGen

![Demo Image 1](https://github.com/tarunkumar-sys/ContentGen/blob/main/public/demo/homepage.png)
![Demo Image 2](https://github.com/tarunkumar-sys/ContentGen/blob/main/public/demo/dashboard.png)

ContentGen is a **professional Next.js web application** built to deliver interactive experiences with a clean, scalable, and production‑ready architecture.

---

## 🚀 Tech Stack

* **Framework**: Next.js (App Router)
* **Language**: TypeScript, React
* **Styling**: Tailwind CSS
* **Database / ORM**: Prisma
* **Tooling**: ESLint, PostCSS

---

## 📂 Project Structure

```
ScribeNova/
├── src/            # Application source
├── public/         # Static assets & demo images
├── prisma/         # Prisma schema
├── package.json    # Project dependencies
├── next.config.mjs # Next.js config
└── tsconfig.json   # TypeScript config
```

---

## ⚙️ Setup

```bash
git clone https://[https://github.com/tarunkumar-sys/ContentGen.git
cd ContentGen
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_database_url
GEMINI_API_KEY=your_google_gemini_api
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> `.env` files are ignored via `.gitignore`.

---

## 🧪 Production Build

```bash
npm run build
npm run start
```

---

## 📜 License

MIT License

