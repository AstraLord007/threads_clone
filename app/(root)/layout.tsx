import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RigthSidebar from '@/components/shared/RigthSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threadas Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main>
          <LeftSidebar />
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
              { children }
            </div>
          </section>
          <RigthSidebar />
        </main>
        <Bottombar />
      </body>
    </html>
  )
}
