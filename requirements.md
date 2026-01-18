# Coffee Personality Quiz - Requirements

## Overview
A fun personality quiz that recommends coffee drinks based on user answers. Built for Basecamp Coffee's loyalty program revamp.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Night Owl | Red Eye (coffee + espresso shot) | "Sleep is optional" |
| Artisan Snob | Pour-Over, Single Origin | "You know what you like" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

---

## Result Display
**Show all percentages** - Display breakdown of all personality types with percentages, plus all coffee recommendations. Example: "You're 50% Night Owl, 30% Artisan Snob, 20% Sweet Enthusiast"

---

## Visual Style
**Playful & Colorful (Style 1)**
- Bright gradient backgrounds (purples, pinks)
- Rounded shapes and corners
- Fun, energetic typography (Nunito or similar)
- White card with shadow for quiz container
- Hover effects with movement

---

## Visual Elements
- **Images:** Skip for now (can add later)
- **Icons:** Yes - include emoji icons next to each answer option

---

## Quiz Questions

### Q1: It's Friday night! What's your ideal plan?
- 🍰 Treating myself to something indulgent → Sweet Enthusiast
- 🌙 Late night project - sleep is overrated → Night Owl
- 🎯 Checking out that place with the great reviews → Artisan Snob
- 🤷 Whatever happens, happens → Practical Pragmatist

### Q2: Pick a superpower:
- 🧁 Everything you bake turns out perfect → Sweet Enthusiast
- 🦉 You never need sleep → Night Owl
- 👃 You can taste the origin of any ingredient → Artisan Snob
- ⚡ You can finish any task in half the time → Practical Pragmatist

### Q3: Your phone dies. How do you react?
- 😌 Great excuse for some me-time and a treat → Sweet Enthusiast
- 😤 Annoying - I was in the middle of something at 2am → Night Owl
- 🤔 Time to appreciate the moment mindfully → Artisan Snob
- 🔌 Find a charger, problem solved → Practical Pragmatist

### Q4: Pick a Netflix vibe:
- 🎂 The Great British Bake Off → Sweet Enthusiast
- 🔍 True crime documentaries at midnight → Night Owl
- 🎬 Foreign films with subtitles → Artisan Snob
- 📺 Whatever's trending, I'm easy → Practical Pragmatist

### Q5: You're at a coffee shop. The barista says "the usual?" You think:
- 🥰 Love that they remember my caramel drizzle → Sweet Enthusiast
- ☕ They know I need it strong → Night Owl
- 😏 Actually, I'd like to try something new today → Artisan Snob
- 👍 Perfect, that was easy → Practical Pragmatist

### Q6: Pick a travel style:
- 🏨 All-inclusive resort with great desserts → Sweet Enthusiast
- 🌃 City that never sleeps - Tokyo, NYC → Night Owl
- 🗺️ Off-the-beaten-path local experiences → Artisan Snob
- ✈️ Direct flight, good hotel, done → Practical Pragmatist

---

## Technical Notes
- Framework: Next.js
- 6 questions total
- Each answer maps to exactly one personality
- Final score calculated by counting which personality was selected most
- Ties broken by order of questions (earlier = higher priority)
