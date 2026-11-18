# PinPoint Rewards — App Launch Checklist
**Last updated: 2026-07-13**

---

## Blocking — Before Anything Goes Live

- [x] Run pending Supabase SQL migrations ✅ 2026-07-12
- [x] Flip DNS — `pinpointrewards.com → 76.76.21.21`, `www → cname.vercel-dns.com` ✅ live 2026-07-11
- [x] Receive tester feedback from Client Alpha (Android) + Client Beta (iOS)
- [x] Incorporate any fixes from tester feedback
- [ ] Final EAS build — bump iOS buildNumber + Android versionCode
- [ ] Submit app to App Store + Google Play
- [ ] Confirm store listings complete (name, description, keywords, screenshots)
- [ ] Request reviews from beta testers

---

## Pre-Launch (2 weeks before go-live)

- [ ] Set up Brevo + load member list
- [ ] Set up UptimeRobot on eport9.com
- [ ] Social teaser 1 — "We've been working on something"
- [ ] Social teaser 2 — Blurred app screenshot
- [ ] Social teaser 3 — "Same rewards, brand new experience"

---

## Launch Week

- [ ] Day 1 — Email 1 "PinPoint just got a major upgrade"
- [ ] Day 1 — Facebook launch post (pin to top) + Instagram post + 3-slide Story
- [ ] Day 3 — Facebook mid-week post ("your existing account carries over")
- [ ] Day 5 — Email 2 "Did you grab the new app yet?"

---

## Post-Launch (Months 1–2)

- [ ] 2 weeks out — Email 3 re-engagement ("You have rewards waiting")
- [ ] YouTube 60-second app walkthrough video
- [ ] Begin weekly merchant spotlight posts (Facebook + Instagram)
- [ ] Begin "Did you know?" educational post series

---

## Next App Build (not blocking launch)

- [ ] Terms of Service screen + consent checkbox on enrollment
  - `/terms/` page live at pinpointrewards.com/terms/ ✅ 2026-07-14
  - Enrollment checkbox + Profile link already in app code (ships with next EAS build)
  - Placeholder replaced with "Pinpoint Rewards" ✅ 2026-11-17 — **unverified against the actual registered legal entity** (Apple Developer org is on file as "PinPoint Card, Inc.", which may not match). Still needed: confirm correct legal entity name + attorney review of arbitration clause.
- [x] Forced update mechanism ✅ 2026-07-12
  - Supabase `app_config` table + `/api/config` Vercel route + blocking modal in App.js
  - To trigger: `update app_config set min_ios_version = '3.1.0', min_android_version = '3.1.0' where id = 1;`
- [x] Account deletion via `DeleteMember` API + logout ✅ 2026-07-12
- [x] Email verification resend via `ResendVerification` API ✅ 2026-07-12

---

## Future App Features

- [ ] In-app merchant map (CF backend needs lat/lng on merchant endpoints)
- [ ] Apple Wallet + Google Wallet card integration
- [ ] Push notification strategy
- [ ] Merchant co-marketing one-pager
- [ ] Lapsed member win-back email (12+ months inactive)
