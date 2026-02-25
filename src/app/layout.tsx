import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Birdiez - Modern Golf Fashion in Chiang Mai',
    description: 'Premium golf apparel and accessories at MSport Driving Range, Chiang Mai'
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
