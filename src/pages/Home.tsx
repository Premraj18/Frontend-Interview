import { useState } from "react"
import BlogList from "../components/BlogList"
import BlogDetail from "../components/BlogDetail"

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* LEFT SIDEBAR */}
      <aside className="lg:col-span-4">
        <h2 className="font-semibold text-muted-foreground mb-4">
          Latest Articles
        </h2>
        <BlogList onSelect={setSelectedId} />
      </aside>

      {/* RIGHT CONTENT */}
      <main className="lg:col-span-8">
        <BlogDetail blogId={selectedId} />
      </main>
    </div>
  )
}
