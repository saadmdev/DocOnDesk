module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // This replaces Tailwind's default sans
        sans: ['"Alan Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
