# Netflix Clone

A modern Netflix clone built with React, TypeScript, and TMDB API. This project replicates the core features of Netflix with a modern UI and responsive design.

## Features

- 🎬 Browse movies and TV shows
- 🔍 Search functionality
- 👤 User authentication
- 🎯 Movie categories and genres
- 📱 Responsive design
- 🌓 Dark/Light mode
- 🎥 Movie trailers
- 📋 My List functionality
- 🎨 Modern UI with smooth animations

## Tech Stack

- React 18
- TypeScript
- Redux Toolkit for state management
- Firebase for authentication
- TMDB API for movie data
- Styled Components for styling
- Material-UI for components
- React Router for navigation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   # TMDB API
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here

   # Firebase
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id_here
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id_here
   ```

   To get these keys:
   - TMDB API Key: Sign up at [TMDB](https://www.themoviedb.org/documentation/api)
   - Firebase Keys: Create a project at [Firebase Console](https://console.firebase.google.com/)

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   ├── Layout.tsx
  │   ├── Navbar.tsx
  │   ├── Sidebar.tsx
  │   ├── MovieCard.tsx
  │   ├── MovieRow.tsx
  │   └── ProtectedRoute.tsx
  ├── features/       # Redux slices and features
  │   ├── auth/
  │   ├── movies/
  │   └── ui/
  ├── hooks/         # Custom hooks
  │   ├── useAppDispatch.ts
  │   └── useAppSelector.ts
  ├── pages/         # Page components
  │   ├── Browse.tsx
  │   ├── Login.tsx
  │   └── MovieDetails.tsx
  ├── services/      # API services
  │   ├── firebase.ts
  │   └── tmdbApi.ts
  ├── styles/        # Global styles
  │   └── theme.ts
  ├── types/         # TypeScript types
  └── utils/         # Utility functions
```

## Features in Detail

### Authentication
- Sign up and sign in functionality using Firebase Authentication
- Protected routes for authenticated users
- User profile management

### Movie Browsing
- Browse movies by categories (Trending, Netflix Originals, Top Rated, etc.)
- Search movies and TV shows
- View movie details including:
  - Movie information
  - Cast and crew
  - Trailers
  - Similar movies
  - User ratings

### UI/UX
- Responsive design for all screen sizes
- Dark mode by default
- Smooth animations and transitions
- Netflix-like UI with hover effects
- Horizontal scrolling movie rows
- Modal for movie details

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 