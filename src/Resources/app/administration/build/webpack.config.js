const { join, resolve } = require('path');

module.exports = () => {
    return {
        resolve: {
            alias: {
                "@types": resolve(
                    join(__dirname, '..', 'node_modules', 'types')
                ),
                "google.maps": resolve(
                    join(__dirname, '..', 'node_modules', 'google.maps')
                )
            }
        }
    };
}