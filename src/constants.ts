export interface MenuItem {
  id: string;
  name: string;
  category: 'Burgers' | 'Sides' | 'Drinks' | 'Combos';
  price: number;
  rating: number;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  description: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Flame King Double',
    category: 'Burgers',
    price: 8.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    isBestseller: true,
    description: 'Two flame-grilled beef patties with melted cheese and signature sauce.'
  },
  {
    id: 'b2',
    name: 'Crispy Royale',
    category: 'Burgers',
    price: 7.49,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1513185158878-8d8ae148b783?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    description: 'Succulent chicken breast with a crispy breading and fresh lettuce.'
  },
  {
    id: 'b3',
    name: 'Garden Flame',
    category: 'Burgers',
    price: 6.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    description: 'Plant-based patty grilled to perfection with vegan mayo.'
  },
  {
    id: 's1',
    name: 'Golden Fries',
    category: 'Sides',
    price: 3.49,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    description: 'Thick-cut potatoes fried to a perfect golden crisp.'
  },
  {
    id: 's2',
    name: 'Onion Rings',
    category: 'Sides',
    price: 4.29,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    description: 'Crunchy battered onion rings served with ranch dip.'
  },
  {
    id: 'd1',
    name: 'Nitro Cola',
    category: 'Drinks',
    price: 2.19,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    description: 'Extra chilled cola with a hint of vanilla.'
  },
  {
    id: 'c1',
    name: 'The Ultimate Combo',
    category: 'Combos',
    price: 12.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    isVeg: false,
    isBestseller: true,
    description: 'Burger, Fries, and a large Drink. Maximum value.'
  }
];

export const DEALS = [
  {
    id: 'deal1',
    title: 'Buy 1 Get 1 Free',
    description: 'On all Whoppers every Wednesday',
    code: 'BOGO_WED',
    expiry: 'Ends in 05h 22m',
    badge: 'Limited time'
  },
  {
    id: 'deal2',
    title: '50% OFF App First Order',
    description: 'Download now and save big on your first flame-grill',
    code: 'APP50',
    badge: 'App Exclusive'
  }
];
