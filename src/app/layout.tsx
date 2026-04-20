import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tejas Kharkar | AI & Embedded Systems Engineer | Edge AI & TinyML Specialist',
  description:
    'Personal portfolio of Tejas Kharkar, AI & Embedded Systems Engineer specializing in Edge AI, TinyML, Computer Vision (OpenCV/YOLO), and IoT hardware (ESP32/STM32).',
  keywords: [
    'Tejas Kharkar',
    'AI Engineer',
    'Embedded Systems Engineer',
    'Edge AI',
    'TinyML',
    'Computer Vision',
    'ESP32',
    'STM32',
    'OpenCV',
    'TensorFlow Lite',
    'IoT',
    'Portfolio',
  ],
  authors: [{ name: 'Tejas Kharkar', url: 'https://www.linkedin.com/in/tejas-kharkar-tech' }],
  openGraph: {
    title: 'Tejas Kharkar | AI & Embedded Systems Engineer',
    description:
      'Explore cutting-edge Edge AI, TinyML, and Computer Vision hardware projects by Tejas Kharkar.',
    type: 'website',
    images: ['/images/tejas_photo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#030408] text-white selection:bg-cyan-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
