# Edge Function implementation notes
Implement a server-side `lookup-number` function that:
1. Validates E.164 format and rate-limits by authenticated user/IP.
2. Queries only moderated/approved aggregate data.
3. Returns minimal fields (label/category/confidence/report count), never reporter identity or notes.
4. Logs abuse signals and supports user deletion/report appeals.
5. Never ships the Supabase service-role key to Android or web clients.

A real caller-name directory requires a lawful data source, consent/notice, moderation, correction and deletion process. Do not scrape private contact books or publish personal data without a valid legal basis.
