/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    output: 'export',
    basePath: '/MichalDanko20436JezykiWys', // Nazwa Twojego repozytorium
    assetPrefix: '/MichalDanko20436JezykiWys', // Dodaj tę samą nazwę co w basePath
    images: {
        unoptimized: true, // Wymagane dla statycznego eksportu obrazów
    },
};

