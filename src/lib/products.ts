export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'shirts' | 'gloves' | 'accessories' | 'clubs' | 'bags' | 'pants' | 'tees' | 'headwear' | 'secondhand' | 'equipment';
  price: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  stock: number;
  featured: boolean;
  description: string;
  details: string[];
  care: string[];
}

const baseProducts: Product[] = [
  {
    id: 'app-azure-crest',
    name: 'Azure Crest Polo',
    slug: 'azure-crest-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/Shop/Apparel/Blue%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azure', 'White', 'Olive'],
    stock: 15,
    featured: false,
    description: 'Moisture-wicking performance polo in a cool azure tone built for Chiang Mai heat.',
    details: ['4-way stretch fabric', 'UV protection', 'Breathable mesh panels', 'Modern slim fit'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not bleach']
  },
  {
    id: 'app-sandstone',
    name: 'Sandstone Polo',
    slug: 'sandstone-polo',
    category: 'shirts',
    price: 1290,
    images: ['/images/Shop/Apparel/Creme%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Matcha', 'Olive'],
    stock: 20,
    featured: false,
    description: 'Cream-toned range staple with a buttery handfeel for all-day comfort.',
    details: ['100% organic cotton', 'Relaxed fit', 'Reinforced stitching'],
    care: ['Machine wash cold', 'Hang dry recommended']
  },
  {
    id: 'app-floral-fairway',
    name: 'Floral Fairway Polo',
    slug: 'floral-fairway-polo',
    category: 'shirts',
    price: 1890,
    images: ['/images/Shop/Apparel/floral%20polo.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Cream', 'Olive'],
    stock: 14,
    featured: true,
    description: 'Signature floral polo inspired by Chiang Mai botanicals with a breathable knit.',
    details: ['Pattern-knit pique', 'Moisture-wicking', 'Relaxed athletic fit'],
    care: ['Machine wash cold', 'Dry flat', 'Do not bleach']
  },
  {
    id: 'app-mint-jacket',
    name: 'Mint Canvas Range Jacket',
    slug: 'mint-canvas-range-jacket',
    category: 'shirts',
    price: 2890,
    images: ['/images/Shop/Apparel/mint%20jacket.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Mint', 'Cream'],
    stock: 12,
    featured: false,
    description: 'Lightweight canvas layer for breezy Chiang Mai mornings.',
    details: ['Two-way zip', 'Side vents', 'Hidden scorecard pocket'],
    care: ['Machine wash cold', 'Hang dry in shade']
  },
  {
    id: 'app-pink-jacket',
    name: 'Lotus Pink Canvas Jacket',
    slug: 'lotus-pink-canvas-jacket',
    category: 'shirts',
    price: 2890,
    images: ['/images/Shop/Apparel/pink%20jacket.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Bone'],
    stock: 10,
    featured: true,
    description: 'Soft-touch canvas jacket dyed in Birdiez lotus tones.',
    details: ['Matte snaps', 'Interior stash pocket', 'Relaxed fit'],
    care: ['Machine wash delicate', 'Hang dry']
  },
  {
    id: 'app-rain-green',
    name: 'Highland Rain Shell',
    slug: 'highland-rain-shell',
    category: 'shirts',
    price: 3190,
    images: ['/images/Shop/Apparel/rainjacket%20green.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Forest', 'Black'],
    stock: 14,
    featured: true,
    description: 'Ultra-light rain shell sealed for afternoon downpours.',
    details: ['Waterproof zips', 'Adjustable cuffs', 'Packable hood'],
    care: ['Machine wash cold', 'Hang dry']
  },
  {
    id: 'app-rain-brown',
    name: 'Chiang Mai Storm Shell',
    slug: 'chiang-mai-storm-shell',
    category: 'shirts',
    price: 3190,
    images: ['/images/Shop/Apparel/rainjacket%20brown.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cinnamon', 'Sand'],
    stock: 14,
    featured: false,
    description: 'Weatherproof outer layer with Birdiez contrast taping.',
    details: ['Fully seam sealed', 'Breathable membrane', 'Drop tail hem'],
    care: ['Machine wash cold', 'Tumble dry low']
  },
  {
    id: 'app-socks-green',
    name: 'Matcha Gradient Crew Socks',
    slug: 'matcha-gradient-crew-socks',
    category: 'shirts',
    price: 620,
    images: ['/images/Shop/Apparel/socks%20green.png'],
    sizes: ['One Size'],
    colors: ['Matcha'],
    stock: 32,
    featured: false,
    description: 'Padded crew socks with gradient knit to anchor the apparel wall.',
    details: ['Breathable cotton blend', 'Reinforced heel and toe', 'Ribbed arch support'],
    care: ['Machine wash warm', 'Tumble dry low']
  },
  {
    id: 'app-socks-orange',
    name: 'Citrus Gradient Crew Socks',
    slug: 'citrus-gradient-crew-socks',
    category: 'shirts',
    price: 620,
    images: ['/images/Shop/Apparel/socks%20orange.png'],
    sizes: ['One Size'],
    colors: ['Citrus'],
    stock: 30,
    featured: false,
    description: 'Vivid orange gradient socks to pair with Birdiez resort polos.',
    details: ['Breathable cotton blend', 'Reinforced heel and toe', 'Ribbed arch support'],
    care: ['Machine wash warm', 'Tumble dry low']
  },
  {
    id: 'app-socks-pink',
    name: 'Lotus Gradient Crew Socks',
    slug: 'lotus-gradient-crew-socks',
    category: 'shirts',
    price: 620,
    images: ['/images/Shop/Apparel/socks%20pink.png'],
    sizes: ['One Size'],
    colors: ['Lotus'],
    stock: 28,
    featured: false,
    description: 'Soft pink gradient socks inspired by Chiang Mai lotus blooms.',
    details: ['Breathable cotton blend', 'Reinforced heel and toe', 'Ribbed arch support'],
    care: ['Machine wash warm', 'Tumble dry low']
  },
  {
    id: 'head-letter-cap-mint',
    name: 'Birdie Letter Cap – Mint',
    slug: 'birdie-letter-cap-mint',
    category: 'headwear',
    price: 990,
    images: ['/images/Shop/Headgear/birdie%20letter%20cap%20mint.png'],
    sizes: ['One Size'],
    colors: ['Mint'],
    stock: 18,
    featured: true,
    description: 'Structured cap with varsity Birdie lettermark.',
    details: ['Moisture-wicking band', 'Adjustable strap', 'Contrast embroidery'],
    care: ['Spot clean only', 'Air dry']
  },
  {
    id: 'head-letter-cap-orange',
    name: 'Birdie Letter Cap – Orange',
    slug: 'birdie-letter-cap-orange',
    category: 'headwear',
    price: 990,
    images: ['/images/Shop/Headgear/birdie%20letter%20cap%20orange.png'],
    sizes: ['One Size'],
    colors: ['Orange'],
    stock: 18,
    featured: false,
    description: 'Bold citrus colorway of the Birdie varsity cap.',
    details: ['Raised embroidery', 'Adjustable strap', 'UV treated fabric'],
    care: ['Spot clean only']
  },
  {
    id: 'head-letter-cap-pink',
    name: 'Birdie Letter Cap – Pink',
    slug: 'birdie-letter-cap-pink',
    category: 'headwear',
    price: 990,
    images: ['/images/Shop/Headgear/birdie%20letter%20cap%20pink.png'],
    sizes: ['One Size'],
    colors: ['Pink'],
    stock: 18,
    featured: false,
    description: 'Soft pink cap finished with chenille Birdie letter.',
    details: ['Moisture-wicking band', 'Adjustable strap', 'Contrast underbrim'],
    care: ['Spot clean only']
  },
  {
    id: 'head-letter-cap-white',
    name: 'Birdie Letter Cap – White',
    slug: 'birdie-letter-cap-white',
    category: 'headwear',
    price: 990,
    images: ['/images/Shop/Headgear/birdie%20letter%20cap%20white.png'],
    sizes: ['One Size'],
    colors: ['White'],
    stock: 18,
    featured: false,
    description: 'Clean white cap with Birdie letter crest.',
    details: ['Structured crown', 'Adjustable strap', 'Moisture-wicking band'],
    care: ['Spot clean only']
  },
  {
    id: 'head-logo-cap-mint',
    name: 'Birdie Logo Cap – Mint',
    slug: 'birdie-logo-cap-mint',
    category: 'headwear',
    price: 890,
    images: ['/images/Shop/Headgear/birdie%20logo%20cap%20mint.png'],
    sizes: ['One Size'],
    colors: ['Mint'],
    stock: 20,
    featured: true,
    description: 'Classic Birdie mascot cap in a mint palette.',
    details: ['Raised mascot embroidery', 'Adjustable strap', 'Sweat-wicking band'],
    care: ['Spot clean only']
  },
  {
    id: 'head-logo-cap-orange',
    name: 'Birdie Logo Cap – Orange',
    slug: 'birdie-logo-cap-orange',
    category: 'headwear',
    price: 890,
    images: ['/images/Shop/Headgear/birdie%20logo%20cap%20orange.png'],
    sizes: ['One Size'],
    colors: ['Orange'],
    stock: 20,
    featured: false,
    description: 'Signature Birdie mascot cap in citrus tones.',
    details: ['Moisture-wicking band', 'Adjustable strap', 'Contrast underbrim'],
    care: ['Spot clean only']
  },
  {
    id: 'head-logo-cap-pink',
    name: 'Birdie Logo Cap – Pink',
    slug: 'birdie-logo-cap-pink',
    category: 'headwear',
    price: 890,
    images: ['/images/Shop/Headgear/birdie%20logo%20cap%20pink.png'],
    sizes: ['One Size'],
    colors: ['Pink'],
    stock: 20,
    featured: false,
    description: 'Birdie mascot cap in lotus pink.',
    details: ['Embossed mascot', 'Adjustable strap', 'Sweat-wicking band'],
    care: ['Spot clean only']
  },
  {
    id: 'head-logo-cap-white',
    name: 'Birdie Logo Cap – White',
    slug: 'birdie-logo-cap-white',
    category: 'headwear',
    price: 890,
    images: ['/images/Shop/Headgear/birdie%20logo%20cap%20white.png'],
    sizes: ['One Size'],
    colors: ['White'],
    stock: 20,
    featured: false,
    description: 'Classic white Birdie mascot cap for everyday wear.',
    details: ['Structured crown', 'Adjustable strap', 'Moisture-wicking band'],
    care: ['Spot clean only']
  },
  {
    id: 'glove-all-weather',
    name: 'All-Weather Glove',
    slug: 'all-weather-glove',
    category: 'gloves',
    price: 690,
    images: ['/images/Shop/Equipment/glove%20birdiez.png'],
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Grey'],
    stock: 18,
    featured: false,
    description: 'Synthetic glove designed for all weather conditions.',
    details: ['Water-resistant palm', 'Enhanced grip', 'Durable construction'],
    care: ['Machine washable', 'Air dry']
  },
  {
    id: 'glove-birdiez-mint',
    name: 'Cabretta Performance Glove – Mint',
    slug: 'cabretta-performance-glove-mint',
    category: 'gloves',
    price: 790,
    images: ['/images/Shop/Equipment/glove%20birdiez%20mint.png'],
    sizes: ['S', 'M', 'L'],
    colors: ['Mint'],
    stock: 16,
    featured: true,
    description: 'Premium cabretta leather glove with mint tab.',
    details: ['Perforated fingers', 'Stretch gusset', 'Soft cabretta palm'],
    care: ['Air dry only', 'Store flat']
  },
  {
    id: 'glove-birdiez-orange',
    name: 'Cabretta Performance Glove – Orange',
    slug: 'cabretta-performance-glove-orange',
    category: 'gloves',
    price: 790,
    images: ['/images/Shop/Equipment/glove%20birdiez%20orange.png'],
    sizes: ['S', 'M', 'L'],
    colors: ['Orange'],
    stock: 16,
    featured: false,
    description: 'Cabretta glove with Birdiez orange tab and piping.',
    details: ['Weather-treated leather', 'Dual closure', 'Micro-perf ventilation'],
    care: ['Air dry only']
  },
  {
    id: 'glove-birdiez-pink',
    name: 'Cabretta Performance Glove – Pink',
    slug: 'cabretta-performance-glove-pink',
    category: 'gloves',
    price: 790,
    images: ['/images/Shop/Equipment/glove%20birdiez%20pink.png'],
    sizes: ['S', 'M', 'L'],
    colors: ['Pink'],
    stock: 16,
    featured: false,
    description: 'Soft cabretta glove with lotus pink finishes.',
    details: ['Stretch gusset', 'Micro-perf ventilation', 'Velcro tab'],
    care: ['Air dry only']
  },
  {
    id: 'acc-heritage-cover',
    name: 'Heritage Golf Cover',
    slug: 'golf-cover',
    category: 'accessories',
    price: 2290,
    images: ['/images/Shop/Accessories/golf-cover.png'],
    stock: 12,
    featured: true,
    description: 'Full-grain leather golf cover with contrast Birdiez stitching.',
    details: ['Full-grain leather', 'Magnetic closure', 'Microfleece lining'],
    care: ['Spot clean only', 'Condition leather seasonally']
  },
  {
    id: 'acc-leather-kit',
    name: 'Leather Tee Holder Kit',
    slug: 'leather-tee-holder-kit',
    category: 'accessories',
    price: 1590,
    images: ['/images/Shop/Accessories/leather%20tee%20holder.png'],
    stock: 14,
    featured: false,
    description: 'Premium leather tee wallet bundled with hand-dipped tees.',
    details: ['Full-grain leather', 'Magnetic snap', 'Includes 25 tees'],
    care: ['Spot clean', 'Condition leather seasonally']
  },
  {
    id: 'acc-cig-tee-holder',
    name: 'Cig Box Tee Holder',
    slug: 'cig-box-tee-holder',
    category: 'accessories',
    price: 1290,
    images: ['/images/Shop/Accessories/cig%20box%20tee%20holder.png'],
    stock: 22,
    featured: true,
    description: 'Vintage-inspired tee holder shaped like a cig box.',
    details: ['Leather exterior', 'Elastic tee straps', 'Fits 30 tees'],
    care: ['Spot clean only', 'Condition leather seasonally']
  },
  {
    id: 'train-tempo',
    name: 'Tempo Swing Trainer',
    slug: 'tempo-swing-trainer',
    category: 'equipment',
    price: 1890,
    images: ['/images/Shop/Equipment/training%20aid%20swingspeed.png'],
    stock: 20,
    featured: true,
    description: 'Compact tempo trainer for dialing in rhythm at home.',
    details: ['Adjustable weight', 'Grip alignment guide', 'Carry sleeve included'],
    care: ['Wipe clean after sessions', 'Store indoors']
  },
  {
    id: 'train-balance',
    name: 'Balance Tempo Trainer',
    slug: 'balance-tempo-trainer',
    category: 'equipment',
    price: 1790,
    images: ['/images/Shop/Equipment/training%20aid%20balance.png'],
    stock: 18,
    featured: false,
    description: 'Dual-weight balance trainer to sync lower body tempo.',
    details: ['Weighted ends', 'Non-slip grip', 'Includes drills booklet'],
    care: ['Wipe clean after sessions']
  },
  {
    id: 'balls-tour-spin',
    name: 'Tour Spin Balls (Dozen)',
    slug: 'tour-spin-balls',
    category: 'equipment',
    price: 1690,
    images: ['/images/Shop/Equipment/golfballsbirdiez.png'],
    stock: 36,
    featured: true,
    description: 'Urethane-covered tour ball tuned for high launch and soft feel.',
    details: ['3-piece construction', 'Urethane cover', 'Mid-high launch'],
    care: ['Wipe clean after rounds']
  },
  {
    id: 'bags-bold-cart',
    name: 'Bold Cart Bag 01',
    slug: 'bold-cart-bag-01',
    category: 'bags',
    price: 3500,
    images: ['/images/Shop/Bags/red-bag.png'],
    stock: 8,
    featured: true,
    description: 'Statement cart bag finished in Birdiez bold red with tonal branding.',
    details: ['14-way divider', 'Magnetic rangefinder pocket', 'Rain hood'],
    care: ['Spot clean only', 'Store in dry area']
  },
  {
    id: 'bags-palm-stand',
    name: 'Palm Stand Bag 01',
    slug: 'palm-stand-bag-01',
    category: 'bags',
    price: 3500,
    images: ['/images/Shop/Bags/green-bag.png'],
    stock: 10,
    featured: true,
    description: 'Forest green stand bag built for scooter commutes and compact lockers.',
    details: ['Carbon legs', 'Velvet-lined valuables pocket', 'Weight 1.8kg'],
    care: ['Spot clean only', 'Air dry']
  },
  {
    id: 'bags-tricolor-carry',
    name: 'Tricolor Carry Bag',
    slug: 'tricolor-carry-bag',
    category: 'bags',
    price: 3600,
    images: ['/images/Shop/Bags/black%20white%20orange%20bag.png'],
    stock: 5,
    featured: true,
    description: 'Three-tone carry bag with Birdiez orange strap accents.',
    details: ['5-way divider', 'Dual straps', 'Velvet valuables pocket'],
    care: ['Spot clean only', 'Air dry fully']
  },
  {
    id: 'secondhand-nike-sumo2-driver',
    name: 'NIKE GOLF SasQuatch SUMO2 5900 Driver',
    slug: 'nike-golf-sumo2-driver',
    category: 'secondhand',
    price: 7499,
    images: [
      '/images/Shop/Secondhand/Nike%20Driver%20SQ/Secondhand%20NIKE%20GOLF%20SasQuatch%20SUMO2%205900%20DRIVER%209.5deg%20Flex-S%20Diamana%20S63%20350TIP.png',
      '/images/Shop/Secondhand/Nike%20Driver%20SQ/Secondhand%20NIKE%20GOLF%20SasQuatch%20SUMO2%205900%20DRIVER%209.5deg%20Flex-S%20Diamana%20S63%20350TIP%202.png',
      '/images/Shop/Secondhand/Nike%20Driver%20SQ/Secondhand%20NIKE%20GOLF%20SasQuatch%20SUMO2%205900%20DRIVER%209.5deg%20Flex-S%20Diamana%20S63%20350TIP%203.png',
      '/images/Shop/Secondhand/Nike%20Driver%20SQ/Secondhand%20NIKE%20GOLF%20SasQuatch%20SUMO2%205900%20DRIVER%209.5deg%20Flex-S%20Diamana%20S63%20350TIP%204.png'
    ],
    stock: 1,
    featured: true,
    description:
      'Secondhand NIKE GOLF SasQuatch SUMO2 5900 driver (9.5°) with Diamana S63 350 tip shaft, no headcover.',
    details: ['9.5° loft', 'Stiff Diamana S63 350 tip shaft', 'Square SUMO2 head', 'No headcover'],
    care: ['Clean after each round', 'Store dry']
  },
  {
    id: 'secondhand-nike-vapor-driver',
    name: 'NIKE GOLF Vapor Speed Driver',
    slug: 'nike-vapor-speed-driver',
    category: 'secondhand',
    price: 9600,
    images: [
      '/images/Shop/Secondhand/Nike%20Vapor%20Driver/NIKE%20GOLF%20VAPOR%20SPEED%208.5-12.5deg%20DRIVER%20Flex-S%20Tour%20AD%20MJ-601.png',
      '/images/Shop/Secondhand/Nike%20Vapor%20Driver/NIKE%20GOLF%20VAPOR%20SPEED%208.5-12.5deg%20DRIVER%20Flex-S%20Tour%20AD%20MJ-602.png',
      '/images/Shop/Secondhand/Nike%20Vapor%20Driver/NIKE%20GOLF%20VAPOR%20SPEED%208.5-12.5deg%20DRIVER%20Flex-S%20Tour%20AD%20MJ-603.png',
      '/images/Shop/Secondhand/Nike%20Vapor%20Driver/NIKE%20GOLF%20VAPOR%20SPEED%208.5-12.5deg%20DRIVER%20Flex-S%20Tour%20AD%20MJ-604.png'
    ],
    stock: 1,
    featured: true,
    description:
      'Secondhand NIKE GOLF Vapor Speed driver with adjustable 8.5°–12.5° loft and Tour AD MJ-601 stiff shaft.',
    details: ['Adjustable 8.5°–12.5° loft', 'Stiff Tour AD MJ-601 shaft', 'FlexLoft 2 hosel', 'Includes Vapor headcover'],
    care: ['Wipe clean after rounds', 'Store with headcover']
  }
];

export const products: Product[] = baseProducts;

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;

  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
