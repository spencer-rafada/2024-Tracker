import * as React from "react"

import HomeCarousel from "@/components/HomeCarousel"

export default function App() {
  return (
    <main className="w-screen h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Spencer's 2024 Tracker</h1>
      <div className="p-4 w-full h-5/6 flex justify-center align-center">
        <HomeCarousel />
      </div>
    </main>
  )
}
