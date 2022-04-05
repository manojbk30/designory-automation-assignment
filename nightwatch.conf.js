require('dotenv').config();

module.exports = {
    'src_folders': ['designory-tests'],
    'page_objects_path': ['page-objects'],

    'webdriver': {
        'start_process': true,
        'end_session_on_fail': true,
        'server_path': require('chromedriver').path,
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': ['--headless']
                }
            }
        }
    }
};