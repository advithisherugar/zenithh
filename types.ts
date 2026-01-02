
export interface User {
  id: string;
  username: string;
  fullName: string;
  joinedAt: string;
  xp?: number;
  level?: number;
}

export interface Habit {
  id: string;
  userId: string;
  name: string;
  category: string;
  completedDates: string[]; // ISO Strings (YYYY-MM-DD)
  streak: number;
}

export interface Todo {
  id: string;
  userId: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface WaterLog {
  date: string; // YYYY-MM-DD
  amount: number; // in ml
  goal: number;
}

export interface MoodLog {
  date: string;
  mood: 'excellent' | 'good' | 'neutral' | 'bad' | 'terrible';
}

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  type: 'event' | 'note';
}

export interface UserData {
  habits: Habit[];
  todos: Todo[];
  waterLogs: WaterLog[];
  events: CalendarEvent[];
  moods: MoodLog[];
}

export interface AIRecommendation {
  summary: string;
  tips: string[];
  focusArea: string;
}
