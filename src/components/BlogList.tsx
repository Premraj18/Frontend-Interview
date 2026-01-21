import { useBlogs } from "../hooks/useBlogs"
import BlogCard from "./BlogCard"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading } = useBlogs()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-28 rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {data?.map(blog => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(blog.id)}
        />
      ))}
    </div>
  )
}
