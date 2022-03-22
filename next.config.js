/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {    
    MONGODB_URL: 'mongodb+srv://r03eRt:02289149Mm@cluster0.eg4co.mongodb.net/pizza-nextjs-react-app?retryWrites=true&w=majority',
    ADMIN_USERNAME: 'r03eRt',
    ADMIN_PASSWORD: 'morgan',
    TOKEN: 'MYCURRENTTOKEN'
  },
}

module.exports = nextConfig
