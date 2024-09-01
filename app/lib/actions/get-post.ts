import articles from "../mocks/contents/articles.json"

const getPost = (slug: string) => {
  const article = articles.find(article => article.slug === slug)

  return article
}

export default getPost