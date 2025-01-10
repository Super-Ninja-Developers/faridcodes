import Link from "next/link"
import { ArticleMetadata } from "@/lib/articles"

export function ArticlePreview({ title, description, category, date, slug }: ArticleMetadata) {
  return (
    <article className="border-4 border-[#073642] bg-[#eee8d5] p-6 hover:shadow-lg transition-shadow">
      <Link href={`/articles/${slug}`}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#073642] text-[#fdf6e3] text-sm">
              {category}
            </span>
            <time className="text-sm text-[#657b83]">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h2 className="text-xl font-bold hover:text-[#268bd2] transition-colors">
            {title}
          </h2>
          <p className="text-[#657b83]">{description}</p>
        </div>
      </Link>
    </article>
  )
}

