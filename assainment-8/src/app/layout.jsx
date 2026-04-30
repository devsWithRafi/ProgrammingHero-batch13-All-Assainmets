import { Poppins, Lora, Viga, Righteous, Abel } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const righteous = Righteous({
  variable: '--font-ring',
  subsets: ['latin'],
  weight: ['400'],
});

const viga = Viga({
  variable: '--font-viga',
  subsets: ['latin'],
  weight: ['400'],
});

const abel = Abel({
  variable: '--font-abel',
  subsets: ['latin'],
  weight: ['400'],
});

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${poppins.variable} ${lora.variable} ${righteous.variable} ${viga.variable} ${abel.variable} h-full antialiased`}
    >
      <body className="font-poppins min-h-full flex flex-col">{children}</body>
    </html>
  );
}
