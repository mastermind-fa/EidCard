# Eid Card — Send Beautiful Eid Wishes 🌙

A production-ready, mobile-first Eid greeting card generator and shareable link creator. Built with Next.js, TypeScript, and Tailwind CSS.

## Architecture

### Why URL-encoded cards?

This app uses **compressed URL payloads** as the primary card delivery mechanism:

```
User creates card → Data compressed with LZ-String → Encoded in URL → Recipient opens URL → Decoded client-side → Card rendered instantly
```

**Benefits:**
- **Zero database calls** for 95%+ of card views
- **Instant card rendering** — no server roundtrip, no DB latency
- **Vercel-friendly** — works perfectly with serverless/edge
- **Supabase optional** — DB is only a fallback for very long messages
- **Offline-capable** — card data is self-contained in the URL

**URL structure:** `/c?d=<lz-string-compressed-base64url-encoded-json>`

**Fallback:** If a message is extremely long (>1800 chars compressed), the app stores it via `/api/cards` and generates a `/card/<id>` link instead.

### Data flow

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│ Create Form │────→│ Encode + LZ  │────→│ /c?d=<payload>  │ (95% of cards)
│  /create    │     │ Compress     │     │ Zero DB calls   │
└─────────────┘     └──────────────┘     └─────────────────┘
                           │
                    (payload too large?)
                           │
                    ┌──────────────┐     ┌─────────────────┐
                    │ POST /api/   │────→│ /card/<id>      │ (rare fallback)
                    │ cards        │     │ Single DB read  │
                    └──────────────┘     └─────────────────┘
```

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Form handling:** React Hook Form + Zod validation
- **URL encoding:** LZ-String compression
- **Icons:** Lucide React
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js 18+ (tested with Node 25)
- npm, yarn, or pnpm

### Local Development

```bash
# Clone the repository
git clone <repo-url>
cd EidCard

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_BASE_URL` | No | Auto-detected | Base URL for shareable links |
| `DATABASE_PROVIDER` | No | `memory` | `memory` or `supabase` |
| `SUPABASE_URL` | No | — | Supabase project URL |
| `SUPABASE_ANON_KEY` | No | — | Supabase anonymous key |

## Database Setup

### Default: No Database Needed

The default `memory` provider requires no setup. Card data is encoded directly in the URL. The in-memory fallback store works for development.

### SQLite (Local Testing)

For persistent local testing, you can swap the in-memory store in `src/lib/db.ts` with `better-sqlite3`:

```bash
npm install better-sqlite3
npm install -D @types/better-sqlite3
```

Then modify `db.ts` to use SQLite for the `sqlite` provider.

### Supabase (Production)

For production with Supabase as the DB fallback:

1. Create a `cards` table:

```sql
CREATE TABLE cards (
  id TEXT PRIMARY KEY,
  recipient_name TEXT NOT NULL,
  relation_type TEXT NOT NULL,
  message TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  salami_number TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS policy for public read access
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cards are publicly readable" ON cards FOR SELECT USING (true);
CREATE POLICY "Cards can be created by anyone" ON cards FOR INSERT WITH CHECK (true);
```

2. Set environment variables:

```bash
DATABASE_PROVIDER=supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

**Important:** Most cards won't hit the database at all. Supabase is only used when card payloads exceed URL length limits.

## Vercel Deployment

### One-click Deploy

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Set environment variables (optional — works without them)
5. Deploy

### CLI Deploy

```bash
npm i -g vercel
vercel
```

### Deployment Notes

- The app works out-of-the-box on Vercel with zero configuration
- No database is needed for basic usage (URL-encoded cards)
- `NEXT_PUBLIC_BASE_URL` is auto-detected on Vercel via `VERCEL_URL`
- For the rare DB fallback, configure Supabase env vars in Vercel dashboard

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Landing page
│   ├── not-found.tsx       # 404 page
│   ├── globals.css         # Tailwind + custom styles
│   ├── create/
│   │   └── page.tsx        # Card creation form
│   ├── c/
│   │   ├── page.tsx        # URL-encoded card view (SSR)
│   │   └── card-view-client.tsx  # Card display with animations
│   ├── card/
│   │   └── [id]/
│   │       └── page.tsx    # DB-backed card view (fallback)
│   └── api/
│       └── cards/
│           └── route.ts    # POST endpoint for DB storage
├── components/
│   ├── ui/                 # Base UI components (shadcn-style)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── eid-card.tsx        # Main card display component
│   ├── card-form.tsx       # Card creation form with live preview
│   ├── salami-section.tsx  # Salami display + copy button
│   ├── copy-button.tsx     # Reusable copy-to-clipboard
│   ├── share-button.tsx    # Web Share API + copy fallback
│   ├── hero.tsx            # Landing page hero section
│   └── footer.tsx          # Site footer
└── lib/
    ├── types.ts            # TypeScript types + constants
    ├── templates.ts        # Eid message templates per relation
    ├── encoding.ts         # LZ-String URL encoding/decoding
    ├── validation.ts       # Zod schemas
    ├── utils.ts            # Utilities (cn, clipboard, share)
    └── db.ts               # Database layer (memory/Supabase)
```

## Message Templates

Pre-built heartfelt Bengali Eid messages for 5 relation types:

| Type | Tone |
|------|------|
| Senior Vaiya/Apu | Respectful, warm, affectionate |
| Junior Vaiya/Apu | Caring, sweet, encouraging |
| Sir | Respectful, formal, heartfelt |
| Madam | Elegant, warm, gracious |
| Family | Emotional, close, loving |

Templates are centralized in `src/lib/templates.ts` for easy editing and future i18n.

## Future Upgrades

### Salami / Payment Integration

The Salami section UI is built and ready. To add payment integration:

1. **bKash/Nagad/Rocket deep links** — Add payment app deep links with pre-filled amounts
2. **QR code generation** — Generate payment QR codes in the salami section
3. **Payment confirmation** — Add a webhook to mark salami as received
4. **Amount selection** — Let senders suggest salami amounts

### Other Ideas

- **Bengali/English toggle** — i18n with next-intl
- **Custom card themes** — Multiple card design templates
- **Image/photo cards** — Upload photos for the card
- **Audio messages** — Record voice Eid wishes
- **Analytics** — Track card views (privacy-respecting)
- **Card gallery** — Browse and reuse popular templates
