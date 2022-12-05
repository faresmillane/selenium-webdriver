module.exports = {
    hubPort: 4444,
    chrome: {
        isActive: true,
        maxSessions: 5,
        version: '107.0.5304.62', // available versions : https://chromedriver.chromium.org/downloads
        port: 4445
    },
    firefox: {
        isActive: true,
        maxSessions: 5,
        version: '0.32.0',  // available versions : https://github.com/mozilla/geckodriver/releases
        port: 4446
    },
    edge: {
        isActive: true,
        maxSessions: 5,
        version: '107.0.1418.52',  // available versions : https://developer.microsoft.com/fr-fr/microsoft-edge/tools/webdriver/
        port: 4447
    },
    safari: {
        isActive: true, // is active only on macos platform
        maxSessions: 8,
        version: '',  // safari driver is available on macOS High Sierra and newer
        port: 4448
    }
};