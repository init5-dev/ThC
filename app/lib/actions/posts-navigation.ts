import articles from "../mocks/articles/articles.json"

const getArticleIndex = (slug: string) => {
  const article = articles.find(article => article.slug === slug)
  return article ? articles.indexOf(article) : -1
}

export const prevPostSlug = (slug: string) => {
  const articleIndex = getArticleIndex(slug)
  return articleIndex > 0 ? articles[articleIndex - 1].slug : undefined
}

export const nextPostSlug = (slug: string) => {
  const articleIndex = getArticleIndex(slug)
  return articleIndex < articles.length - 1 ? articles[articleIndex + 1].slug : undefined
}