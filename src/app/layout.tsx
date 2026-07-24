import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tejas Kharkar | AI & Machine Learning Software Engineer',
  description:
    'Personal portfolio of Tejas Kharkar, AI & Machine Learning Software Engineer specializing in Deep Learning, Computer Vision (YOLO/OpenCV), Generative AI (Llama 3/RAG), and TinyML.',
  keywords: [
    'Tejas Kharkar',
    'AI Engineer',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'YOLOv11',
    'OpenCV',
    'Generative AI',
    'RAG',
    'TinyML',
    'Portfolio',
  ],
  authors: [{ name: 'Tejas Kharkar', url: 'https://www.linkedin.com/in/tejas-kharkar-tech' }],
  openGraph: {
    title: 'Tejas Kharkar | AI & Machine Learning Software Engineer',
    description:
      'Explore cutting-edge Deep Learning, Computer Vision, and Generative AI software projects by Tejas Kharkar.',
    type: 'website',
    images: ['/images/tejas_photo.jpg'],
  },
  verification: {
    google: 'google2dc0d38f1bb8d532',
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
