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
const FOLDER_NAME = "5168Brickellia";

// Helper function to build full image URLs
const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;

// Helper for global assets (headshots, logos) not in the property folder
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

// ============================================
// PROPERTY INFORMATION
// ============================================

export const propertyInfo = {
    address: "5168 Brickellia Drive",
    city: "Dallas",
    state: "TX",
    zip: "75209",
    price: "$649,900",

    // Property Specifications
    specs: {
        sqft: "1,818",
        lotSize: "0.036 Acres",
        beds: 3,
        baths: 3,
        powder: 1,
        garage: "2-Car",
    },

    // Map Coordinates
    map: {
        lat: 32.8242,
        lng: -96.8285
    },

    // Additional Features (for stats display)
    features: [
        "Rooftop Deck",
        "Smart Home",
        "Gourmet Kitchen",
        "Pool Access",
        "Hardwood Floors"
    ],

    // Marketing Copy
    tagline: "Contemporary Three-Level Living in Oak Park",
    description: "Set on a quiet street in Oak Park Gardens, 5168 Brickellia Drive delivers contemporary living across three thoughtfully designed levels. This David Weekley townhome features 3 bedrooms, 3.5 baths, and over 1,800 sq ft of bright, airy space. The main level showcases rich hardwood flooring and a gourmet kitchen with custom tile, granite counters, and stainless steel appliances. Designer wallpaper adds a refined touch throughout, leading to a primary suite with a spa-inspired bath and oversized closet. The top floor offers a versatile bonus room opening to a private rooftop deck—perfect for entertaining. Enjoy a low-maintenance lifestyle with community pool and dog park access, all just minutes from the Dallas North Tollway, Uptown, and Love Field.",

    // Meta Description for SEO
    metaDescription: "Explore this contemporary 1,818 sq ft David Weekley townhome in Dallas featuring 3 bedrooms, 3.5 baths, a private rooftop deck, and high-end finishes throughout."
};

// ============================================
// AGENT INFORMATION
// ============================================

export const agentInfo = {
    name: "Cole Swearingen",
    phone: "972.971.9586",
    email: "cole.swearingen@compass.com",
    brokerage: "COMPASS",
    brokerageLogo: getGlobalUrl("main-page/compass-logo.webp"),
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

// Layout Configuration
export const layout = {
    showFloorPlans: false,
    showGallery: true,
    showDetails: true,
    showWelcomeScreen: false,
};

export const images = {
    // Hero Section Images
    cover: getUrl("5168Brickellia-1.webp"),      // Initial image (before scroll)
    hero: getUrl("5168Brickellia-5.webp"),        // Revealed image (after scroll)

    // Lifestyle/Hallway Section
    lifestyle: getUrl("5168Brickellia-9.webp"),

    // Detail Section Images (4 panels)
    detailsLiving: getUrl("5168Brickellia-8.webp"),
    detailsBath: getUrl("5168Brickellia-13.webp"),
    detailsFinishes: getUrl("5168Brickellia-20.webp"),
    detailsOutdoor: getUrl("5168Brickellia-25.webp"),

    // Floor Plans
    floorPlanBackground: getUrl("5168Brickellia-37.webp"),
    floorPlan1: getUrl("5168BrickelliaFP.pdf"),
    floorPlan2: getUrl("5168BrickelliaFP.pdf"),
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    // Bulk Image Loading (recommended for many images)
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_NAME}`,
        filePrefix: "5168Brickellia-",
        extension: ".webp",
        count: 26,
        excludeIndices: []
    },

    // Manual Image List (used if useBulk is false)
    manualImages: [
        "5168Brickellia-1.webp",
        "5168Brickellia-2.webp",
        "5168Brickellia-3.webp",
        "5168Brickellia-4.webp",
    ].map(getUrl),

    // Gallery Display Settings
    homePageLimit: 26,  // Number of images to show on home page
    randomize: true     // Randomize images on home page
};

// ============================================
// PROPERTY DETAILS SECTIONS
// ============================================

export const detailSections = [
    {
        title: "Relaxed & Spacious Living",
        imageKey: "detailsLiving",
        features: [
            "Built by David Weekley with contemporary design",
            "Rich hardwood flooring throughout the main living level",
            "Bright and airy layout ideal for hosting",
            "Custom tile backsplash and polished kitchen finishes",
            "Designer-selected custom wallpaper throughout"
        ]
    },
    {
        title: "Your Personal Retreat",
        imageKey: "detailsBath",
        features: [
            "Spa-inspired primary bath with dual vanities",
            "Large walk-in shower and oversized closet",
            "Three private bedrooms each with en-suite baths",
            "Three and a half total bathrooms for convenience",
            "Lock-and-leave low-maintenance lifestyle"
        ]
    },
    {
        title: "Premier Community Access",
        imageKey: "detailsOutdoor",
        features: [
            "Full access to community pool and pavilion",
            "Mowing provided by HOA",
            "Extremely low HOA of only $1,200/year",
            "Professionally designed community landscaping"
        ]
    },
    {
        title: "Prime Location",
        imageKey: "detailsFinishes",
        features: [
            "Located in the quiet Oak Park community",
            "Effortless access to Uptown and Downtown Dallas",
            "Only one mile from the Dallas North Tollway",
            "Minutes to Love Field and Medical District",
        ]
    }
];

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
    },
    ui: {
        borderRadius: "0px",
        buttonPadding: "1rem 2.5rem",
        letterSpacing: "0.2em",
        heroTextAlign: "center",
        heroTextTop: "48%"
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
