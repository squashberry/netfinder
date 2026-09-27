# Netfinder

Find something worth watching.

Netfinder is a mobile-first React + TypeScript movie and TV discovery PWA with a provider adapter for movie metadata.

## Run

npm install
npm run dev

## Production

npm run build
npm run preview

## API

The default provider is mock data. Copy the environment template to .env.

VITE_MOVIE_API_PROVIDER=mock
VITE_MOVIE_API_BASE_URL=
VITE_MOVIE_API_KEY=
VITE_IMAGE_BASE_URL=
VITE_TRAILER_API_URL=

When the real API is ready, set VITE_MOVIE_API_PROVIDER=custom. Keep API-specific normalization inside src/api/customProvider.ts.

## Features

- Cinematic mobile-first home with rotating featured hero
- Trending, popular, now playing, upcoming and top-rated shelves
- Search with debounce and recent searches
- Discover filters and provider-backed genre pages
- Movie details with cast, crew, reviews, recommendations and metadata
- Local watchlist and recently viewed history
- Light/dark settings, data saver and trailer preference
- Native share with clipboard fallback
- Installable PWA with standalone manifest, offline shell and install prompt
- Safe-area-aware mobile navigation
- Reduced-motion accessibility support
- Mock data so the product is useful before the real API is connected

## Architecture

The UI depends on MovieProvider in src/types/index.ts. src/api/mockProvider.ts implements the local demo catalog. src/api/customProvider.ts is the replaceable HTTP adapter. API credentials never belong in source code.

Metadata, trailer sources and legitimate playback/watch sources remain separate concerns. Netfinder never fabricates playback URLs.

## Deployment

Build dist/ and deploy it to a static host with SPA fallback to index.html.

## Structure

src/
  api/
  components/
  data/
  hooks/
  lib/
  pages/
  stores/
  types/
