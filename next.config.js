/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: 'mongodb+srv://r03eRt:02289149Mm@cluster0.eg4co.mongodb.net/pizza-nextjs-react-app?retryWrites=true&w=majority',
  },
}

module.exports = nextConfig
