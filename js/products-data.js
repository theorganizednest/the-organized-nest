/* =========================================
   THE ORGANIZED NEST - PRODUCT REGISTRY
   =========================================
   Ito ang single "database" ng lahat ng products na inirerekomenda sa site.

   PAANO I-MAINTAIN:
   - Bawat product ay may unique ID (example: "clear-backpack-01").
   - Ginagamit siya sa articles gamit ang:
       <div class="product-card" data-product="clear-backpack-01"> ... </div>
   - Para mag-update ng product sa BUONG site, i-edit lang dito ng isang beses.
   - Para itago ang product everywhere (example: out of stock na),
     i-set ang  available: false
   - Para mag-add ng bagong product, mag-add ng bagong ID block
     at gamitin ang ID na yun sa kahit anong article.
*/

const PRODUCT_REGISTRY = {

    "clear-backpack-01": {
        name: "Clear Stadium Backpack – Heavy-Duty PVC (12 x 6 x 11 in)",
        description: "A compact, stadium-approved clear backpack made of thick, waterproof PVC with padded, adjustable shoulder straps. Fits daily essentials like your phone, wallet, sunscreen, and a small water bottle for fast security checks.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Clear stadium backpack",
        link: "https://link.amazon/B00tD4jXI",
        available: true
    },

    "neck-fan-01": {
        name: "ASNUG Neck Fan – USB Rechargeable, 3 Speeds",
        description: "A hands-free, bladeless neck fan with a 4000 mAh rechargeable battery and three speed settings. Cools quietly without catching hair—useful for long outdoor events, travel, and hot commutes.",
        image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Portable bladeless neck fan",
        link: "https://link.amazon/B02evuU3S",
        available: true
    },

    "power-bank-01": {
        name: "charmast 10000mAh Power Bank with 4 Built-in Cables",
        description: "A slim 10,000 mAh portable charger with four built-in cables, so there are no extra cords to pack. Can charge several devices at once—handy when your phone is your ticket, map, and camera.",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Slim portable power bank with built-in cables",
        link: "https://link.amazon/B0c75y8R0",
        available: true
    },

    "water-bottle-01": {
        name: "OLDLEY 32oz Motivational Water Bottle with Time Marker",
        description: "A lightweight, BPA-free Tritan bottle with time markers that help you pace your hydration through the day. Leak-proof flip lid and carry strap—just make sure it is empty before venue security.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Clear 32oz motivational water bottle with time marker",
        link: "https://link.amazon/B03wG5H0K",
        available: true
    }
};