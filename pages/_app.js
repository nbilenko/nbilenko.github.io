import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N67H49L9YG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N67H49L9YG');
        `}
        </Script>
      </Component>
    </ThemeProvider>
  );
}

export default MyApp;
