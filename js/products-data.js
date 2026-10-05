/* =========================================
   THE ORGANIZED NEST - PRODUCT REGISTRY
   =========================================
   RULE: filename stem == registry key == data-product in HTML.
   Example: disk file "label-maker-01.jpg"  ->  key "label-maker-01"
            ->  <div class="product-card" data-product="label-maker-01">
   Available false = itinatago ang card sa BUONG site.
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

    // --- KITCHEN ORGANIZATION (10 Items) ---
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
    }
};