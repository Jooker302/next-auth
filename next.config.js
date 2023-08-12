/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGOOSE_URL : "mongodb://127.0.0.1:27017/next_auth"
    },
}

module.exports = nextConfig
