import template from './sw-cms-el-googleMapsElement.html.twig';

Shopware.Component.register('sw-cms-el-googleMapsElement', {
    template,

    mixins: [
        'cms-element'
    ],

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
            imageUrl: '',
            longitude: '',
            latitude: '',
        };
    },

    created() {
        this.createdComponent();
        this.getImageUrl().then(imageUrl => this.imageUrl = imageUrl);
    },

    methods: {
        createdComponent() {
            this.initElementConfig('googleMapsElement');
        },

        async fetchApiKey() {
            const response = await this.systemConfigApiService.getValues('SwMapsCms.config', null);
            return response['SwMapsCms.config.googleMapsApiKey'];
        },

        async fetchElementConfig() {
            this.longitude = this.element.config.longitude.value;
            this.latitude = this.element.config.latitude.value;
        },

        async getImageUrl() {
            return await this.fetchElementConfig().then(
                async () => await this.fetchApiKey().then(apiKey => {
                    this.googleMapsApiKey = apiKey;

                    const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
                    const params = {
                        center: this.longitude + ',' + this.latitude,
                        zoom: 14,
                        size: '450x450',
                        markers: 'color:blue|label:J|' + this.longitude + ',' + this.latitude + '',
                        key: this.googleMapsApiKey
                    };

                    const urlSearchParams = new URLSearchParams(params);
                    return `${baseUrl}?${urlSearchParams.toString()}`;
                })
            );
        },
    }
});