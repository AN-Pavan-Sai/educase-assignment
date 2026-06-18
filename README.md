# PopX – React App (Educase Assignment)

A mobile-first React application built with Vite for the Educase India assignment. The app replicates the provided Figma/design screens for **PopX** — a user onboarding flow with Welcome, Login, Create Account, and Account Settings pages.

## Live Demo

> _Deploy link will be added once hosted on Netlify._

## Screens

| Screen | Route | Description |
|---|---|---|
| **Welcome** | `/` | Landing page with "Create Account" and "Already Registered? Login" buttons |
| **Login** | `/login` | Email & password sign-in form with grey Login button |
| **Create Account** | `/create-account` | Registration form with Full Name, Phone, Email, Password, Company, and Agency radio selection |
| **Account Settings** | `/account-settings` | Profile page displaying user's name, email, profile photo, bio, and a camera icon overlay |

## Features

- **React Router** for client-side navigation between all 4 screens
- **Shared User Context** — name and email entered during registration/login are dynamically displayed on the Account Settings page
- **Mobile-first responsive design** matching the provided mockups exactly
- **Custom radio buttons** and floating label form inputs
- **Netlify-ready** with `_redirects` for SPA routing support

## Tech Stack

- **React 19** (via Vite)
- **React Router DOM** for routing
- **Vanilla CSS** — no CSS framework, fully custom styles
- **Google Fonts** — Rubik

## Project Structure

```
src/
├── context/
│   └── UserContext.jsx      # Shared user state (name, email)
├── pages/
│   ├── Welcome.jsx          # Landing / home screen
│   ├── Login.jsx            # Sign-in screen
│   ├── CreateAccount.jsx    # Registration screen
│   └── AccountSettings.jsx  # Profile / settings screen
├── App.jsx                  # Routes & layout
├── main.jsx                 # Entry point with BrowserRouter
└── index.css                # All styles
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## Deployment (Netlify)

1. Push code to GitHub
2. Connect the repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. The `public/_redirects` file handles SPA routing automatically

## Assignment Details

- **Assignment by:** Educase India
- **Framework:** React JS (Vite)
- **Design:** Pixel-accurate implementation of provided mockup screens
