"use client"

import Script from 'next/script';
import './style/main.scss';
import Head from 'next/head';
import Navbar from './component/navbar';
import { cacao_logo, navigationLinks } from '../cacaodelilio.config';
import Breadcrumbs from '@marketsystems/nextjs13-appdir-breadcrumbs';
import "@marketsystems/nextjs13-appdir-breadcrumbs/dist/styles.css";
import { usePathname } from 'next/navigation'


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) { 
  const pathname = usePathname()
  const data = navigationLinks 
  const img = cacao_logo
  return (
    <html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head> 
        <body className={`cacao-${pathname}`}>
        <Navbar data={data} logo={img}/>    
        <Breadcrumbs containerClassName="breadcrumb container"  />
          {children}
        </body>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" />      
      <Script src="https://kit.fontawesome.com/2d708db9dc.js" crossorigin="anonymous" />
    </html>
  )
}
