module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
       },
      textColor:{
        view:"#28A4E2",
        crim: "#DC143C",
        table:"#FFFFFF",
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  