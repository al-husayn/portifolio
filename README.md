# Portfolio

A React portfolio website powered by Vite and Sanity. The frontend displays profile, about, work, skills, testimonials, and contact sections, while the `backend_sanity` folder contains the Sanity Studio used to manage portfolio content.

## Tech Stack

- React 19
- Vite 7
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
yarn
```

Create a `.env` file in the project root:

```env
REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id
REACT_APP_SANITY_TOKEN=your_sanity_token
```

Start the frontend:

```bash
yarn dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
yarn dev
```

Starts the Vite development server.

```bash
yarn build
```

Builds the production app into the `build` directory.

```bash
yarn serve
```

Previews the production build locally.

```bash
yarn test
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

- `REACT_APP_SANITY_PROJECT_ID`: Sanity project ID.
- `REACT_APP_SANITY_TOKEN`: Sanity token used by the client.

Keep `.env` out of version control.
