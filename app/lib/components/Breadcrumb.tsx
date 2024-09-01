import { capitalize } from "../actions/string-manipulation"
import articles from '@/app/lib/mocks/articles/articles.json'

const Breadcrumb = ({ pathname }: { pathname: string }) => {
  const pathTokens = pathname.split('/').slice(1)
  pathTokens.unshift('Inicio')

  const ptCount = pathTokens.length
  const articleName = articles.find(article => article.slug === pathTokens[ptCount-1])?.title || 'S\\T'

  return (
    <div className="flex items-center justify-center my-8">
      <div className='breadcrumbs text-sm'>
      <ul>
        {pathTokens.map((token, i) =>
          i < ptCount - 1 ? (
            <li key={i}>
              <a href={i == 0? '/' : '/' + pathTokens.slice(1, i+1).join('/')}>{capitalize(token)}</a>
            </li>
          ) : (
            <li key={i}>{capitalize(articleName)}</li>
          )
        )}
      </ul>
    </div>
    </div>
  )
}

export default Breadcrumb
