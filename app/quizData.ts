export type Personality = 'Sweet Enthusiast' | 'Night Owl' | 'Artisan Snob' | 'Practical Pragmatist';

export interface CoffeeInfo {
  name: string;
  tagline: string;
}

export const personalityCoffees: Record<Personality, CoffeeInfo> = {
  'Sweet Enthusiast': {
    name: 'Caramel Latte',
    tagline: "Life's too short for bitter",
  },
  'Night Owl': {
    name: 'Red Eye (coffee + espresso shot)',
    tagline: "Sleep is optional",
  },
  'Artisan Snob': {
    name: 'Pour-Over, Single Origin',
    tagline: "You know what you like",
  },
  'Practical Pragmatist': {
    name: "Large Drip, Whatever's Fresh",
    tagline: "Just make it work",
  },
};

export interface Answer {
  text: string;
  personality: Personality;
  emoji: string;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "It's Friday night! What's your ideal plan?",
    answers: [
      { text: "Treating myself to something indulgent", personality: "Sweet Enthusiast", emoji: "🍰" },
      { text: "Late night project - sleep is overrated", personality: "Night Owl", emoji: "🌙" },
      { text: "Checking out that place with the great reviews", personality: "Artisan Snob", emoji: "🎯" },
      { text: "Whatever happens, happens", personality: "Practical Pragmatist", emoji: "🤷" },
    ],
  },
  {
    id: 2,
    text: "Pick a superpower:",
    answers: [
      { text: "Everything you bake turns out perfect", personality: "Sweet Enthusiast", emoji: "🧁" },
      { text: "You never need sleep", personality: "Night Owl", emoji: "🦉" },
      { text: "You can taste the origin of any ingredient", personality: "Artisan Snob", emoji: "👃" },
      { text: "You can finish any task in half the time", personality: "Practical Pragmatist", emoji: "⚡" },
    ],
  },
  {
    id: 3,
    text: "Your phone dies. How do you react?",
    answers: [
      { text: "Great excuse for some me-time and a treat", personality: "Sweet Enthusiast", emoji: "😌" },
      { text: "Annoying - I was in the middle of something at 2am", personality: "Night Owl", emoji: "😤" },
      { text: "Time to appreciate the moment mindfully", personality: "Artisan Snob", emoji: "🤔" },
      { text: "Find a charger, problem solved", personality: "Practical Pragmatist", emoji: "🔌" },
    ],
  },
  {
    id: 4,
    text: "Pick a Netflix vibe:",
    answers: [
      { text: "The Great British Bake Off", personality: "Sweet Enthusiast", emoji: "🎂" },
      { text: "True crime documentaries at midnight", personality: "Night Owl", emoji: "🔍" },
      { text: "Foreign films with subtitles", personality: "Artisan Snob", emoji: "🎬" },
      { text: "Whatever's trending, I'm easy", personality: "Practical Pragmatist", emoji: "📺" },
    ],
  },
  {
    id: 5,
    text: "You're at a coffee shop. The barista says \"the usual?\" You think:",
    answers: [
      { text: "Love that they remember my caramel drizzle", personality: "Sweet Enthusiast", emoji: "🥰" },
      { text: "They know I need it strong", personality: "Night Owl", emoji: "☕" },
      { text: "Actually, I'd like to try something new today", personality: "Artisan Snob", emoji: "😏" },
      { text: "Perfect, that was easy", personality: "Practical Pragmatist", emoji: "👍" },
    ],
  },
  {
    id: 6,
    text: "Pick a travel style:",
    answers: [
      { text: "All-inclusive resort with great desserts", personality: "Sweet Enthusiast", emoji: "🏨" },
      { text: "City that never sleeps - Tokyo, NYC", personality: "Night Owl", emoji: "🌃" },
      { text: "Off-the-beaten-path local experiences", personality: "Artisan Snob", emoji: "🗺️" },
      { text: "Direct flight, good hotel, done", personality: "Practical Pragmatist", emoji: "✈️" },
    ],
  },
];
