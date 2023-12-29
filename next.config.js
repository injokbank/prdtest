/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //distDir: "out",
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  // static export로 빌드해서 배포 후 요청시 /csr-at-pages/injo 등과 같은 특정 url로 요청 시 404 발생하는 현상(/csr-at-pages/injo.html로 요청해야만 정상됨)
  // 을 방지하기 위해 /csr-at-pages/injo/ 형태로 trailingSlash가 붙게 설정해서 해결
  // https://github.com/vercel/next.js/issues/9213
  //trailingSlash: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ib20/act/:path*",
          destination: "https://m.kbanknow.com/ib20/act/:path*",
        },
        {
          source: "/resource/img/:path*",
          destination: "https://m.kbanknow.com/resource/img/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
