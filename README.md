# Portfolio

A React portfolio website powered by Vite+ and Sanity. The frontend displays profile, about, work, skills, testimonials, and contact sections, while the `backend_sanity` folder contains the Sanity Studio used to manage portfolio content.

## Tech Stack

- React 19
- Vite+ (Vite, Rolldown, Vitest, Oxlint, and Oxfmt)
- Sass
- Framer Motion
- Sanity CMS

## Project Structure

```text
.
|-- backend_sanity/   # Sanity Studio schemas and CMS configuration
|-- public/           # Static public assets
|-- src/
|   |-- assets/       # Images and icons
|   |-- components/   # Shared UI components
|   |-- container/    # Page sections
|   |-- constants/    # Shared constants and image exports
|   |-- wrapper/      # Higher-order layout/motion wrappers
|   |-- App.jsx
|   `-- client.js     # Sanity client configuration
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

Install dependencies:

```bash
vp install
```

Create a `.env` file in the project root:

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
```

Start the frontend:

```bash
vp dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
vp dev
```

Starts the Vite development server.

```bash
vp build
```

Builds the production app into the `dist` directory.

```bash
vp preview
```

Previews the production build locally.

```bash
vp test
```

Runs the configured Vite test command.

## Sanity Studio

The CMS is in `backend_sanity`.

```bash
cd backend_sanity
yarn
yarn start
```

Sanity schemas are defined in `backend_sanity/schemas`.

## Environment Variables

The frontend expects these root-level variables:

- `VITE_SANITY_PROJECT_ID`: Public Sanity project ID used by the browser client.

The browser client uses read-only public access. Keep any Sanity write token in a server-side environment; Vite exposes `VITE_*` values to client code. Keep `.env` out of version control.
