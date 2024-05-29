import template from './sw-cms-el-config-googleMapsElement.html.twig';

Shopware.Component.register('sw-cms-el-config-googleMapsElement', {
    template,

    mixins: [
        'cms-element'
    ],

    computed: {
        longitude: {
            get() {
                return this.element.config.longitude.value;
            },

            set(value) {
                this.element.config.longitude.value = value;
            }
        },

        latitude: {
            get() {
                return this.element.config.latitude.value;
            },

            set(value) {
                this.element.config.latitude.value = value;
            }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('googleMapsElement');
        },

        onLongitudeUpdate(value) {
            this.element.config.longitude.value = value;

            this.$emit('element-update', this.element);
        },

        onLatitudeUpdate(value) {
            this.element.config.latitude.value = value;

            this.$emit('element-update', this.element);
        }
    }
});