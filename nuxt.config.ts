// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "unenv/runtime/node/process/_process";

export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4'
    },
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        //'public',
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        '@/assets/css/main.scss'
    ]
})
