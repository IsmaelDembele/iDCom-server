// const { v4: uuidv4 } = require("uuid");

//sending data to server
// const handleClick = e => {
//   e.preventDefault();
//   Axios.post('http://localhost:5000/index', {
//     firstName: myName.fname,
//     lastName: myName.lname,
//   }).then(response => {
//     console.log(response);
//   });
// };

// process.env.PUBLIC_URL

export const data = [
  {
    type: "electronics",
    url: "/products/electronics/electronics01/electronic1.jpg",
    url2: "/products/electronics/electronics01/electronic2.jpg",
    name: "asus TUF Gaming",
    price: "$1599.99",
    description:
      "ASUS TUF Gaming F17 Gaming Laptop, 17.3” 144Hz Full HD IPS-Type, Intel Core i7-11800H Processor, GeForce RTX 3050 Ti, 16GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 6, Windows 10 Home, TUF706HE-DS74.",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics02/electronic1.jpg",
    url2: "/products/electronics/electronics02/electronic2.jpg",
    description:
      "Apple MacBook Pro 16 - with Touch Bar, 9th-Gen 8-Core Intel i9 2.3GHz, 16GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019 Z0Y0005J7 / Z0Y00006M.",
    name: "Apple MacBook Pro 16 inch",
    price: "$2779.85",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics03/electronic1.jpg",
    url2: "/products/electronics/electronics03/electronic2.jpg",
    description:
      "ROG Strix GA15DK Gaming Desktop PC, AMD Ryzen 7 5800X, GeForce RTX 3070, 16GB DDR4 RAM, 512GB SSD + 1TB HDD, Wi-Fi 5, Windows 10 Home, GA15DK-AS776.",
    name: "ROG Strix GA15DK Gaming",
    price: "$1948.99",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics04/electronic1.jpg",
    url2: "/products/electronics/electronics04/electronic2.jpg",
    description: "Apple Mac Mini with Apple M1 Chip (8GB RAM, 256GB SSD Storage).",
    name: "Apple Mac Mini",
    price: "$600.00",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics05/electronic1.jpg",
    url2: "/products/electronics/electronics05/electronic2.jpg",
    description: "Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked.",
    name: "Apple iPhone 12 Pro Max",
    price: "$1340.00",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics06/electronic1.jpg",
    url2: "/products/electronics/electronics06/electronic2.jpg",
    description:
      "SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Silver.",
    name: "SAMSUNG Galaxy S21 Ultra",
    price: "$949.00",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics07/electronic1.jpg",
    url2: "/products/electronics/electronics07/electronic2.jpg",
    description: "2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray.",
    name: "Apple 12.9-inch iPad Pro",
    price: "$999.00",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics08/electronic1.jpg",
    url2: "/products/electronics/electronics08/electronic2.jpg",
    description:
      "SAMSUNG Galaxy Tab S7 FE 2021 Android Tablet 12.4” Screen WiFi 64GB S Pen Included Long-Lasting Battery Powerful Performance, Mystic Black.",
    price: "$499.00",
    name: "SAMSUNG Galaxy Tab 12.4 inch",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics09/electronic1.jpg",
    url2: "/products/electronics/electronics09/electronic2.jpg",
    description: "LG OLED48C1PUB Alexa Built-in C1 Series 48 4K Smart OLED TV (2021).",
    name: "LG OLED48C1PUB",
    price: "$1200.00",
  },
  {
    type: "electronics",
    url: "/products/electronics/electronics10/electronic1.jpg",
    url2: "/products/electronics/electronics10/electronic2.jpg",
    description:
      "SAMSUNG 65-Inch Class Frame Series - 4K Quantum HDR Smart TV with Alexa Built-in (QN65LS03AAFXZA, 2021 Model).",
    name: "SAMSUNG 65-Inch Class Frame Series",
    price: "$1599.99",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home01/home1.jpg",
    url2: "/products/homes/home01/home2.jpg",
    name: "Silicone Kitchen Cooking Utensil Set",
    price: "$16.95",
    description:
      "Silicone Kitchen Cooking Utensil Set, EAGMAK 16PCS Kitchen Utensils Spatula Set with Stainless Steel Stand for Nonstick Cookware, BPA Free Non-Toxic Cooking Utensils, Kitchen Tools Gift (Mint Green) : Food Grade Safe Silicone - Made of food-grade silicone, BPA-free, very safe to use in any type of food. This silicone cooking utensils does not react with food or beverages, or produce any hazardous fumes, you don’t have to worry about the health of your families. And it will probably last longer than the other plastic kitchen utensils. ",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url2: "/products/homes/home02/home1.jpg",
    url: "/products/homes/home02/home2.jpg",
    name: "Mop and Broom Holder",
    price: "$13.99",
    description:
      "Home- Mop and Broom Holder, 5 Position with 6 Hooks Garage Storage Holds up to 11 Tools, Storage Solutions for Broom Holders, Garage Storage Systems Broom Organizer for Garage Shelving Ideas :  Plastic. " +
      "Made in USA or Imported - " +
      "superior Quality Tool Rack Holds Mops, Brooms, or Sports Equipment and Storage Tool Rack Storage & Organization.",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home03/home1.jpg",
    url2: "/products/homes/home03/home2.jpg",
    name: "Brita Standard Everyday Water Filter",
    price: "$27.99",
    description:
      "Brita Standard Everyday Water Filter Pitcher, White, Large 10 Cup, 1 Count : The BPA-free Everyday water pitcher with filter holds 10 cups of water, enough to fill 3 24-ounce reusable water bottles - " +
      "Get great-tasting water without the waste; by switching to Brita, you can save money and replace 1,800 single-use plastic water bottles a year.",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home04/home1.jpg",
    url2: "/products/homes/home04/home2.jpg",
    name: "Oyydecor Spice Rack Organizer Wall Mounted",
    price: "$24.99",
    description:
      "Oyydecor Spice Rack Organizer Wall Mounted 4-Tier Stackable Counter-top or Wall Mount Spice Rack Spice Shelf Storage Racks,Great for Kitchen Household Items,Bathroom and More -  [4 TIER SPICE RACK ] — Organize your favorite spices, seasonings, and everyday household items with a decorative wall mounted rack featuring 4 tier shelves, perfect for kitchen and/or bathroom storage - " +
      "[ELIMINATE CLUTTER] — Instantly free counter and cabinet space — Save the time and hassle of searching through cabinets for desired ingredients and products — Quickly view and neatly arrange items in one place.",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home05/home1.jpg",
    url2: "/products/homes/home05/home2.jpg",
    name: "Greenco 5 Tier Wall Mount Corner Shelves",
    price: "$21.91",
    description: `Greenco 5 Tier Wall Mount Corner Shelves Espresso Finish , 7.75" L x 7.75" W x 48.5" H. -  5 tier wall mount corner shelves Made of durable MDF laminate.
      Beautiful espresso finish that suits almost any decor.
      Easy to mount with all necessary hardware Included.
      Decorative and functional for your home, office, or dorm room.
      Dimensions in inches: 7.75" L x 7.75" W x 48.5".`,
  },
  {
    // id: uuidv4(),
    type: "homes",
    url2: "/products/homes/home06/home1.jpg",
    url: "/products/homes/home06/home2.jpg",
    name: "28 LEDs Solar Lights Outdoor",
    price: "$24.99",
    description:
      "28 LEDs Solar Lights Outdoor, Luposwiten Solar Motion Sensor Lights Wireless Security Lights, 400 Lumen Waterproof Solar Powered Lights for Steps Yard Garage Porch Patio（4-Pack.  400lm Brightness & 120 Degree Lighting Range. Luposwiten solar light has 28 powerful LEDs which produces 400 lumens illumination. More lumens means much brighter light it is. Say goodbye to darkness in the evening and costly electricity bills." +
      "5000 Hours Quality Long Lasting. This solar outdoor lights is designed with waterproof IP65. It will survive heat, rain, cold, and frost. Its lifespan amounts to 5, 000 hours, much longer than any ordinary motion sensor lights. ",
  },

  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home07/home1.jpg",
    url2: "/products/homes/home07/home2.jpg",
    name: "Indian Diwali Gifts Home Decoration",
    price: "$18.99",
    description:
      "Indian Diwali Gifts Home Decoration - Hindu OM Housewarming Return Gifts India Pooja Item Door Hanging Wall Decor Wedding Party Arts Presents. EXQUISITE CRAFTSMANSHIP Thousands of years old Asian home decoration art craft form Indian subcontinent - 100% hand painted by Indian Artist. ",
  },

  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home08/home1.jpg",
    url2: "/products/homes/home08/home2.jpg",
    name: "Expandable Under Sink Organizer",
    price: "$24.75",
    description:
      // // "Expandable Under Sink Organizer and Storage I Bathroom Under the Sink Organizer Kitchen Under Sink Shelf I Cleaning Supplies Organizer Under Sink Storage I EXPANDABLE HEIGHT DEPTH & WIDTH :  ⚡EASY TO ASSEMBLE: Our under sink organizer bathroom shelf comes in 1 box 4 legs and 1 top and is easy to assemble in minutes as well as move from room to room for your needs. When you complete your under kitchen sink organizer you can set it to 1 of 4 adjustable heights." +
      '⚡ADJUSTABLE DESIGN : Our expandable shelf organizer extends in WIDTH, HEIGHT, and DEPTH from 16"W x 10"H x 10"D to 20"W x 13"H x 14"D giving you the ultimate flexibilty for your needs. Unlike other undersink organizers our design allows you to rotate your under sink kitchen storage organizer 360 degrees to fit around your plumbing best. ',
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home09/home1.jpg",
    url2: "/products/homes/home09/home2.jpg",
    name: "Bokhot Bartender Kit",
    price: "39.99",
    description:
      "Bokhot Bartender Kit, 14 Piece Cocktail Shaker Set Stainless Steel Bar Tools with Rotating Stand, 25 oz Shaker Tins, Jigger, Spoon, Pourers, Muddler, Strainer, Tongs, Bottle Stoppers, Opener, Recipes  :  【Premium 304 Stainless Steel】Bokhot premium cocktail shaker bar tools set (14 piece) stainless steel bartender kit are made of premium stainless steel. Harmless to health, is durable, leak-proof, and non-scratchable, rustproof, not deformed and easy to clean, Stainless steel set is very easy to clean by hand with warm soap water and keep their shine with ease, Adding a modern, Sophisticated touch to your home bar." +
      "Bartender Kit with Rotating Stand Cocktail shaker set, 360° rotating turntable stand carefully designed to keep your barware tools scratch-safe, For each specific tool, The bracket has a fixed position and a dent in the corresponding position. Keep your bar tidy and avoid clutter and lost tools. ",
  },
  {
    // id: uuidv4(),
    type: "homes",
    url: "/products/homes/home10/home1.jpg",
    url2: "/products/homes/home10/home2.jpg",
    name: "Slideep Adhesive Suction Cup Shower",
    price: "$24.90",
    description:
      "Slideep Adhesive Suction Cup Shower Caddy, Bath Organizer Storage Basket Wall Shelf for Gel Holder Bathroom Accessories Shampoo, Conditioner Rustproof 304 - Set of 2 : NO TOOLS, NO DRILLING, NO SCREWS, NO HOLES. The shower shelf with strong suction technology prevents any damage to your wall and allows for flexibility to relocate.Hand polished stainless steel finished build to resist daily scratches, corrosions and tarnishes. Dimensions : 10.5in ( L ) × 5.5in (W )× 4.5in (H ) . The suction cup is 2.8inches in diameter.",
  },
  ///////////////////////////////////////////////
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book01/book1.jpg",
    name: "The Psychology of Money",
    price: "$16.99",
    description:
      "The Psychology of Money: Timeless Lessons on Wealth, Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. ",
    author: "Morgan Housel",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book02/book1.jpg",
    name: "The Basics of Bitcoins and Blockchains",
    price: "$20.63",
    description:
      "The Basics of Bitcoins and Blockchains: An Introduction to Cryptocurrencies and the Technology. There’s a lot of information on cryptocurrency and blockchains out there. But, for the uninitiated, most of this information can be indecipherable. The Basics of Bitcoins and Blockchains aims to provide an accessible guide to this new currency and the revolutionary technology that powers it.",
    author: "Antony Lewis",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book03/book1.jpg",
    name: "Man's Search for Meaning",
    price: "$8.39",
    author: "Viktor E. Frankl",
    description:
      "Man's Search for Meaning: A book for finding purpose and strength in times of great despair, the international best-seller is still just as relevant today as when it was first published.",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book04/book1.jpg",
    name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future ",
    price: "$16.99",
    author: "Ashlee Vance",
    description:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. ",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book06/book1.jpg",
    name: "R Data Structures and Algorithms",
    price: "$29.99",
    author: "Dr. PKS Prakash, Achyutuni Sri Krishna Rao",
    description:
      "R Data Structures and Algorithms : See how to use data structures such as arrays, stacks, trees, lists, and graphs through real-world examples",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book05/book1.jpg",

    name: "The Algorithm Design Manual (Texts in Computer Science) 3rd ed. 2020 Edition",
    description:
      "The Algorithm Design Manual (Texts in Computer Science) 3rd ed. 2020 Edition : My absolute favorite for this kind of interview preparation is Steven Skiena’s The Algorithm Design Manual. More than any other book it helped me understand just how astonishingly commonplace … graph problems are -- they should be part of every working programmer’s toolkit. The book also covers basic data structures and sorting algorithms, which is a nice bonus. … every 1 – pager has a simple picture, making it easy to remember. This is a great way to learn how to identify hundreds of problem types.: (Steve Yegge, Get that Job at Google).",
    price: "$43.63",
    author: "Steven S. Skiena ",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book07/book1.jpg",
    name: "Python Data Science Handbook: Essential Tools for Working with Data ",
    author: "Jake VanderPlas",
    price: "$13.96",
    description:
      "Python Data Science Handbook: Essential Tools for Working with Data: For many researchers, Python is a first-class tool mainly because of its libraries for storing, manipulating, and gaining insight from data. Several resources exist for individual pieces of this data science stack, but only with the Python Data Science Handbook do you get them all—IPython, NumPy, Pandas, Matplotlib, Scikit-Learn, and other related tools.",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book08/book1.jpg",
    name: "The Art of War",
    Author: "Sun Tzu",
    price: "$14.49",
    description:
      "The Art of War : Sun-Tzu is a landmark translation of the Chinese classic that is without a doubt one of the most important books of all time. Popularly known as The Art of War, Sun-Tzu is one of the leading books on strategic thinking ever written. While other books on strategy, wisdom, and philosophy come and go, both leaders and gentle contemplators alike have embraced the writings of Sun-tzu.",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book09/book1.jpg",
    name: "The Prince",
    author: "Niccolo Machiavelli",
    price: "$6.85",
    description:
      "The Prince : A new, beautifully laid-out, easy-to-read pocket edition of Niccolò Machiavelli's The Prince, based on Luigi Ricci's highly-readable 1921 translation.  The Prince is one of the most influential and important early works of modern philosophy and political theory, essential reading for anyone who wants to understand the politics of power, with applicable lessons and cautionary tales for life, government, business, international and foreign affairs, and management. ",
  },
  {
    // id: uuidv4(),
    type: "books",
    url: "/products/books/book10/book1.jpg",
    name: "Extraterrestrial: The First Sign of Intelligent Life Beyond Earth",

    author: "Avi Loeb",
    price: "$16.51",
    description:
      "Extraterrestrial: The First Sign of Intelligent Life Beyond Earth: Harvard’s top astronomer lays out his controversial theory that our solar system was recently visited by advanced alien technology from a distant star.",
  },
  //////////////////////////////////////
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion03/fashion1.jpg",
    url2: "/products/fashion/fashion03/fashion2.jpg",
    name: "Steve Madden Men's Dress Casual Every Day Reversible Leather Belt",
    price: "$12.99",
    description:
      "Steve Madden Men's Dress Casual Every Day Reversible Leather Belt:  50% Leather, 50% Polyurethane" +
      "Imported" +
      "Belt closure" +
      "Hand Wash ",
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion04/fashion1.jpg",
    url2: "/products/fashion/fashion04/fashion2.jpg",
    name: "Levi's Men's Casual Leather Belt",
    price: "$18.00",
    description: `Levi's Men's Casual Leather Belt :  100% Split Leather
    Belt closure
    GENUINE LEATHER: This Levi's genuine leather belt is a wardrobe essential for any man. The soft touch leather, grommet details, and beveled edges make it a unique elevated belt. Dress up your favorite pair of jeans with this Levi's leather 1.5" wide belt. `,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion05/fashion1.jpg",
    url2: "/products/fashion/fashion05/fashion2.jpg",
    name: "Calvin Klein Men's Slim Fit Suit Separates",
    price: "$87.33",
    description: `Calvin Klein Men's Slim Fit Suit Separates :  94% Wool, 6% Lycra Spandex
    Imported
    Button closure
    Dry Clean Only
    The advantage of the Calvin Klein Slim Fit Suit Separate is the ability to customize your jacket and pant size. Select your sizes and add them to the cart separately. `,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion06/fashion1.jpg",
    url2: "/products/fashion/fashion06/fashion2.jpg",
    name: `Kenneth Cole REACTION Men's Techni-Cole Stretch Slim Fit Suit`,
    price: "$73.31",
    description: `Kenneth Cole REACTION Men's Techni-Cole Stretch Slim Fit Suit Separate (Blazer, Pant, and Vest) : 
    87% Polyester, 12% Rayon, 1% Spandex
    Imported
    Button closure
    Dry Clean Only
    Blazer, pant, and vest sold separately
    Stretch fabric. Fully lined interior
    Double vented`,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion07/fashion1.jpg",
    url2: "/products/fashion/fashion07/fashion2.jpg",
    name: "Lacoste L.12.12 Small Tote Bag ",
    price: "$71.64",
    description: `Lacoste L.12.12 Small Tote Bag : 
    100% Polyvinyl Chloride; Trim: 100% PU Split Leather
    Imported
    Pockets: 1 zip`,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion08/fashion1.jpg",
    url2: "/products/fashion/fashion08/fashion2.jpg",
    name: `Fossil Women's Jolie Leather Crossbody Purse Handbag`,
    price: "$69.30",
    description: `Fossil Women's Jolie Leather Crossbody Purse Handbag :  Imported
    This embossed leather crossbody features 1 zipper pocket, 1 back slide pocket with magnetic snap and an adjustable and detachable crossbody strap.
    This embossed leather crossbody features 1 zipper pocket, 1 back slide pocket with magnetic snap and an adjustable and detachable crossbody strap. `,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion09/fashion1.jpg",
    url2: "/products/fashion/fashion09/fashion2.jpg",
    name: "TRAVANDO Mens Slim Wallet with Money Clip AUSTIN RFID Blocking",
    price: "$29.95",
    description: `TRAVANDO Mens Slim Wallet with Money Clip AUSTIN RFID Blocking Bifold Credit Card Holder for Men with Gift Box :  RFID Protected lining.
    - Bifold closure -
    𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡𝗔𝗟 & 𝗦𝗟𝗜𝗠 – Travando’s Wallet offers 11 card pockets The slim wallet is ideal for carrying business cards, credit and debit cards, bills etc.. The outside notch allows you to push out the cards easily. `,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion10/fashion1.jpg",
    url2: "/products/fashion/fashion10/fashion2.jpg",
    name: "Front Pocket Wallet for Men - RFID Blocking Leather",
    price: "$14.99",
    description: `Front Pocket Wallet for Men - RFID Blocking Leather Bifold Wallet with ID Window (Coal): Material: Made of 100% genuine leather, our brown bifold leather wallet is sturdy, long-lasting and durable. Handcrafted by professional designers, our leather wallets are designed for men to carry cash, coins, and other accessories in one place.
    Slim and Compact: The thin wallet measures 4.35x3.5x0.75 inches to perfectly fit your front pocket. It is small, compact and lightweight, yet it fits a lot more than it shows. `,
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion01/fashion1.jpg",
    url2: "/products/fashion/fashion01/fashion2.jpg",
    name: "adidas Men's CF Lite Racer",
    price: "$54.97",
    description:
      "adidas Men's CF Lite Racer Byd - " +
      "100% Other fibers - " +
      "Imported - " +
      "Synthetic sole - " +
      "Shaft measures approximately 6-12 inches from arch.",
  },
  {
    // id: uuidv4(),
    type: "fashion",
    url: "/products/fashion/fashion02/fashion1.jpg",
    url2: "/products/fashion/fashion02/fashion2.jpg",
    name: "Clarks Men's Tilden Cap Oxford Shoe",
    price: "55.68",
    description: "Clarks Men's Tilden Cap Oxford Shoe" + "100% Leather",
  },
];
