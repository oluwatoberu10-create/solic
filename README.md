# Toby Wilson — UK Solicitor, Southampton

Personal website for Toby Wilson. Next.js 16 (App Router) · React 19 · Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing content — everything lives in `lib/`

| File | What it controls |
| --- | --- |
| `lib/site.ts` | Portrait, phone, email, address, booking URL, qualification, SRA number, regulatory & indemnity info, `practiceAreasConfirmed`, `pricesConfirmed` |
| `lib/packages.ts` | The three consultation packages and their prices |
| `lib/services.ts` | Practice areas — add/remove/edit; detail pages, sitemap and form dropdown update automatically |
| `lib/insights.ts` | Articles; swap `getInsights` / `getInsight` for CMS fetches later |
| `lib/legal.ts` | Privacy, Cookie, Terms, Complaints, Accessibility page outlines (`draft: false` once final) |

Any value left as `null` shows on the site as a dashed **[Add …]** placeholder. Nothing about Toby's
qualifications, regulation, experience or contact details has been invented.

### Before launch
- **Portrait:** add the photo to `public/images/` and set `site.portrait`.
- **Booking:** set `site.bookingUrl` (Calendly, Microsoft Bookings, Google Calendar…). Until then booking buttons open the enquiry form with the package pre-selected.
- **Enquiry form:** set `ENQUIRY_WEBHOOK_URL` (see `.env.example`) to a Make / Zapier / n8n webhook that emails Toby. Without it, production returns a clear "not connected" error rather than losing enquiries.
- **Prices / practice areas:** fill in, then flip `pricesConfirmed` / `practiceAreasConfirmed` in `lib/site.ts` to remove the "to be confirmed" notices.
- **Compliance pages:** replace the outlines in `lib/legal.ts` with reviewed wording (SRA transparency rules apply).
- Set `NEXT_PUBLIC_SITE_URL` to the real domain.

## Images
Southampton photographs are from Wikimedia Commons under CC BY-SA (credited at `/credits`); office imagery from Unsplash.
