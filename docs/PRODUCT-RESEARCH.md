# iP Jobs — Product Research & MVP Blueprint

Research snapshot: 1 November 2026
Launch market: Bhopal, Madhya Pradesh
Product: adult-only, two-sided local temporary-work marketplace

## Executive direction

Build a trustworthy local work marketplace, not a generic classifieds board. The first release should make three things exceptionally clear on every listing: what the work is, where it is, and exactly how much and when the worker will be paid.

The design direction uses a dark charcoal canvas, emerald/lime accent, quiet borders, generous spacing, compact status labels and clear cards. It shares the polished dark-product feel associated with Arok AI while retaining its own iP Jobs identity.

## Research findings

### 1. Temporary-work marketplace UX

The Indeed Flex case study describes a two-sided flexible-work platform where workers discover and manage shifts and employers post work from mobile. Its design work emphasised reusable navigation and data-heavy screen patterns, clear pay/earnings information, understandable job policy/status and iterative usability testing. The case study reports improvements in job-posting efficiency and worker engagement after redesign; these are case-study outcomes, not forecasts for iP Jobs.

Design implications:
- Show pay amount and pay basis before an applicant opens or applies to a listing.
- Make job duration, shift timing, locality, number of people required and payout timing visible.
- Keep the employer posting flow short and mobile-friendly.
- Give each application a clear state: submitted, viewed, shortlisted, selected, declined or withdrawn.
- Keep a history of completed and expired posts for employers.
- Test high-risk flows with real adult users before launch; do not assume the design is usable because it looks polished.

Reference: https://thetreasury.design/case-studies/indeed-flex-hiring-platform

### 2. India privacy framework

The Digital Personal Data Protection Rules, 2025 were notified on 14 November 2025 and provide a phased implementation schedule. The Government's public summary highlights clear purpose-specific notices, consent and transparency, purpose limitation, data minimisation, accuracy, storage limitation, security safeguards, accountability, breach communication and grievance contact details. The commencement notification phases different provisions; do not assume every substantive provision became enforceable on the notification date.

Design implications:
- Ask only for information required for a defined feature.
- Explain why GPS is requested and offer manual locality selection.
- Never publish a worker's precise GPS coordinates.
- Keep phone/email private until the relevant user action and consent justify disclosure.
- Provide a privacy notice, contact for privacy queries, account/data correction and deletion request process, and grievance route.
- Define retention periods for inactive accounts, job applications and uploaded identity documents.
- Store identity evidence securely and restrict access; do not expose documents in public profile URLs.
- Have a qualified Indian privacy professional confirm the exact commencement dates and obligations before public launch.

Official sources:
- MeitY DPDP Rules 2025: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa
- PIB summary, 14 November 2025: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=2&reg=48
- Gazette commencement notification: https://egazette.gov.in/WriteReadData/2025/267647.pdf

### 3. Labour and platform-work considerations

The Ministry of Labour & Employment states that the Code on Social Security, 2020 was enforced on 21 November 2025 and includes provisions concerning gig and platform workers. The legal treatment of iP Jobs depends on the actual operating model: whether it merely publishes employer listings, intermediates applications, controls work allocation, processes payments or otherwise acts as an aggregator. This product document is not a legal classification.

Design implications:
- Do not promise wages or guarantee payment unless a lawful, tested payment/escrow arrangement actually exists.
- State clearly who is the employer and who is responsible for wages, work conditions, supervision and safety.
- Store job engagement and payment records only where necessary and with appropriate access controls.
- Review central and Madhya Pradesh rules, registrations, minimum wage schedules, contract-labour implications and any aggregator duties with qualified counsel before launch.

Official sources:
- Ministry Labour Codes portal: https://www.labour.gov.in/offerings/schemes-and-services/details/labour-codes-gzNzQzMtQWa
- Ministry circular on Social Security Code implementation, 2 January 2026: https://www.labour.gov.in/static/uploads/2026/03/d70bb9f7e87ec48bd64fde40329f9c09.pdf
- PIB summary on gig/platform worker social-security provisions: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2198746&lang=2&reg=3&v=1

## Product rules already decided

| User type | Price | Included posts | Validity |
|---|---:|---:|---:|
| Worker | Free | Browse and apply | No worker fee |
| Normal employer | ₹10 | 2 posts | 7 days |
| Company | ₹49 | 10 posts uploaded together | 30 days |

Payment is per package, not recurring monthly. Posts go live only after server-verified payment. All posts in a package share the activation timestamp unless the product owner later changes this rule. At expiry, listings disappear from public search but remain in the employer dashboard. Reposting requires a new package.

## MVP roles and main flows

### Worker
1. Browse public listings without forced registration.
2. Select Bhopal or a locality manually; optionally grant GPS permission.
3. Filter by category, date, duration and pay.
4. Open a listing with duties, pay basis, hours, dates, locality, requirements, payout timing and safety notes.
5. Sign in as an adult (18+) before applying.
6. Track application status and report suspicious listings.

### Employer
1. Create an employer account and verify contact details.
2. Select normal employer or company package.
3. Enter the job details and review a preview.
4. Complete package payment.
5. Publish only after server-side payment verification.
6. Review applicants and update application states.
7. View active, expired and historical posts.

### Admin
- Review/verify employers and listings.
- Suspend suspicious accounts and remove unsafe/scam listings.
- Review reports and disputes.
- Manage categories, localities, pricing configuration and audit logs.
- View marketplace health metrics without exposing unnecessary personal data.

## Required listing fields

Title, description, category, employer identity/status, people required, start/end dates, start/end time, duration, wage amount, wage unit, payout timing, locality, optional approximate map pin, requirements, facilities, application deadline, listing status, verification status and moderation history.

## Trust and safety rules

- This product is for adults aged 18+ only. Do not allow minors to register as workers, apply or be recruited through the platform.
- Never charge workers a registration, application, interview, security or placement fee.
- Require clear pay and conditions; block vague unpaid trial-work listings.
- Moderate high-risk categories and prohibit unlawful, exploitative or dangerous listings.
- Do not expose precise worker GPS locations or identity documents.
- Provide report, block, support and grievance mechanisms.
- Make the employer responsible for accurately describing the job, lawful wages and workplace safety; confirm legal responsibilities with counsel.
- Use sample listings only as clearly labelled demo content; never present them as live vacancies.

## Technical architecture recommendation

Recommended initial path:
- Frontend: lightweight responsive web app/PWA in this repository.
- Source control: GitHub.
- Backend: Supabase or another managed Postgres service for authentication, database and storage, selected after cost/security review.
- Hosting: Cloudflare Pages or another static hosting provider with HTTPS; use server-side functions for privileged actions.
- Payments: choose a compliant Indian payment provider only after business/KYC requirements are confirmed. Verify payment on the server using provider webhooks; never trust a browser success screen.
- Maps: use locality-first search and optional approximate map pins. Avoid precise worker tracking.
- Notifications: add email/web push only after consent and delivery/reliability tests.

Free tiers can help with development and a small pilot, but limits, inactivity policies, bandwidth, database size, storage, function usage and payment-provider charges can change. ₹0 forever cannot be promised.

## Build sequence

1. Finalise user journeys and data schema.
2. Implement authentication, adult eligibility gate and role-based access.
3. Implement job CRUD, employer verification and admin moderation.
4. Implement application pipeline and notifications.
5. Implement payment packages, webhook verification and automatic expiry.
6. Add audit logs, reports, privacy controls and data deletion workflows.
7. Run mobile usability, accessibility, security and abuse testing.
8. Launch a small Bhopal pilot with verified employers before expanding.

## Success metrics

- Median time for an employer to create a complete job post.
- Percentage of job cards with all pay/time/location fields complete.
- Search-to-job-detail rate and detail-to-application rate.
- Employer response time to applications.
- Percentage of listings filled or closed with a recorded outcome.
- Reports per 100 listings and time to resolve a report.
- Expired listings correctly removed from public search.
- Worker fee complaints: target zero.

Do not optimise only for more posts or clicks. Trust, complete job information, safe outcomes and reliable moderation are core marketplace health metrics.
