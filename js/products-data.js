/* =========================================
   THE ORGANIZED NEST - PRODUCT REGISTRY
   =========================================
   RULE (SLUG CONTRACT): filename stem on disk == registry key == data-product in HTML.
   Example: disk "throw-blanket-01.jpg" -> key "throw-blanket-01"
            -> <div class="product-card" data-product="throw-blanket-01">
   available:false = itinatago ang card sa BUONG site.
   NEVER silently rename a slug. Content (name/desc/photo) follows the real product;
   the slug is an invisible handle and stays frozen once set.
*/

const PRODUCT_REGISTRY = {

    // --- CONCERT & EVENTS ---
    "clear-backpack-01": {
        name: "Clear Stadium Backpack – Heavy-Duty PVC (12 x 6 x 11 in)",
        description: "A compact, stadium-approved clear backpack made of thick, waterproof PVC with padded, adjustable shoulder straps. Fits daily essentials like your phone, wallet, sunscreen, and a small water bottle for fast security checks.",
        image: "/images/products/clear-backpack-01.jpg",
        imageAlt: "Clear stadium backpack with transparent PVC body",
        link: "https://link.amazon/B00tD4jXI",
        available: true
    },
    "neck-fan-01": {
        name: "ASNUG Neck Fan – USB Rechargeable, 3 Speeds",
        description: "A hands-free, bladeless neck fan with a 4000 mAh rechargeable battery and three speed settings. Cools quietly without catching hair—useful for long outdoor events, travel, and hot commutes.",
        image: "/images/products/neck-fan-01.jpg",
        imageAlt: "ASNUG bladeless neck fan",
        link: "https://link.amazon/B02evuU3S",
        available: true
    },
    "power-bank-01": {
        name: "charmast 10000mAh Power Bank with 4 Built-in Cables",
        description: "A slim 10,000 mAh portable charger with four built-in cables, so there are no extra cords to pack. Can charge several devices at once—handy when your phone is your ticket, map, and camera.",
        image: "/images/products/power-bank-01.jpg",
        imageAlt: "charmast 10000mAh power bank with built-in cables",
        link: "https://link.amazon/B0c75y8R0",
        available: true
    },
    "water-bottle-01": {
        name: "OLDLEY 32oz Motivational Water Bottle with Time Marker",
        description: "A lightweight, BPA-free Tritan bottle with time markers that help you pace your hydration through the day. Leak-proof flip lid with a secure lock and a carry strap—just make sure it is empty before venue security.",
        image: "/images/products/water-bottle-01.jpg",
        imageAlt: "OLDLEY 32oz clear water bottle with time marker",
        link: "https://link.amazon/B03wG5H0K",
        available: true
    },

    // --- TRAVEL ESSENTIALS ---
    "packing-cubes-01": {
        name: "Amazon Essentials 4-Piece Packing Cubes Set",
        description: "A set of lightweight packing cubes with mesh top panels for easy visibility and reinforced double zippers. They keep clothes sorted by type and maximize space in suitcases, backpacks, and duffel bags.",
        image: "/images/products/packing-cubes-01.jpg",
        imageAlt: "Black 4-piece packing cubes set for travel",
        link: "https://link.amazon/B03xOMOpn",
        available: true
    },
    "toiletry-bag-01": {
        name: "BAGSMART Clear Toiletry Bag 2-Pack (TSA Approved)",
        description: "A 2-pack of clear, water-repellent PVC bags that strictly meet the TSA 3-1-1 liquids rule for carry-on luggage. Features reinforced seams and sturdy zippers to make airport security screening faster and stress-free.",
        image: "/images/products/toiletry-bag-01.jpg",
        imageAlt: "Clear TSA-approved toiletry bags",
        link: "https://link.amazon/B09Ueyqxl",
        available: true
    },
    "neck-pillow-01": {
        name: "SAIREIDER 100% Pure Memory Foam Travel Pillow",
        description: "A travel neck pillow made from pure memory foam that provides 360-degree support for your head and chin. It comes with an adjustable strap and a soft, removable cover that is machine washable.",
        image: "/images/products/neck-pillow-01.jpg",
        imageAlt: "Black memory foam travel neck pillow",
        link: "https://link.amazon/B07dNG93k",
        available: true
    },
    "headphones-01": {
        name: "BERIBES Over-Ear Wireless Bluetooth Headphones",
        description: "Over-ear wireless headphones with up to 65 hours of playtime and multiple EQ sound modes. They feature a lightweight design, memory protein earmuffs for all-day comfort, and a 3.5mm audio cable for wired use.",
        image: "/images/products/headphones-01.jpg",
        imageAlt: "Black over-ear wireless Bluetooth headphones",
        link: "https://link.amazon/B02PcXlEp",
        available: true
    },

    // --- KITCHEN ORGANIZATION (PANTRY) ---
    "storage-containers-01": {
        name: "M MCIRCO 10 Pack Glass Food Storage Containers",
        description: "A 10-pack of borosilicate glass meal prep containers with airtight snap-lock lids and silicone seals. They are microwave, freezer, dishwasher, and oven safe, with a stackable design to save cabinet space.",
        image: "/images/products/storage-containers-01.jpg",
        imageAlt: "Set of 10 glass food storage containers with gray lids",
        link: "https://link.amazon/B05A0OObj",
        available: true
    },
    "lazy-susan-01": {
        name: "LAMU 2-Tier Lazy Susan Turntable Organizer",
        description: "A 9.25-inch, 2-tier rotating organizer with smooth 360-degree ball bearings and sturdy metal connecting rods. Ideal for maximizing vertical space in cabinets or countertops for spices, cans, and pantry items.",
        image: "/images/products/lazy-susan-01.jpg",
        imageAlt: "Clear 2-tier rotating Lazy Susan organizer",
        link: "https://link.amazon/B0dfQxeHf",
        available: true
    },
    "label-maker-01": {
        name: "200 Chalkboard Labels with Liquid Chalk Marker",
        description: "A roll of 200 reusable, removable black chalkboard sticker labels (2.75 x 1.75 inches) with an included white liquid chalk marker. Wipe them clean with a wet towel to reuse—ideal for jars, bins, and containers.",
        image: "/images/products/label-maker-01.jpg",
        imageAlt: "Roll of black chalkboard pantry labels with white chalk marker",
        link: "https://link.amazon/B0g1YKKEx",
        available: true
    },
    "organizer-bins-01": {
        name: "Vtopmart 4 Pack Clear Stackable Storage Drawers",
        description: "A set of four small, BPA-free shatter-resistant plastic storage drawers (each outer box 7.5 x 6 x 4.4 inches). They stack vertically, have pull-out handles, and include non-slip silicone pads to keep countertops and narrow spaces tidy.",
        image: "/images/products/organizer-bins-01.jpg",
        imageAlt: "Set of 4 clear stackable acrylic storage drawers",
        link: "https://link.amazon/B03C3Eg37",
        available: true
    },
    "bag-organizer-01": {
        name: "SpaceAid Bamboo Bag Storage Organizer for Drawers",
        description: "A fully assembled bamboo drawer box with 4 slots designed to hold gallon, quart, sandwich, and snack-sized food storage bags. Includes label stickers to keep your drawer neat and easily identifiable.",
        image: "/images/products/bag-organizer-01.jpg",
        imageAlt: "Bamboo drawer organizer for food storage bags",
        link: "https://link.amazon/B00Z6z9EW",
        available: true
    },
    "cereal-dispensers-01": {
        name: "DWËLLZA KITCHEN 4-Piece Airtight Cereal Containers",
        description: "A set of four 4L BPA-free plastic canisters with a 4-sided locking system and silicone seal on the pour spout. Ideal for storing cereal, flour, sugar, and rice while keeping them fresh, dry, and crunchy.",
        image: "/images/products/cereal-dispensers-01.jpg",
        imageAlt: "Set of 4 clear airtight cereal dispenser containers",
        link: "https://link.amazon/B08B6zViB",
        available: true
    },
    "under-sink-organizer-01": {
        name: "PXRACK 2-Tier Sliding Under Sink Organizer",
        description: "A heavy-duty, height-adjustable pull-out shelf with a C-shaped design to fit around plumbing pipes. The smooth sliding rails make it easy to access cleaning supplies stored in deep kitchen or bathroom cabinets.",
        image: "/images/products/under-sink-organizer-01.jpg",
        imageAlt: "2-tier sliding metal organizer for under the sink",
        link: "https://link.amazon/B0fa9PPj2",
        available: true
    },
    "drawer-dividers-01": {
        name: "SpaceAid Expandable Bamboo Drawer Dividers with Inserts",
        description: "Adjustable bamboo dividers that expand from 17 to 22 inches to customize kitchen or office drawers. Features a strong spring-loaded design, non-slip rubber pads, and mini inserts for smaller storage compartments.",
        image: "/images/products/drawer-dividers-01.jpg",
        imageAlt: "Expandable bamboo drawer dividers with inserts",
        link: "https://link.amazon/B0h47u35O",
        available: true
    },
    "cabinet-door-basket-01": {
        name: "Moforoco 9-Tier Over The Door Pantry Organizer",
        description: "A heavy-duty metal hanging rack with 9 shelves (3 large, 3 medium, 3 small) that mounts over a standard door with no drilling. Holds spices, jars, and household items, with an installed height of about 6.2 feet.",
        image: "/images/products/cabinet-door-basket-01.jpg",
        imageAlt: "White 9-tier metal over-the-door pantry organizer",
        link: "https://link.amazon/B00RBwylE",
        available: true
    },
    "can-organizer-01": {
        name: "Simple Houseware 3-Tier Stackable Can Organizer Rack",
        description: "A sturdy chrome-coated metal rack that holds up to 36 cans. It features angled shelves that automatically roll cans forward for first-in-first-out access, plus adjustable dividers to accommodate various can sizes.",
        image: "/images/products/can-organizer-01.jpg",
        imageAlt: "3-tier stackable metal can organizer rack",
        link: "https://link.amazon/B00ooP5yc",
        available: true
    },

    // --- SEASONAL / FALL ---
    "throw-blanket-01": {
        name: "BEDELITE Ribbed Fleece Throw Blanket (50 x 60 in)",
        description: "A 50 x 60 inch ribbed fleece throw in a soft beige tone, made from plush 300 GSM microfiber polyester with a raised 3D stripe texture. Lightweight and machine washable, it resists shrinking, fading, and shedding—drapes nicely over a couch, bed, or accent chair.",
        image: "/images/products/throw-blanket-01.jpg",
        imageAlt: "Beige ribbed fleece throw blanket draped on a couch",
        link: "https://link.amazon/B01BLu4CM",
        available: true
    },
    "scented-candle-01": {
        name: "4-Piece Fall Scented Soy Candle Set (7 oz each)",
        description: "A set of four 7 oz soy wax candles in autumn scents—Vanilla Cupcake, Spiced Pumpkin, Cinnamon Clove, and Caramel Apple—blended with natural essential oils for a clean, even burn of up to 50 hours each. They arrive in season-themed gift packaging.",
        image: "/images/products/scented-candle-01.jpg",
        imageAlt: "Set of four fall-scented soy wax candles",
        link: "https://link.amazon/B07YlQysw",
        available: true
    },
    "coffee-mug-01": {
        name: "Gencywe 16 oz Ceramic Coffee Mug Set of 4",
        description: "A set of four 16 oz porcelain mugs in assorted colors, made from lead-free, non-toxic glazed grade A porcelain that is chip-resistant. Safe for the microwave, oven, freezer, and dishwasher, with a comfortable handle that stays cool when heated.",
        image: "/images/products/coffee-mug-01.jpg",
        imageAlt: "Set of four assorted-color ceramic coffee mugs",
        link: "https://link.amazon/B0au7UKTo",
        available: true
    },
    "accent-pillow-01": {
        name: "Fancy Homi 2-Pack Boho Corduroy Pillow Covers (18 x 18 in)",
        description: "A 2-pack of 18 x 18 inch decorative pillow covers in soft cream corduroy, with a cross-hatch patchwork front and a solid-color back. They have a hidden zipper for easy insertion (covers only—no inserts included) and are machine washable on gentle.",
        image: "/images/products/accent-pillow-01.jpg",
        imageAlt: "Pair of cream corduroy boho throw pillow covers",
        link: "https://link.amazon/B08FSp7Ut",
        available: true
    },

    // --- GIFT GUIDE ADDITIONS ---
    "weighted-blanket-01": {
        name: "ZonLi Weighted Blanket for Adults (60\" x 80\", 20 lbs)",
        description: "A queen-size weighted blanket filled with temperature-regulating glass beads and encased in OEKO-TEX certified fabric. Its 5+2 layer lining prevents bead leakage, providing deep-pressure stimulation for relaxation and better sleep.",
        image: "/images/products/weighted-blanket-01.jpg",
        imageAlt: "Dark grey ZonLi weighted blanket folded on a bed",
        link: "https://link.amazon/B0dmk6lOh",
        available: true
    },
    "wine-opener-set-01": {
        name: "Secura Electric Wine Opener Set (Rechargeable)",
        description: "An automatic electric corkscrew with a stainless steel finish and integrated foil cutter. It removes corks in seconds via a simple press-button mechanism and includes a charging base for convenient storage near your wine fridge.",
        image: "/images/products/wine-opener-set-01.jpg",
        imageAlt: "Stainless steel Secura electric wine opener with charging base",
        link: "https://link.amazon/B0iNmvuTF",
        available: true
    },
    "cutting-board-01": {
        name: "Personalized Wooden Cutting Board (Engraved)",
        description: "A custom laser-engraved wooden cutting board ideal for weddings, anniversaries, or housewarmings. The deep engraving will not fade or peel, making it a durable keepsake for charcuterie, cheese, or everyday kitchen prep.",
        image: "/images/products/cutting-board-01.jpg",
        imageAlt: "Personalized engraved wooden cutting board with names and date",
        link: "https://link.amazon/B04LauxVp",
        available: true
    },
    "slippers-01": {
        name: "KuaiLu Women's Fuzzy Memory Foam Slippers",
        description: "Warm house shoes featuring a plush faux fur collar and high-density memory foam arch support. With a non-slip rubber sole and available in 12 colors, they offer marshmallow-soft comfort for lounging indoors or stepping out briefly.",
        image: "/images/products/slippers-01.jpg",
        imageAlt: "Cozy fuzzy women's slippers with memory foam support",
        link: "https://link.amazon/B06TlnETO",
        available: true
    },
    "photo-frame-01": {
        name: "FRAMEO 10.1-Inch Smart WiFi Digital Photo Frame (32GB)",
        description: "A touch-screen digital frame with built-in 32GB memory that receives photos and short videos instantly from anywhere via the Frameo app. Features auto-rotation, calendar sync, collage mode, and interactive emoji reactions for family sharing.",
        image: "/images/products/photo-frame-01.jpg",
        imageAlt: "Modern 10.1-inch WiFi digital photo frame displaying family photos",
        link: "https://link.amazon/B0fHEXNsI",
        available: true
    },

    // --- KITCHEN: FRIDGE RESET (8 Items) ---
    "fridge-bins-set-01": {
        name: "Vtopmart 8 Pack Clear Food Storage Organizer Bins",
        description: "A set of crystal-clear, BPA-free polyethylene bins with 3 removable dividers each. Perfect for organizing snack packets, spice jars, and small pantry items, bringing visibility and structure to any shelf or drawer.",
        image: "/images/products/fridge-bins-set-01.jpg",
        imageAlt: "Set of 8 clear plastic food storage organizer bins with removable dividers",
        link: "https://link.amazon/B06tyZQzi",
        available: true
    },
    "produce-keeper-01": {
        name: "4-Piece Fruit Storage Containers for Fridge with Removable Colander",
        description: "A 4-piece set of BPA-free produce keepers ranging from 0.32L to 2.7L, featuring airtight sealing rings and locking buckles. The removable colander basket drains water away from berries and vegetables, keeping them fresh up to twice as long.",
        image: "/images/products/produce-keeper-01.jpg",
        imageAlt: "Set of 4 clear fridge produce storage containers with removable colander baskets",
        link: "https://link.amazon/B0bgBJMZE",
        available: true
    },
    "egg-dispenser-01": {
        name: "Automatic Rolling Egg Holder for Fridge (2-Pack)",
        description: "A clear, stackable egg dispenser with an auto-rolling design that gently brings the next egg forward without cracking. The pull-out inner tray allows for quick, hassle-free refilling without moving the entire container.",
        image: "/images/products/egg-dispenser-01.jpg",
        imageAlt: "Clear automatic rolling egg dispenser container for refrigerator",
        link: "https://link.amazon/B0hQ9XFzd",
        available: true
    },
    "fridge-turntable-01": {
        name: "Guzon 12-Inch Clear Lazy Susan Turntable (4-Pack)",
        description: "A 12-inch rotating organizer made of durable, BPA-free PET with raised edges and built-in handles. The 360-degree smooth spin makes hard-to-reach condiments and jars in deep fridge corners instantly accessible.",
        image: "/images/products/fridge-turntable-01.jpg",
        imageAlt: "Clear 12-inch lazy susan turntable organizer with handles",
        link: "https://link.amazon/B0iYXQPnu",
        available: true
    },
    "can-dispenser-01": {
        name: "Sorbus Soda Can Organizer for Fridge with Lid (2-Pack)",
        description: "A space-saving, BPA-free clear bin that holds up to 12 standard cans of soda, seltzer, or beer. The stackable design with a secure flat lid maximizes vertical fridge space while keeping beverages neat and ready to grab.",
        image: "/images/products/can-dispenser-01.jpg",
        imageAlt: "Clear stackable soda can organizer dispenser for refrigerator with lid",
        link: "https://link.amazon/B0dB8yVvF",
        available: true
    },
    "freezer-bins-01": {
        name: "3-Pack Large Deep Freezer Organizer Bins with Handles",
        description: "Heavy-duty, anti-rust metal wire baskets designed specifically for deep chest freezers. The open frame allows for efficient air circulation and faster freezing, while the foldable handles make pulling out heavy loads of meat and frozen goods effortless.",
        image: "/images/products/freezer-bins-01.jpg",
        imageAlt: "Set of 3 black metal wire deep freezer organizer bins with handles",
        link: "https://link.amazon/B0jgqBEzi",
        available: true
    },
    "fridge-dividers-01": {
        name: "12-Inch Visible Fridge Organizer Rack with Removable Dividers",
        description: "A versatile, slide-out fridge rack featuring four removable dividers to customize compartments for frozen foods, leftovers, or deli meats. The easy-grip side handles allow you to pull the rack out like a drawer for instant access to deep shelves.",
        image: "/images/products/fridge-dividers-01.jpg",
        imageAlt: "Clear plastic slide-out fridge organizer rack with adjustable dividers",
        link: "https://link.amazon/B0aoWq9hQ",
        available: true
    },
    "fridge-labels-01": {
        name: "1000 Removable Food Date Labels with Perforation Line (1\" x 2\")",
        description: "A mega-roll of 1,000 water, oil, and tear-resistant blank stickers designed for food containers and freezer bags. The strong adhesive leaves no residue, making them perfect for tracking prep dates and expiration dates to reduce food waste.",
        image: "/images/products/fridge-labels-01.jpg",
        imageAlt: "Roll of 1000 blank white removable food date labels for pantry and fridge organization",
        link: "https://link.amazon/B01JlcCP6",
        available: true
    }
};