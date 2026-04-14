import { Poppins } from 'next/font/google';
import './globals.css';
import Navber from '@/components/shared/Navber/Navber';

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'KeenKeeper',
    description: 'KeenKeeper',
};

export default function RootLayout({ children }) {
    return (
        <html
            suppressHydrationWarning={true}
            lang="en"
            className={`${poppins.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-[#F8FAFC]">
                <Navber />
                <main className="font-poppins max-w-[1500px] mx-auto w-full p-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
