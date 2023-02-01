/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
              'signup': "url('../public/images/signup/close-up-doctor-filling-out-prescription.webp')",
              'login': "url('../public/images/login.webp')",
              'admin': "url('../public/images/cover/admin.webp')",
              'master': "url('../public/images/cover/master.webp')",
            },
            colors: {
                'dark1': '#1b344d',
            },
            blur: {
                xs: '1px',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')({nocompatible: true}),
    ],
}
