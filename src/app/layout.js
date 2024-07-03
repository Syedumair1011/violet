
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'

import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';
import Script from 'next/script';


const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: 'Four-bedroom townhouses at DAMAC Hills 2',
  description: 'Experience the epitome of luxury living with our exquisite 4-bedroom townhouses at DAMAC Hills 2. Nestled in the heart of Dubai, these spacious townhouses offer unparalleled comfort and elegance, featuring contemporary designs, premium finishes, and world-class amenities. Enjoy the perfect blend of serenity and convenience with lush green landscapes, recreational facilities, and easy access to major highways and the city’s top attractions. Ideal for families and investors, DAMAC Hills 2 promises a vibrant community lifestyle in one of Dubai’s most sought-after destinations. Discover your dream home today and embrace a life of sophistication and tranquility at DAMAC Hills 2.',
  icons: {
    icon: ['/favicon.png?v=4'],
    apple: ['/favicon.png?v4'],
    shortcut: ['/favicon.png.png']
  },
  keywords: 'Damac 4-bedroom townhouses, Damac Hills 2, luxury living, spacious townhouses, contemporary designs, premium finishes, world-class amenities, Dubai, family-friendly community, investors, serenity and convenience, vibrant community lifestyle, lush green landscapes, recreational facilities, easy access to major highways, top attractions'
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <ImportBs />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16626466176`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16626466176');
        `,
          }}
        />
        <div>{children}</div>
      </body>
    </html>
  )
}
