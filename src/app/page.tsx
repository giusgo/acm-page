"use client";

import Navbar from "@/components/Home/Navbar";
import Header from "@/components/Home/Header";

export default function Home() {
  const headerHeight = 80; // Height in vh

  return (
    <main className="h-[2000px]">
      <Navbar className="fixed" headerHeight={headerHeight} />
      <Header height={headerHeight} />
    </main>
  );
}