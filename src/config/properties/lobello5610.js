/**
 * PROPERTY CONFIGURATION
 * 
 * This is the single source of truth for all property data.
 * To create a new property site, copy this file and update the values.
 */

// ============================================
// BASE CONFIGURATION
// ============================================

// R2 Storage Configuration
const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const FOLDER_NAME = "5610Lobello";

// Helper function to build full image URLs
const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;

// Helper for global assets (headshots, logos) not in the property folder
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

// ============================================
// PROPERTY INFORMATION
// ============================================

export const propertyInfo = {
    address: "5610 Lobello Drive",
    city: "Dallas",
    state: "TX",
    zip: "75225",
    price: "$6,650,000",

    // Property Specifications
    specs: {
        sqft: "7,890",
        lotSize: "Half-Acre",
        beds: 5,
        baths: 4,
        powder: 3,
        garage: "4-Car",
    },

    // Additional Features (for stats display)
    features: [
        "Study",
        "Game Room",
        "Office",
        "Den",
        "Outdoor Terrace",
        "Pool"
    ],

    // Marketing Copy
    tagline: "Elegant Georgian Inspired Estate Home",

    // Meta Description for SEO
    metaDescription: "Discover this stunning 7,890 sq ft Georgian estate in Dallas featuring 5 bedrooms, 6 baths, gourmet kitchen, pool, and exquisite finishes throughout."
};

// ============================================
// AGENT INFORMATION
// ============================================

export const agentInfo = {
    name: "Cole Swearingen",
    phone: "972.971.9586",
    email: "cole.swearingen@compass.com",
    brokerage: "COMPASS",
    brokerageLogo: getGlobalUrl("main-page/compass-logo.webp.png"),
    officePhone: "(214) 814-8100",
    address: "5960 Berkshire Ln Ste 700, Dallas TX 75225",
    socialMedia: {
        facebook: "https://www.facebook.com/cole.swearingen.35/",
        instagram: "https://www.instagram.com/coleswear/?hl=en"
    }
};

// ============================================
// IMAGE CONFIGURATION
// ============================================

export const images = {
    // Hero Section Images
    cover: getUrl("5610Lobello-34.webp"),      // Initial image (before scroll)
    hero: getUrl("5610Lobello-5.webp"),        // Revealed image (after scroll)

    // Lifestyle/Hallway Section
    lifestyle: getUrl("5610Lobello-11.webp"),

    // Detail Section Images (4 panels)
    detailsLiving: getUrl("5610Lobello-10.webp"),
    detailsBath: getUrl("5610Lobello-25.webp"),
    detailsFinishes: getUrl("5610Lobello-17.webp"),
    detailsOutdoor: getUrl("5610Lobello-30.webp"),

    // Floor Plans
    floorPlanBackground: getUrl("5610Lobello-37.webp"),
    floorPlan1: getUrl("5610LobelloFP.pdf"),
    floorPlan2: getUrl("5610LobelloFP.pdf"),
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    // Bulk Image Loading (recommended for many images)
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_NAME}`,
        filePrefix: "5610Lobello-",
        extension: ".webp",
        count: 38,
        excludeIndices: [37] // Exclude bird's eye view from main gallery
    },

    // Manual Image List (used if useBulk is false)
    manualImages: [
        "5610Lobello-5.webp",
        "5610Lobello-2.webp",
        "5610Lobello-3.webp",
        "5610Lobello-4.webp",
    ].map(getUrl),

    // Gallery Display Settings
    homePageLimit: 20,  // Number of images to show on home page
    randomize: true     // Randomize images on home page
};

// ============================================
// PROPERTY DETAILS SECTIONS
// ============================================

export const detailSections = [
    {
        title: "Living & Entertaining",
        imageKey: "detailsLiving",
        features: [
            "Classically scaled rooms for formal and informal entertaining",
            "Den, Lounge and Bar, Study, Game room, and Office",
            "Custom paneled wall details at foyer, living room and lounge",
            "Wood burning fireplaces at Living Room, Dining Room, and Primary Bedrooms",
            "Gourmet Kitchen with Thermador Appliances",
            "Butler's Pantry with dishwasher, oven, coffee and wine refrigeration",
            "Waterworks fixtures at kitchen and powder and bar"
        ]
    },
    {
        title: "Primary Suite & Baths",
        imageKey: "detailsBath",
        features: [
            "Five Bedrooms, Six bathrooms, and two powder rooms",
            "Gracious primary suite with coffee bar",
            "Luxurious bath with marble clad floating tub",
            "Customizable dressing room with additional laundry closet",
            "Kallista and Kohler plumbing fixtures at bathrooms throughout",
            "Two full laundry rooms: one downstairs; one upstairs"
        ]
    },
    {
        title: "Exquisite Finishes",
        imageKey: "detailsFinishes",
        features: [
            "Marble, Limestone and Wide Plank wood flooring throughout",
            "Hand troweled plaster finishes at dining room and study",
            "Custom stained and painted cabinetry and millwork throughout",
            "Designer selected chandeliers, pendants and sconces throughout",
            "Marble, Limestone, and Quartzite slabs throughout kitchen and bathrooms"
        ]
    },
    {
        title: "Outdoor Living",
        imageKey: "detailsOutdoor",
        features: [
            "Gracious indoor loggia leading to covered outdoor terrace",
            "Davinci Slate Composite Roofing & Painted Brick/Stone exterior",
            "Oversized Four Car garage with both street and alley access",
            "Professionally landscaped grounds by Bloom and Grow",
            "40 foot long pool and spa, and outdoor kitchen",
            "Control 4 automated lighting, audio, and security system"
        ]
    }
];

// ============================================
// LAYOUT & FEATURES
// ============================================

export const layout = {
    showWelcomeScreen: true,
};

// ============================================
// THEME OVERRIDES
// ============================================

export const theme = {
    colors: {
        bg: "#FCFCFC",
        text: "#1A1A1A",
        textLight: "#666666",
        accent: "#C7A17A",
        border: "#E5E5E5",
        overlay: "rgba(0, 0, 0, 0.4)"
    },
    fonts: {
        heading: "'Marcellus', serif",
        body: "'Outfit', sans-serif"
    }
};

// ============================================
// LEGACY EXPORT (for backward compatibility)
// ============================================
// This maintains compatibility with existing imports from galleryData.js
// Can be removed once all components are updated

export const galleryConfig_LEGACY = {
    coverImage: images.cover,
    heroImage: images.hero,
    staticImage: images.hero, // Reusing hero image
    lifestyleImage: images.lifestyle,
    detailsLiving: images.detailsLiving,
    detailsBath: images.detailsBath,
    detailsFinishes: images.detailsFinishes,
    detailsOutdoor: images.detailsOutdoor,

    useBulk: galleryConfig.useBulk,
    bulkSettings: galleryConfig.bulkSettings,
    manualImages: galleryConfig.manualImages,

    floorPlanConfig: {
        background: images.floorPlanBackground,
        floor1: images.floorPlan1,
        floor2: images.floorPlan2
    }
};
