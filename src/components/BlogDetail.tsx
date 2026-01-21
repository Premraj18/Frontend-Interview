import { useBlog } from "../hooks/useBlog"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BlogArticle from "./BlogArticle"

export default function BlogDetail({ blogId }: { blogId: number | null }) {
  const { data, isLoading } = useBlog(blogId || 0)

  if (!blogId) {
    return (
      <div className="h-full flex flex-col gap-10 items-center">
        <div className="p-10">
          <img src="/bg.jpeg" alt="Background" className="lg:w-[700px] lg:h-[500px] sm:w-[500px] w-[800px]"/>
        </div>
        <div className="">
          {/* <h2 className="text-xl font-semibold mb-2">
            Select an article to read
          </h2>
          <p className="text-muted-foreground">
            Choose a blog from the left panel
          </p> */}
          <BlogArticle/>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-80 w-full rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (!data) return null

  return (
    <article className="space-y-6">
      {/* COVER IMAGE */}
      <img
        alt="Text"
        src={data.coverImage}
        className="w-full h-80 object-cover rounded-xl"
      />

      {/* META */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Badge>{data.category[0]}</Badge>
          <span className="text-muted-foreground">
            {new Date(data.date).toDateString()}
          </span>
        </div>

        <h1 className="text-3xl font-bold">
          {data.title}
        </h1>
      </div>

      {/* ACTION */}
      <Button variant="secondary" size="sm">
        Share Article
      </Button>

      {/* DESCRIPTION */}
      <p className="text-lg text-muted-foreground">
        {data.description}
      </p>

      {/* CONTENT */}
      <div className="prose max-w-none">
        <p className="whitespace-pre-line">
          {data.content}
        </p>
      </div>
    </article>
  )
}
