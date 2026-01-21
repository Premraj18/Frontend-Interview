import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <Header />

      <main className="flex-1">
        <div className="">
          <header className="mb-10 text-center flex flex-col justify-center items-center gap-3 pt-8">
            <h1 className="text-4xl lg:text-5xl font-bold">CA Monk Blog</h1>
            <p className="text-muted-foreground mt-2 lg:text-2xl text-xl mx-6 w-1/2 ">
              Stay updated with the latest trends in finance, accounting, and career growth
            </p>
          </header>
          <div className="lg:px-24 px-10 bg-stone-50 py-10">
            <Home />
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}
