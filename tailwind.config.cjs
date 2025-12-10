module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // This replaces Tailwind's default sans
        sans: ['"Alan Sans"', 'sans-serif'],
      },
      colors: {
        'hospital-blue': '#9CC6DB',
        'hospital-cream': '#FCF6D9',
        'hospital-orange': '#CF4B00',
        'hospital-gold': '#DDBA7D',
      },
    },
  },
  plugins: [],
};
