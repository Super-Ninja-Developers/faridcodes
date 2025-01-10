import { getArticleContent, getArticleMetadata } from "@/lib/articles"
import Layout from "@/components/layout"
import Markdown from "react-markdown"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getArticleMetadata()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { content, metadata } = getArticleContent(params.slug)

  return (
    <Layout>
      <article className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#073642] text-[#fdf6e3] text-sm">
              {metadata.category}
            </span>
            <time className="text-sm text-[#657b83]">
              {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold">{metadata.title}</h1>
          <p className="text-lg text-[#657b83]">{metadata.description}</p>
        </header>

        <div className="prose prose-slate max-w-none">
          <Markdown>{content}</Markdown>
        </div>
      </article>
    </Layout>
  )
}

