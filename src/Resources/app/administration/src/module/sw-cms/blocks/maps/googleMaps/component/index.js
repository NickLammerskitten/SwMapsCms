import template from './sw-cms-block-googleMaps.html.twig';
import './sw-cms-block-googleMaps.scss';

Shopware.Component.register('sw-cms-block-googleMaps', {
    template,

    inject: ['systemConfigApiService'],

    props: {
        googleMapsApiKey: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            googleMapsApiKey: null,
            imageUrl: ''
        };
    },

    created() {
        this.getImageUrl().then(imageUrl => this.imageUrl = imageUrl);
    },

    methods: {
        async fetchApiKey() {
            const response = await this.systemConfigApiService.getValues('SwMapsCms.config', null);
            return response['SwMapsCms.config.googleMapsApiKey'];
        },

        async getImageUrl() {
            return await this.fetchApiKey().then(apiKey => {
                this.googleMapsApiKey = apiKey;

                const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
                const params = {
                    center: '51.920960,7.603800',
                    zoom: 14,
                    size: '450x450',
                    markers: 'color:green%7Clabel:Jungesgemuese%7C51.920960,7.603800',
                    key: this.googleMapsApiKey,
                };

                const urlSearchParams = new URLSearchParams(params);
                return `${baseUrl}?${urlSearchParams.toString()}`;
            });
        },
    }
});

