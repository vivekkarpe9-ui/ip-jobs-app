# iP Jobs — Local Work Marketplace

**काम जहाँ, मौका वहाँ!**
Find Work · Post Work · Grow Local

A premium mobile-first local work marketplace prototype starting in Bhopal, Madhya Pradesh.

## Current prototype
- Dark emerald visual system with responsive desktop and mobile layouts
- Job discovery feed, search, locality filter and category filters
- Demo employer posting form
- Demo posts saved only in the current browser
- Basic PWA manifest and service-worker shell caching

## V2 progress
- A separate Supabase project has been created for iP Jobs in the Mumbai region.
- Core PostgreSQL tables are in place: profiles, employer_verifications, jobs and applications.
- Row Level Security is enabled on all four tables; the security advisor returned no security lint findings after permission tightening.
- Email/password sign-up and sign-in interface code has been added. The public client configuration in `config.js` must be filled before authentication can connect; email verification settings and redirect URLs also need dashboard review.

## Not yet connected or production-ready
The frontend still uses illustrative sample job cards. Real job-feed and application queries, employer verification workflow, payment processing, notifications, admin review UI, moderation operations and automatic server-side expiry are not complete. Sample job cards are illustrative demo data, not live vacancies.

## Product pricing requirements — not implemented
- Workers: free
- Normal employer: ₹10 package for 2 job posts, valid 7 days
- Company: ₹49 package for 10 posts uploaded together, valid 30 days
- Payment must be confirmed before publication. Expired posts disappear from public search but remain in the employer dashboard.

## Safety and privacy requirements
- Worker registration and job applications must be restricted to adults aged 18+.
- No registration, application, interview or security fee for workers.
- Verify employers and review listings before public launch.
- Provide report/block and human admin moderation.
- Display locality or approximate job area; do not expose workers' precise GPS coordinates publicly.
- Require transparent pay amount, pay unit, dates, hours, duration, payout timing, duties and safety conditions.
- Minimise personal data, explain why each item is collected, protect it, and provide correction/deletion and grievance pathways consistent with applicable law.
- Review applicable Madhya Pradesh and central labour, wage, workplace safety, social-security and privacy requirements with qualified counsel before launch.

## Research notes informing UX
- Temporary-work marketplace case studies emphasise upfront pay clarity, clear job status, reusable navigation patterns and usability testing. Reference: Indeed Flex case study by The Treasury: https://thetreasury.design/case-studies/indeed-flex-hiring-platform
- India's DPDP Rules 2025 were notified with a phased 18-month implementation schedule. Design privacy notices, purpose limitation, data minimisation, security and grievance workflows from the start. Official sources: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa and https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=2&reg=48
- The Ministry of Labour & Employment states the Code on Social Security 2020 was enforced on 21 November 2025 and includes gig/platform worker provisions; applicability depends on the actual operating model and must be reviewed. Official source: https://www.labour.gov.in/static/uploads/2026/03/d70bb9f7e87ec48bd64fde40329f9c09.pdf

## Next milestones
1. Data model for worker, employer, company, job, application, package, payment and moderation.
2. Authentication, role-based access and employer verification.
3. Secure job publication and application workflow.
4. Payment provider integration with server-side payment verification and expiry enforcement.
5. Admin console, reporting, audit trail and support process.
6. Accessibility, security and mobile usability testing; then PWA deployment.

## Run
Serve this folder over HTTPS or localhost for PWA features. Opening the HTML file directly may not enable service workers.

Never put database service-role keys, payment secrets or private API keys in frontend code.