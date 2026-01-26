import * as lobello from './properties/lobello';
import * as template from './properties/template';
import * as norfolk1260 from './properties/norfolk1260';

// Add new properties here as you create them:
// import * as oaklawn from './properties/oaklawn';

const properties = {
    'lobello': lobello,
    'template': template,
    'norfolk1260': norfolk1260,
};

// VITE_PROPERTY_ID is set in your Dokploy Environment Variables
// If not set, it defaults to 'lobello'
const activeId = import.meta.env.VITE_PROPERTY_ID || 'lobello';

const config = properties[activeId] || properties['lobello'];

export const { propertyInfo, agentInfo, images, galleryConfig, detailSections, theme, layout, galleryConfig_LEGACY } = config;
