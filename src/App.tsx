import TrackerCarousel from "@/components/TrackerCarousel"

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">Spencer's 2024 Tracker</h1>
      </div>
      <div className="p-4 w-full h-5/6 flex justify-center align-center">
        <TrackerCarousel />
      </div>
    </main>
  )
}
