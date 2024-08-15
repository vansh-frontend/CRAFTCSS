'use client';
import Header from '@/components/header';
import Link from 'next/link';
import Hero from '@/components/hero';




export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black">
      <Header />
    
      <Hero />

    </main>
  );
}
