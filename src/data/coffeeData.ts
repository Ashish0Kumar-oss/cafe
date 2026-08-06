import { MenuItem, Review, TeamMember, BlogPost, GalleryItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Bourbon Barrel Smoked Latte',
    category: 'Latte',
    description: 'Double shot of Ethiopian Yirgacheffe, aged oak barrel syrup, micro-foamed oat milk, smoked clove dust.',
    longDescription: 'Our signature espresso slowly infused with organic maple syrup aged in oak bourbon barrels. Finished with velvety silk oat milk and a subtle hint of flamed Madagascar cinnamon and clove.',
    price: 8.50,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isBestSeller: true,
    calories: 210,
    origin: 'Ethiopia Yirgacheffe',
    tastingNotes: ['Smoky Vanilla', 'Toasted Oak', 'Dark Chocolate'],
    prepTime: '4-6 mins'
  },
  {
    id: 'm2',
    name: 'Gold Leaf Velvet Cappuccino',
    category: 'Cappuccino',
    description: 'Single-origin Colombian Supremo espresso, dense creamy foam topped with 24k edible gold flakes.',
    longDescription: 'Crafted for connoisseurs. Rich notes of caramel and brown sugar espresso under a cloud of dense, micro-textured steamed milk, dusted with organic cocoa powder and edible 24-karat gold leaf.',
    price: 9.75,
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    calories: 160,
    origin: 'Colombia Huila Supremo',
    tastingNotes: ['Honey', 'Roasted Almond', 'Milk Chocolate'],
    prepTime: '3-5 mins'
  },
  {
    id: 'm3',
    name: 'Affogato al Pistacchio',
    category: 'Espresso',
    description: 'Fresh pulled ristretto poured over house-made Sicilian pistachio gelato with crushed roasted nuts.',
    longDescription: 'A classic Italian dessert turned luxury drink. Two scalding shots of dark roast espresso cascade over a sculpted sphere of artisan pistachio gelato, finished with sea-salted pistachio crunch.',
    price: 9.00,
    rating: 4.8,
    reviewsCount: 86,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc86de5?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isNew: true,
    calories: 280,
    origin: 'Guatemala Antigua',
    tastingNotes: ['Pistachio Cream', 'Espresso Bitters', 'Brown Butter'],
    prepTime: '3 mins'
  },
  {
    id: 'm4',
    name: 'Artisanal Single-Origin Pour Over',
    category: 'Coffee',
    description: 'Hand-poured V60 extraction of Panama Geisha beans with delicate jasmine flower and peach notes.',
    longDescription: 'Extracted meticulously at 93°C using Japanese Kalita Wave precision drippers. Offers a wine-like acidity, floral aroma, and an ethereal silky body unmatched by standard roasts.',
    price: 11.50,
    rating: 5.0,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    calories: 5,
    origin: 'Panama Boquete Geisha',
    tastingNotes: ['Jasmine Floral', 'White Peach', 'Bergamot Citrus'],
    prepTime: '6-8 mins'
  },
  {
    id: 'm5',
    name: 'Valrhona Dark Chocolate Mocha',
    category: 'Mocha',
    description: '70% Valrhona French dark chocolate melted into double espresso and velvety steamed whole milk.',
    longDescription: 'Rich, bittersweet luxury. We melt pure French couverture chocolate into our house roast espresso before folding in micro-steamed milk and topping with cacao nib shards.',
    price: 7.75,
    rating: 4.7,
    reviewsCount: 115,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    calories: 320,
    origin: 'Brazil Cerrado & Ghana Cocoa',
    tastingNotes: ['Bittersweet Cacao', 'Fudge', 'Hazelnut'],
    prepTime: '4 mins'
  },
  {
    id: 'm6',
    name: 'Rose & Honey Lavender Latte',
    category: 'Latte',
    description: 'Organic French lavender blossom syrup, wildflower honey, espresso, pink rose petal garnish.',
    longDescription: 'A soothing botanical embrace. Wild French lavender steeped with local raw wildflower honey, harmonized with a bright espresso roast and velvety oat milk.',
    price: 7.50,
    rating: 4.8,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    isNew: true,
    calories: 190,
    origin: 'Kenya AA',
    tastingNotes: ['Lavender Flora', 'Wild Honey', 'Blackberry'],
    prepTime: '4 mins'
  },
  {
    id: 'm7',
    name: 'Nitro Cold Brew with Vanilla Cloud',
    category: 'Coffee',
    description: '24-hour slow steeped cold brew infused with pure nitrogen, layered with sweet cream foam.',
    longDescription: 'Cascading velvet texture directly from our pressurized draft system. Naturally sweet, low acidity cold brew topped with a thick floating cloud of Madagascar vanilla bean foam.',
    price: 7.25,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    calories: 110,
    origin: 'House Blend (Sumatra & Ethiopia)',
    tastingNotes: ['Black Cherry', 'Molasses', 'Creamy Vanilla'],
    prepTime: '2 mins'
  },
  {
    id: 'm8',
    name: 'Cortado Traditional',
    category: 'Espresso',
    description: 'Equal parts dense double espresso and warm silky milk served in a signature heavy crystal glass.',
    longDescription: 'The ultimate barista benchmark. 2 oz of intensely fragrant Ristretto espresso cut precisely with 2 oz of warm micro-foamed milk to cut acidity while retaining coffee intensity.',
    price: 5.50,
    rating: 4.8,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    calories: 70,
    origin: 'Costa Rica Tarrazu',
    tastingNotes: ['Toasted Almond', 'Dark Toffee', 'Citrus Peel'],
    prepTime: '3 mins'
  },
  {
    id: 'm9',
    name: 'Golden Turmeric Saffron Latte',
    category: 'Latte',
    description: 'Organic turmeric root, Kashmiri saffron threads, cardamom, cinnamon, and steamed almond milk (Caffeine-free).',
    longDescription: 'An ancient wellness potion elevated to fine dining. Organic yellow turmeric root cold-pressed with cardamom pods, star anise, and real Iranian saffron threads.',
    price: 7.25,
    rating: 4.6,
    reviewsCount: 53,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    calories: 140,
    origin: 'Kashmir Saffron & Organic Spice Blend',
    tastingNotes: ['Warm Spice', 'Earthy Honey', 'Cardamom'],
    prepTime: '4 mins'
  },
  {
    id: 'm10',
    name: 'Pistachio Raspberry Mille-Feuille',
    category: 'Desserts',
    description: 'Caramelized puff pastry leaves layered with pistachio diplomate cream and fresh raspberries.',
    longDescription: 'Handcrafted daily by our master French pastry chef. Crisp caramelized puff pastry sheets layered with light Iranian pistachio cream, fresh organic berries, and gold dust.',
    price: 12.00,
    rating: 5.0,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    isBestSeller: true,
    calories: 420,
    prepTime: 'Fresh daily display'
  },
  {
    id: 'm11',
    name: 'Classic Artisanal Almond Croissant',
    category: 'Desserts',
    description: '24-hour fermented butter croissant filled with frangipane cream and toasted sliced almonds.',
    longDescription: 'Made with AOP Isigny French butter. Crisp golden exterior that shatters upon first bite, revealing a buttery interior infused with sweet almond cream.',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    calories: 380,
    prepTime: 'Fresh daily display'
  },
  {
    id: 'm12',
    name: 'Truffled Wild Mushroom Tartine',
    category: 'Breakfast',
    description: 'Sourdough toast, roasted chanterelle and cremini mushrooms, white truffle oil, poached organic egg.',
    longDescription: 'House-made 48-hour fermented sourdough brushed with garlic confit butter, topped with sautéed wild forest mushrooms, black truffle glaze, microgreens, and a runny golden egg yolk.',
    price: 16.50,
    rating: 4.9,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    calories: 480,
    prepTime: '10 mins'
  },
  {
    id: 'm13',
    name: 'Avocado Tartine with Smoked Salmon',
    category: 'Breakfast',
    description: 'Country sourdough, smashed Hass avocado, Norwegian cold-smoked salmon, capers, pickled shallots.',
    longDescription: 'Artisan sourdough topped with citrus-infused Hass avocado, thin slices of wild Norwegian smoked salmon, crisp red onions, caper berries, and extra virgin olive oil.',
    price: 17.50,
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    prepTime: '8 mins'
  },
  {
    id: 'm14',
    name: 'Prosciutto di Parma & Fig Panini',
    category: 'Sandwiches',
    description: 'Aged Prosciutto di Parma, black fig jam, creamy burrata cheese, wild arugula on toasted ciabatta.',
    longDescription: 'Pressed artisanal ciabatta bread layered with 24-month aged Italian Prosciutto, soft fresh burrata, caramelized fig preserves, and balsamic reduction.',
    price: 16.00,
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    calories: 540,
    prepTime: '10 mins'
  },
  {
    id: 'm15',
    name: 'Smoked Wagyu Beef & Gruyere Focaccia',
    category: 'Sandwiches',
    description: 'Thin sliced Wagyu roast beef, melted Swiss Gruyere, horseradish aioli, caramelized onion jam.',
    longDescription: 'House-baked olive oil focaccia stuffed with tender slow-roasted Wagyu beef, sharp melted Gruyere cheese, tangy stone-ground mustard, and sweet balsamic onions.',
    price: 18.50,
    rating: 4.9,
    reviewsCount: 61,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isSpecial: true,
    calories: 620,
    prepTime: '12 mins'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Victoria Sterling',
    location: 'Architect & Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'Maison Du Café is the pinnacle of luxury coffee culture. The Bourbon Barrel Smoked Latte is an unforgettable sensory journey. The interior lighting and ambiance make every morning visit feel like a retreat in Paris.',
    date: '2 days ago',
    favoriteDrink: 'Bourbon Barrel Smoked Latte'
  },
  {
    id: 'r2',
    name: 'Julian Vance',
    location: 'Food & Wine Critic',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'As someone who has traveled to roasteries from Milan to Tokyo, their Panama Geisha pour over is flawless. Precision temperature extraction and incredible floral notes. Unrivaled hospitality.',
    date: '1 week ago',
    favoriteDrink: 'Panama Geisha Pour Over'
  },
  {
    id: 'r3',
    name: 'Elena Rostova',
    location: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    comment: 'The Gold Leaf Cappuccino paired with the Pistachio Mille-Feuille is divine. The attention to detail, velvet seating, and quiet luxury aesthetic make it my absolute favorite spot for afternoon meetings.',
    date: '3 weeks ago',
    favoriteDrink: 'Gold Leaf Velvet Cappuccino'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Matteo Bellini',
    role: 'Head Roaster & Master Barista',
    bio: 'World Barista Champion 2021 with over 16 years perfecting micro-lot coffee extractions across Italy, Colombia, and Ethiopia.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80',
    specialty: 'Single-Origin Extraction & Roasting',
    awards: ['World Barista Champion', 'Q-Grader Certified']
  },
  {
    id: 't2',
    name: 'Camille Laurent',
    role: 'Executive Pastry Chef',
    bio: 'Trained at Le Cordon Bleu Paris and former pastry chef at 3-star Michelin establishments. Master of laminated butter pastry and French patisserie.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    specialty: 'Artisanal Mille-Feuille & Croissants',
    awards: ['Best French Artisan 2020', 'Pastry Master Award']
  },
  {
    id: 't3',
    name: 'Soren Lindqvist',
    role: 'Sensory Specialist & Mixologist',
    bio: 'Pioneer of coffee mixology, fusing barrel aging techniques, botanical infusions, and cold extraction wizardry into signature coffee cocktails.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Smoked Lattes & Botanical Brews',
    awards: ['Innovator of the Year', 'Scandi Coffee Cup Winner']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Sacred Art of Barrel-Aged Coffee Beans',
    category: 'Roasting Craft',
    date: 'August 2, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore how aging green coffee beans inside charred French oak bourbon barrels creates rich layers of caramel, peat, and cocoa notes.',
    content: 'Coffee roasting is both a science and a sensory ritual. When green unroasted coffee beans rest inside freshly emptied oak barrels, they slowly absorb the subtle vaporized spirits and deep wood char. Over 60 days of monitoring temperature and ambient humidity, the green bean absorbs vanilla tannins before entering our custom cast-iron drum roaster...',
    author: 'Matteo Bellini'
  },
  {
    id: 'b2',
    title: 'Panama Geisha: Why It Is the World’s Most Coveted Brew',
    category: 'Bean Origins',
    date: 'July 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'High in the volcanic highlands of Boquete, Panama, rare Geisha coffee trees yield complex aromas reminiscent of jasmine and white peach.',
    content: 'Discovered in the Geisha mountain region of Ethiopia in the 1930s and brought to Panama, this delicate heirloom variety thrives exclusively above 1,700 meters elevation. The extreme temperature variations cause the coffee cherries to ripen slowly, concentrating organic sugars and yielding tea-like floral clarity...',
    author: 'Soren Lindqvist'
  },
  {
    id: 'b3',
    title: 'Mastering the Perfect Morning Micro-Foam Texture',
    category: 'Barista Tips',
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    excerpt: 'The secret behind glossy wet paint milk foam that elevates espresso without masking delicate flavor top notes.',
    content: 'Pouring latte art is not just aesthetic decoration; it is proof of perfect milk texture. Aerating milk at precisely 65°C breaks protein bonds to create microscopic bubble matrices. In this guide, our master baristas share how to swirl and stretch milk at home...',
    author: 'Camille Laurent'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Custom Cast-Iron Roaster',
    category: 'Roastery',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    description: 'Our custom German vintage roaster slow-roasting micro-lots to peak flavor expression.'
  },
  {
    id: 'g2',
    title: 'Precision Swan Neck Pouring',
    category: 'Latte Art',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    description: 'Pouring gold leaf cappuccino with velvet micro-textured foam.'
  },
  {
    id: 'g3',
    title: 'Warm Velvet Lounge Architecture',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    description: 'Immersive dark wood surfaces, low warm ambient lighting, and leather seating.'
  },
  {
    id: 'g4',
    title: 'Freshly Baked Pistachio Patisserie',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Flaky French puff pastry layers filled with Sicilian pistachio cream.'
  },
  {
    id: 'g5',
    title: 'Barista Extraction Station',
    category: 'Roastery',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    description: 'Pressure profiling extraction on our custom brass espresso machine.'
  },
  {
    id: 'g6',
    title: 'Sunlit Window Alcove Seating',
    category: 'Ambiance',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    description: 'Peaceful morning light streaming onto marble tables and velvet cushions.'
  }
];
