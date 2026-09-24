# Dhwanish Singala — Portfolio

Single-page portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Content lives in [`data/site.ts`](data/site.ts) and [`data/projects.ts`](data/projects.ts).

## Local development

```bash
npm install
cp .env.example .env.local   # add Web3Forms key for contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

- **Site copy, skills, social links:** edit [`data/site.ts`](data/site.ts)
- **Projects:** copy the `projectTemplate` object in [`data/projects.ts`](data/projects.ts)
- **Photo:** replace [`public/profile.svg`](public/profile.svg) with your photo (e.g. `profile.webp`) and update `site.about.photo`
- **Resume:** replace [`public/resume.pdf`](public/resume.pdf)

## Contact form

1. Create a free access key at [web3forms.com](https://web3forms.com)
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` and in **Vercel → Project → Environment Variables**

## Deploy on Vercel (free Hobby tier)

1. Push this repo to GitHub
2. [Import the repo in Vercel](https://vercel.com/new) — framework preset **Next.js**
3. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel env settings
4. Deploy

### Custom domain (`dhwanishingala.com`)

1. Vercel → **Settings → Domains** → add `dhwanishingala.com` and `www.dhwanishingala.com`
2. Add the DNS records Vercel shows at your domain registrar
3. `metadataBase` is already set to `https://dhwanishingala.com` in [`data/site.ts`](data/site.ts)

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Run production build |
