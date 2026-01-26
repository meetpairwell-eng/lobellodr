/**
 * PROPERTY CONFIGURATION
 * 
 * This is the single source of truth for all property data.
 * To create a new property site, copy this file and update the values.
 */

// ============================================
// PROPERTY INFORMATION
// ============================================

export const propertyInfo = {
    address: "1260 Norfolk Drive",
    city: "Prosper",
    state: "TX",
    zip: "75078",
    price: "$749,900",

    // Property Specifications
    specs: {
        sqft: "3,392",
        lotSize: "0.232 Acres",
        beds: 4,
        baths: 3,
        powder: 1,
        garage: "3-Car", // "Yes/3" in MLS
    },

    // Additional Features (for stats display)
    features: [
        "French Country Style",
        "Open Floor Plan",
        "Breakfast Room",
        "Utility Room",
        "Bonus Room",
        "Mud Room"
    ],

    // Marketing Copy
    tagline: "French Country Style in The Village at Prosper Trail",

    // Meta Description for SEO
    metaDescription: "Nestled in the heart of Prosper, this beautiful 3,392 sq ft home features 4 beds, 3.1 baths, a chef's kitchen, and a resort-style pool."
};

// ============================================
// AGENT INFORMATION
// ============================================

export const agentInfo = {
    name: "Cole Swearingen",
    phone: "972.971.9586",
    email: "cole@lagunaresidential.com",
    brokerage: "COMPASS RE Texas, LLC"
};

// ============================================
// IMAGE CONFIGURATION
// ============================================

// R2 Storage Configuration
const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const FOLDER_NAME = "1260Norfolk";

// Helper function to build full image URLs
const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;

// Layout Configuration
export const layout = {
    showFloorPlans: false,
    showGallery: true,
    showDetails: true,
};

export const images = {
    // Hero Section Images
    cover: getUrl("1260Norfolk-1.webp"),      // Initial image (before scroll)
    hero: getUrl("1260Norfolk-10.webp"),        // Revealed image (after scroll)

    // Lifestyle/Hallway Section
    lifestyle: getUrl("1260Norfolk-11.webp"),

    // Detail Section Images (4 panels)
    detailsLiving: getUrl("1260Norfolk-8.webp"),
    detailsBath: getUrl("1260Norfolk-22.webp"),
    detailsFinishes: getUrl("1260Norfolk-2.webp"),
    detailsOutdoor: getUrl("1260Norfolk-23.webp"),

    // Floor Plans
    floorPlanBackground: getUrl("1260Norfolk-37.webp"),
    floorPlan1: getUrl("1260NorfolkFP.pdf"),
    floorPlan2: getUrl("1260NorfolkFP.pdf"),
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    // Bulk Image Loading (recommended for many images)
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_NAME}`,
        filePrefix: "1260Norfolk-",
        extension: ".webp",
        count: 38,
        excludeIndices: [37] // Exclude bird's eye view from main gallery
    },

    // Manual Image List (used if useBulk is false)
    manualImages: [
        "1260Norfolk-5.webp",
        "1260Norfolk-2.webp",
        "1260Norfolk-3.webp",
        "1260Norfolk-4.webp",
    ].map(getUrl),

    // Gallery Display Settings
    homePageLimit: 38,  // Number of images to show on home page
    randomize: true     // Randomize images on home page
};

// ============================================
// PROPERTY DETAILS SECTIONS
// ============================================

export const detailSections = [
    {
        title: "Modern Family Living",
        imageKey: "detailsLiving",
        features: [
            "Airy open floor plan with rich hardwood floors throughout",
            "High ceilings, crown molding, and abundant natural light",
            "Chef's kitchen with gleaming granite counters and oversized island",
            "Upstairs media room and versatile study niche",
            "Abundant custom cabinetry and stylish backsplash"
        ]
    },
    {
        title: "Primary Retreat & Bedrooms",
        imageKey: "detailsBath",
        features: [
            "Spa-inspired primary retreat with soaking tub",
            "Dual vanities and separate shower",
            "Expansive walk-in closet with ample storage",
            "Three spacious upstairs bedrooms with walk-in closets",
            "Versatile layout ideal for today's lifestyle"
        ]
    },
    {
        title: "Outdoor Living",
        imageKey: "detailsOutdoor",
        features: [
            "Resort-style pool with water features",
            "Covered patio with built-in grill",
            "Spacious backyard perfect for entertaining",
            "Privacy fencing and mature landscaping",
            "Ideal for summer gatherings and relaxation"
        ]
    },
    {
        title: "Life in Prosper",
        imageKey: "detailsFinishes", // Using the remaining slot for now
        features: [
            "Located in highly-rated Prosper ISD",
            "Rapidly growing community with small-town charm",
            "Easy access to Dallas North Tollway",
            "Close to The Gates of Prosper shopping and dining",
            "community parks, trails, and recreational facilities"
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
