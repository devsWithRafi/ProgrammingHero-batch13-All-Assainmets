import { Poppins, Lora, Viga, Righteous, Abel } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navber from '@/components/navber/Navber';
import { Toaster } from '@/components/ui/sonner';
import BookSessionContextProvider from '@/context/session-context/BookSessionContextProvider';
import MyTutorsContextProvider from '@/context/my-tutors/MyTutorsContextProvider';
import Footer from '@/components/footer/Footer';

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

export const metadata = {
  title: 'MediQueue',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${lora.variable} ${righteous.variable} ${viga.variable} ${abel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BookSessionContextProvider>
            <MyTutorsContextProvider>
              {children}
              <Footer />
            </MyTutorsContextProvider>
          </BookSessionContextProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
