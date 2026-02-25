import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Msport Driving Range — Chiang Mai',
    description: 'Book TrackMan sims, golf coaching, and your Msport membership at Chiang Mai’s flagship driving range.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en'>
            <body className="overscroll-none antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
