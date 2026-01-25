import React from 'react';
import { Helmet } from 'react-helmet-async';
import { galleryConfig } from '../galleryData';

// Constants
const PROPERTY_TITLE = "5610 Lobello Drive | Elegant Georgian Estate in Dallas";
const PROPERTY_DESC = "Discover 5610 Lobello Drive, a 7,890 sq ft luxury Georgian-inspired estate on a half-acre lot in Dallas. Featuring 5 beds, 6 baths, pool, and 4-car garage. Listed by Cole Swearingen.";
const PROPERTY_URL = "https://www.5610lobellodrive.com"; // Assuming this is the canonical or we use window.location
const PROPERTY_PRICE = "6650000";
const PROPERTY_CURRENCY = "USD";
const PROPERTY_IMAGE = "https://www.5610lobellodrive.com/images/lobello-1.jpg"; // We should map this to a real static asset

const SEO = () => {
    // Construct Structured Data (JSON-LD)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SingleFamilyResidence",
        "name": PROPERTY_TITLE,
        "description": PROPERTY_DESC,
        "numberOfRooms": 15,
        "occupancy": {
            "@type": "QuantitativeValue",
            "value": 5,
            "unitCode": "ROM" // Bedrooms
        },
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": 7890,
            "unitCode": "FTK"
        },
        "numberOfBedrooms": 5,
        "numberOfBathroomsTotal": 6,
        "yearBuilt": 2024, // Assuming new construction or recent, adjusting if needed
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5610 Lobello Drive",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75220", // Double check zip
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.8800, // Approx for Lobello Dr Dallas
            "longitude": -96.8200
        },
        "url": PROPERTY_URL,
        "image": [
            PROPERTY_IMAGE,
            // Could add more gallery images here if we have absolute URLs
        ],
        "offers": {
            "@type": "Offer",
            "price": PROPERTY_PRICE,
            "priceCurrency": PROPERTY_CURRENCY,
            "availability": "https://schema.org/InStock",
            "url": PROPERTY_URL
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Garage Spaces",
                "value": 4
            },
            {
                "@type": "PropertyValue",
                "name": "Pool",
                "value": true
            },
            {
                "@type": "PropertyValue",
                "name": "Lot Size",
                "value": "0.5 Acre"
            }
        ],
        "agent": {
            "@type": "Person",
            "name": "Cole Swearingen",
            "jobTitle": "Real Estate Agent",
            "telephone": "972-971-9586",
            "email": "cole.swearingen@compass.com",
            "worksFor": {
                "@type": "RealEstateAgent",
                "name": "Compass"
            }
        }
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{PROPERTY_TITLE}</title>
            <meta name="description" content={PROPERTY_DESC} />
            <link rel="canonical" href={PROPERTY_URL} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={PROPERTY_URL} />
            <meta property="og:title" content={PROPERTY_TITLE} />
            <meta property="og:description" content={PROPERTY_DESC} />
            <meta property="og:image" content={PROPERTY_IMAGE} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={PROPERTY_URL} />
            <meta name="twitter:title" content={PROPERTY_TITLE} />
            <meta name="twitter:description" content={PROPERTY_DESC} />
            <meta name="twitter:image" content={PROPERTY_IMAGE} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
