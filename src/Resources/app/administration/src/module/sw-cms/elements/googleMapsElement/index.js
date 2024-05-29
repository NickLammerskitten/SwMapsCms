import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'googleMapsElement',
    label: 'Google Maps Element',
    component: 'sw-cms-el-googleMapsElement',
    configComponent: 'sw-cms-el-config-googleMapsElement',
    previewComponent: 'sw-cms-el-preview-googleMapsElement',
    defaultConfig: {
        longitude: {
            source: 'static',
            value: '40.712776'
        },
        latitude: {
            source: 'static',
            value: '-74.005974'
        }
    }
});