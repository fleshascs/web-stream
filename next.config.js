const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
    public: ["API_URL", "API_KEY", "MEDIA_SOCKET_URL"],
    server: ["DATABASE_URL"],
});

const nextConfig = {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html",
        },
        browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html",
        },
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY,
        STATIC_PATH: process.env.STATIC_PATH,
    },
};

module.exports = withConfig(
    withPlugins([[withCSS], [withSass], [withBundleAnalyzer]], nextConfig)
);
