import { Blog } from "../api/blogs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogCard({
  blog,
  onClick,
}: {
  blog: Blog
  onClick: () => void
}) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:border-primary transition"
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="outline">{blog.category[0]}</Badge>
          <span className="text-muted-foreground">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>

        <h3 className="font-semibold leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
