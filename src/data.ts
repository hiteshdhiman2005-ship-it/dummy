import { Product, BlogPost, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Prestige Elite Chronograph',
    price: 899,
    description: 'A sophisticated chronograph watch featuring a stainless steel case, sapphire crystal, and water resistance up to 100 meters.',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=800',
    features: [
      'Precision Quartz Chronograph movement with 1/10-sec subdial',
      'High-grade 316L Stainless Steel case and link bracelet',
      'Scratch-resistant Sapphire Crystal face with anti-reflective coating',
      'Water resistant to 100m (10 ATM), safe for swimming',
      'Luminous hour markers and hands for high visibility'
    ],
    movement: 'High-Precision Quartz Chronograph',
    waterResistance: '100m (10 ATM)',
    glassType: 'Scratch-Resistant Sapphire Crystal',
    strapMaterial: '316L Stainless Steel',
    featured: true,
  },
  {
    id: '2',
    name: 'Prestige Royal Automatic',
    price: 1299,
    description: 'Luxury automatic movement with premium leather strap and elegant dial design.',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    features: [
      'Caliber PT-100 Self-Winding automatic movement with 42-hour power reserve',
      'Exhibition display case back showcasing internal gear craftsmanship',
      'Genuine full-grain alligator-style brown leather strap with deployment clasp',
      'Polished 18K rose gold-plated bezel and crown accents',
      'Water resistant to 50m (5 ATM)'
    ],
    movement: 'Self-Winding Swiss Automatic (Mechanical)',
    waterResistance: '50m (5 ATM)',
    glassType: 'Arched Sapphire Crystal',
    strapMaterial: 'Premium Genuine Leather (Brown)',
    featured: true,
  },
  {
    id: '3',
    name: 'Prestige Sport X',
    price: 499,
    description: 'Built for active lifestyles with shock resistance and advanced durability.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=800',
    features: [
      'Ultra-durable carbon-reinforced composite hardware case',
      'Superior shock-absorption housing protects the movement',
      'Textured hypoallergenic vulcanized rubber sport strap',
      'Uni-directional rotating timing ceramic bezel',
      'Water resistant to 200m (20 ATM), certified for scuba diving'
    ],
    movement: 'Impact-Shielded Heavy Duty Quartz',
    waterResistance: '200m (20 ATM)',
    glassType: 'Hardened Mineral Crystal',
    strapMaterial: 'Vulcanized High-Durability Rubber',
    featured: true,
  },
  {
    id: '4',
    name: 'Prestige Smart Pro',
    price: 349,
    description: 'Modern smartwatch with fitness tracking, notifications, and long battery life.',
    category: 'Smart',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800',
    features: [
      '1.4-inch high-resolution Always-On AMOLED bezel-less touchscreen',
      'Continuous heart rate, Blood Oxygen (SpO2), and sleep tracker sensors',
      'Bluetooth pairing to iOS/Android for smart notifications & music controls',
      'Advanced multi-sport GPS tracking and step metrics',
      'Up to 14 days of typical use on a single charge'
    ],
    movement: 'Prestige WearOS Electronic Chipset',
    waterResistance: '30m (3 ATM) - Splash Resistant',
    glassType: 'Gorilla Ceramic Glass',
    strapMaterial: 'Soft-touch Durable Silicon Strap (Matte Black)',
    featured: false,
  },
  {
    id: '5',
    name: 'Prestige Classic Heritage',
    price: 699,
    description: 'Inspired by traditional watchmaking with timeless aesthetics and reliable performance.',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
    features: [
      'Ultra-thin 38mm polished stainless steel vintage case',
      'Minimalist cream-egg shell dial with gold leaf-shaped indices',
      'Custom Swiss Caliper hand-wound mechanical core',
      'Supple textured Italian nubuck leather strap',
      'Water resistant to 30m (3 ATM)'
    ],
    movement: 'Swiss Mechanical Hand-Wound',
    waterResistance: '30m (3 ATM)',
    glassType: 'Double-Domed Acrylic crystal for vintage warmth',
    strapMaterial: 'Supple Italian Nubuck Flat Leather (Black)',
    featured: false,
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The History of Luxury Watches',
    summary: 'Luxury watches have evolved from simple timekeeping devices into symbols of craftsmanship, prestige, and personal style.',
    content: [
      'The journey of horology began in 16th-century Europe, where portable spring-driven clocks emerged in Germany and Italy. Initially, these were bulky ornamental objects worn around the neck. It was not until the early 20th century that the war-time utility paved the way for wristwatches, transitioning watches from precious decorative jewelry items into reliable personal tools.',
      'As time grew closer to the mid-century, Swiss watchmakers perfected mechanical calibers, turning watches into the ultimate badges of status, prestige, and personal taste. Legendary brands introduced waterproofing, automatic self-winding rotors, robust dive bezels, and complications like dual timezones.',
      'In the digital age, a mechanical luxury watch has transcended utility entirely. It is a work of mechanical kinetic art. Wearing a fine watch is an appreciation of artistry — celebrating centuries-old traditions of finishing, polishing, engraving, and hand-assembly that cannot be replicated by microchips.'
    ],
    publishedDate: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800',
    author: 'Eleanor Sterling',
    readTime: '5 min read'
  },
  {
    id: 'b2',
    title: 'How to Choose the Perfect Watch',
    summary: 'When selecting a watch, consider your lifestyle, budget, movement type, and preferred design.',
    content: [
      'Finding the perfect watch is a deeply personal journey. First, evaluate your daily lifestyle. Are you primarily in business meetings and formal events, or are you tracking outdoor workouts and swimming? A dress watch like the Prestige Classic Heritage excels under a suit cuff, while the Sport X is built to withstand extreme mechanical shocks and underwater depths.',
      'Your budget is the next guide. Mechanical and automatic watches command higher premiums due to the complexity of micro-mechanical engineering and artisan labor. Quartz and digital smartwatches offer unmatched convenience, precision accuracy, and a lower cost of ownership.',
      'Lastly, check the dimensions on your wrist. Case diameter (typically between 38mm to 44mm) and thickness decide how a timepiece wears. Try contrasting metal tones and leather textures against your usual wardrobe choices to select a watch that becomes an extension of your own identity.'
    ],
    publishedDate: 'February 10, 2026',
    image: 'https://images.unsplash.com/photo-1495856458685-61c1a201854c?auto=format&fit=crop&q=80&w=800',
    author: 'James Sterling',
    readTime: '4 min read'
  },
  {
    id: 'b3',
    title: 'Automatic vs Quartz: Best Automatic Watches Under 1000',
    summary: 'Understanding the differences between automatic and quartz watches can help you find the best automatic watches under 1000 for your collection.',
    content: [
      'The core difference between Automatic and Quartz watches lies in what breathes life into them. Quartz watches are battery-pulsed. A battery sends electric currents through a minuscule synthetic quartz crystal, causing it to vibrate exactly 32,768 times per second. This results in incredibly accurate timekeeping (typically drifting only +/-15 seconds a month) with minimal maintenance required.',
      'Automatic watches are powered by kinetic gravity. As you move your arm throughout the day, a tiny weighted rotor inside the watch spins, winding the mainspring. Release of that mainspring tension drives a complex train of gears and escapements, causing the seconds hand to sweep continuously instead of stepping chunkily second-by-second.',
      'While Quartz is technically superior in precision and affordability, Automatics are beloved for their soul. They are mini machines working entirely without cords, batteries, or software. For those looking to enter the world of mechanical craftsmanship, we have compiled a curated index of the best automatic watches under 1000, illustrating that high horology and legendary value can go hand in hand.'
    ],
    publishedDate: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    author: 'Marcus Vance',
    readTime: '6 min read'
  },
  {
    id: 'b4',
    title: 'How to Maintain Mechanical Watch & Automatic Timepieces',
    summary: 'Discover professional watchmaking secrets on how to maintain mechanical watch gears and cases at home for peak lifetime accuracy.',
    content: [
      'A fine watch is engineered to last for generations, but only if it is handled with care. To master how to maintain mechanical watch movements, you must follow several baseline rules. First and foremost, clean your watch periodically. Use a soft, dry microfiber cloth to wipe smudged sapphire crystal faces and watch cases. Dirt in metal bracelet links acts as an abrasive, wearing them out prematurely.',
      'Avoid strong magnetic fields. Speakers, laptops, and refrigerators can magnetize the fine hairspring inside mechanical watches, causing them to run excessively fast or slow. If this happens, a simple trip to a watchmaker for demagnetization will solve it.',
      'Finally, pay close attention to water gaskets. Always ensure your winding crown is pushed in or screwed down completely before any liquid exposure. For anyone learning how to maintain mechanical watch calibers, plan a full brand overhaul service every 3 to 5 years, where experts clean, oil, and reseal internal components to maximize longevity.'
    ],
    publishedDate: 'April 20, 2026',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=800',
    author: 'Silvia Cruz',
    readTime: '4 min read'
  },
  {
    id: 'b5',
    title: 'Trending Watch Styles & Designs for 2026',
    summary: 'Explore the latest trending watch styles shaping the industry, from integrated luxury bracelets to sustainable materials.',
    content: [
      'Horological design trends are changing in 2026, leaning towards thoughtful size reductions and structural innovations. Jumbo watch cases are stepping back. Integrated-bracelet sports watches in the 37mm to 39mm range represent some of the most prominent trending watch styles, celebrating unisex appeal and streamlined comfort.',
      'Color scales are also shifting. Forest greens, deep navy blues, and textured terracotta sand dials are replacing simple black and silver dials. Collectors looking to find trending watch styles are showing an appetite for textured guilloché and enamel dials that exhibit genuine artistic complexity under direct light.',
      'Finally, material sustainability is leading manufacturing choices. From straps woven from recycled ocean-bound plastics and vegan grape leather to cases machined from fully recycled stainless steel Alloys, premium watchmaking is proving that high elegance can exist hand-to-hand with planetary responsibility.'
    ],
    publishedDate: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800',
    author: 'Adrian Thorne',
    readTime: '5 min read'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Michael Johnson',
    rating: 5,
    comment: 'I purchased a Prestige Elite watch and was amazed by the craftsmanship and quality. Highly recommended!',
    date: 'February 14, 2026',
    verified: true
  },
  {
    id: 'r2',
    name: 'Sophia Lindqvist',
    rating: 5,
    comment: 'The Royal Automatic is an absolute showstopper. I get compliments on the open-heart skeleton dial every single time I wear it. Worth every penny!',
    date: 'April 2, 2026',
    verified: true
  },
  {
    id: 'r3',
    name: 'David Vance',
    rating: 4,
    comment: 'Perfect for regular running and water activities. Extremely lightweight, tough frame, and looks much more tactical than ordinary plastic sports watches.',
    date: 'May 19, 2026',
    verified: true
  }
];
