import React, { useEffect, useRef } from 'react';
import { propertyInfo, theme } from '../config/propertyConfig';

const Map = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = () => {
            // Default location if not provided
            const location = propertyInfo.map || { lat: 32.8242, lng: -96.8285 };

            const mapOptions = {
                center: location,
                zoom: 15,
                disableDefaultUI: true, // Minimalist look
                zoomControl: true,
                scrollwheel: false, // Prevent accidental scrolling
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{ "visibility": "off" }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
                    }
                ]
            };

            const map = new window.google.maps.Map(mapRef.current, mapOptions);

            // Add Marker
            new window.google.maps.Marker({
                position: location,
                map: map,
                title: propertyInfo.address,
                animation: window.google.maps.Animation.DROP
            });
        };

        if (window.google && window.google.maps) {
            initMap();
        } else {
            // Wait for it to load if script is async
            const checkGoogle = setInterval(() => {
                if (window.google && window.google.maps) {
                    clearInterval(checkGoogle);
                    initMap();
                }
            }, 100);
            return () => clearInterval(checkGoogle);
        }

    }, []);

    return (
        <section className="map-section">
            <div ref={mapRef} className="map-container"></div>
            <style>{`
                .map-section {
                    width: 100%;
                    height: 450px; 
                }
                .map-container {
                    width: 100%;
                    height: 100%;
                }
                
                @media (max-width: 768px) {
                    .map-section {
                        height: 350px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Map;
