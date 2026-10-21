# Challenge Mobile App

An Expo prototype of a mobile profile and favourites flow, with the screens and navigation in place but no data behind them.

**Status:** Prototype. It is a UI spike: the screens and navigation exist, but login and sign-up only navigate to the home screen, and nothing is fetched or stored.

## The problem

The app appears to explore a profile-based social flow: people sign in, edit a profile, and browse a list of favourite people, where each can be rated and commented on. The code tests how those screens fit together on a phone. It does not yet model users, ratings or comments beyond what the screens display.

## What it does

- Login and sign-up screens that move the user into the app without checking credentials.
- A profile screen with a link to an edit-profile screen.
- A favourites screen of user cards, each with a rating control and actions for rating and messaging.
- A comments component that displays comments on a favourite, with a close action. It has no input field yet.
- Stack navigation with a bottom tab bar, built on React Navigation 6.

## How it's built

- **Stack:** Expo (`expo` ~45) with React Native and React 17, React Navigation 6 (native stack and bottom tabs), `react-native-ratings`, `react-native-feather` icons, `expo-linear-gradient` and `react-native-safe-area-context`.
- **Structure:** `App.js` mounts the navigation from `navigation/`. Screens are in `screens/`, reusable parts such as the rating, comment and profile components are in `components/`, and colours and layout values are in `constants/`.

## Running it locally

```bash
npm install
npm start          # expo start
npm run android    # expo start --android
npm run ios        # expo start --ios
npm run web        # expo start --web
```

## What's left

- No authentication, no API and no storage. Ratings, comments and profile edits are not saved.
- Login and sign-up skip validation and go straight to the home screen.
- `package.json` pins Expo SDK 45 next to React Native 0.83.1, which do not match. The app needs to be aligned to one SDK before it can be built.
- No tests and no README in the repository.
