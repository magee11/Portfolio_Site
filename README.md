This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact form

The contact form sends email through [EmailJS](https://www.emailjs.com/) directly from the browser.

1. Create a free EmailJS account and add an **Email Service** (e.g. Gmail, connected to the inbox that should receive messages).
2. Create an **Email Template** using these variables:
   - Subject: `New portfolio message: {{service}}`
   - Body: `From: {{from_name}} ({{reply_to}}), Phone: {{phone}}` followed by `{{message}}`
   - Set **Reply To** to `{{reply_to}}` so replies go to the sender.
3. Copy `.env.example` to `.env.local` and fill in the Service ID, Template ID and Public Key (Account → General).
4. Restart `npm run dev`. On your hosting provider (e.g. Vercel), add the same three variables in the project's environment settings.

If the keys are missing, the form falls back to opening the visitor's mail app addressed to `mageshmarch@gmail.com`.
