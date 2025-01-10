import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'articles')

export interface ArticleMetadata {
  title: string
  description: string
  category: string
  date: string
  slug: string
}

export function getArticleMetadata(): ArticleMetadata[] {
  const files = fs.readdirSync(articlesDirectory)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(articlesDirectory, fileName), 'utf8')
    const matterResult = matter(fileContents)
    
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      category: matterResult.data.category,
      date: matterResult.data.date,
      slug: fileName.replace('.md', '')
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleContent(slug: string): { content: string; metadata: ArticleMetadata } {
  const filePath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    content: matterResult.content,
    metadata: {
      title: matterResult.data.title,
      description: matterResult.data.description,
      category: matterResult.data.category,
      date: matterResult.data.date,
      slug
    }
  }
}

