import { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";


function MyApp({ Component, pageProps }: AppProps) {
  const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
  return (<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>)
    
}

export default MyApp