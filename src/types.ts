export type CategoryType = 
  | 'All' 
  | 'Coffee' 
  | 'Espresso' 
  | 'Cappuccino' 
  | 'Latte' 
  | 'Mocha' 
  | 'Desserts' 
  | 'Breakfast' 
  | 'Sandwiches';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  longDescription?: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isSpecial?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  calories?: number;
  origin?: string;
  tastingNotes?: string[];
  prepTime?: string;
}

export interface CartItemOption {
  size: 'Standard' | 'Double' | 'Grand / Large';
  milk: 'Whole Milk' | 'Oat Milk' | 'Almond Milk' | 'Pistachio Milk' | 'None';
  sweetness: 'Regular (100%)' | 'Less Sweet (50%)' | 'Sugar Free' | 'Extra Sweet';
  syrup?: 'Vanilla Bean' | 'Salted Caramel' | 'Hazelnut' | 'Honey Lavender' | 'None';
  temperature: 'Hot' | 'Iced' | 'Blended';
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  options: CartItemOption;
  totalPrice: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  tableArea: 'Window Alcove' | 'Fireside Lounge' | 'Roaster Bar' | 'VIP Private Parlor';
  specialRequest?: string;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  favoriteDrink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  awards: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambiance' | 'Latte Art' | 'Pastries' | 'Roastery';
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  recommendationItem?: MenuItem;
}
