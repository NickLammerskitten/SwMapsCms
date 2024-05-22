import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'googleMaps',
    category: 'image-text',
    label: 'Google Maps',
    component: 'sw-cms-block-googleMaps',
    previewComponent: 'sw-cms-preview-googleMaps',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {}
});