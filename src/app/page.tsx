"use client";

import Navbar from "@/components/Home/Navbar";
import Header from "@/components/Home/Header";
import About from "@/components/Home/About";

export default function Home() {
  const headerHeight = 80; // Height in vh

  return (
    <main className="">
      <Navbar className="fixed" headerHeight={headerHeight} />
      <Header height={headerHeight} />
      <About />
    </main>
  );
}
