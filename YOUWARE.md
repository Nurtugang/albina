# YOUWARE - March 8th Interactive Greeting Card

A personalized, mobile-first interactive digital card for March 8th (Women's Day).

## Project Overview

- **Type**: React + TypeScript + Framer Motion interactive greeting card
- **Primary Use**: Surprise romantic gift card with password protection
- **Target**: Mobile-first, touch-friendly interface

## Features

### 🔐 Password Screen
- Cute kawaii cat SVG illustration (hand-crafted in SVG)
- 4-digit PIN entry with numpad
- Password: `0308` (March 8th date)
- Shake animation + error message on wrong code
- Hint button reveals clue
- Smooth unlock transition to main content

### 🌸 Main Greeting Page
- Custom kawaii cat + bunny SVG characters (CSS art, no external images)
- Floating animated emojis (hearts, flowers, stars, paw prints)
- Special March 8th Women's Day badge
- Heartfelt message section

### 💌 Tap-to-Reveal Message Cards
- 5 flip cards with love messages
- 3D card flip animation on tap
- Each card has a themed front emoji and revealed message

### 🎁 Interactive Gift Box
- Animated gift box with lid + confetti explosion on tap
- Confetti burst with 30 colored particles
- Reveals sweet message after opening

### ✨ Floating Animations
- 16 floating emojis that rise from bottom continuously
- Sway animations on SVG characters
- Heartbeat, bounce, sparkle CSS animations

## Architecture

```
src/
  components/
    PasswordScreen.tsx   # Password gate with cat SVG
    MainGreeting.tsx     # Main page layout
    MessageCards.tsx     # Flip-card love messages
    GiftBox.tsx          # Interactive gift with confetti
    CatBunnyArt.tsx      # SVG cat & bunny components
    FloatingElements.tsx # Background floating animation
  App.tsx                # State machine: locked → unlocked
  index.css              # Custom keyframe animations
```

## Build

```bash
npm install
npm run build
```

## Password

The app password is `0308` (March 8th). To change it, edit `PASSWORD` constant in `src/components/PasswordScreen.tsx`.

## Color Palette

- Pink: `#FF6B9D`, `#FFB3C6`
- Purple: `#C77DFF`, `#5B2C6F`
- Background gradient: `#FFE4E8 → #F0D8FF → #D4F0FF`
