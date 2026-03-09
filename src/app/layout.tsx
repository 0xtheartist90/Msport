import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerMarquee from '@/components/PartnerMarquee';
import { LanguageProvider } from '@/context/LanguageContext';
import { getServerLanguage } from '@/lib/i18n';

export const metadata: Metadata = {
    title: 'Msport Driving Range — Chiang Mai',
    description: 'Book TrackMan sims, golf coaching, and your Msport membership at Chiang Mai’s flagship driving range.',
    icons: {
        icon: '/images/Home/Msport%20logo.png',
        shortcut: '/images/Home/Msport%20logo.png',
        apple: '/images/Home/Msport%20logo.png'
    }
};

const Layout = async ({ children }: Readonly<{ children: ReactNode }>) => {
    const language = await getServerLanguage();

    return (
        <html lang={language.toLowerCase()}>
            <head>
                <link rel="preload" as="image" href="/images/Home/Msport%20logo.png" />
            </head>
            <body className="overscroll-none antialiased">
                <LanguageProvider initialLanguage={language}>
                    <Navbar />
                    {children}
                    <PartnerMarquee />
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
};

export default Layout;
