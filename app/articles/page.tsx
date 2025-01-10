import { getArticleMetadata } from "@/lib/articles"
import { ArticlePreview } from "@/components/article-preview"
import Layout from "@/components/layout"

export default function Articles() {
  const articles = getArticleMetadata()

  return (
    <Layout>
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Articles</h1>
          <p className="text-lg text-[#657b83]">
            All articles are written in Markdown and sorted by publish date.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticlePreview key={article.slug} {...article} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

