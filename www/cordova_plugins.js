cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-analytics-flurryanalytics/www/flurryanalytics.js",
        "id": "cordova-plugin-analytics-flurryanalytics.flurryanalytics",
        "clobbers": [
            "window.flurryanalytics"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ad-admob/www/admob.js",
        "id": "cordova-plugin-ad-admob.admob",
        "clobbers": [
            "window.admob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-exitappatsecond/www/exitappatsecond.js",
        "id": "cordova-plugin-exitappatsecond.exitappatsecond",
        "clobbers": [
            "window.exitappatsecond"
        ]
    },
    {
        "file": "plugins/com.simplec.plugins.powermanagement/www/PowerManagement.js",
        "id": "com.simplec.plugins.powermanagement.PowerManagement",
        "clobbers": [
            "window.plugins.powerManagement"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});