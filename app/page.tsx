import { getArticleMetadata } from "@/lib/articles"
import { ArticlePreview } from "@/components/article-preview"
import Layout from "@/components/layout"

export default function Home() {
  const articles = getArticleMetadata()
  const recentArticles = articles.slice(0, 3)

  return (
    <Layout>
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-lg text-[#657b83]">
            Exploring ideas, sharing projects, and documenting my journey.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <ArticlePreview key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

