import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
    images: {
      remotePatterns: [new URL('https://api.escuelajs.co/api/v1/files/**'),
        new URL('https://cdn.pixabay.com/**'),
        new URL('https://i.imgur.com/**'),
        new URL('https://api.lorem.space/image/**'),
        new URL('https://picsum.photos/**'),
      ],
    },
  };


export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.imgur.com',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.lorem.space', // именно с этого хоста идут картинки от FakeStore API
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com', // если ты используешь картинки оттуда
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.imgur.com', // если вдруг есть картинки с imgur
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

