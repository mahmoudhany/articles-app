import { createContext, useEffect, useState } from "react"
import { IArticle } from "../types/articleTypes"

const ArticleContext = createContext<{
  articles: IArticle[]
  loading: boolean
  error: any
  getArticleById: (id: number) => IArticle | undefined
  duration: number
  setDuration: (duration: number) => void
} | null>(null)

export function ArticleProivder({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)
  const [duration, setDuration] = useState<number>(1)

  const fetchArticles = async () => {
    const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${duration}.json?api-key=${process.env.REACT_APP_API_KEY}`

    try {
      setLoading(true)
      const response = await fetch(URL)
      const data = await response.json()
      setArticles(data.results)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [duration])

  const getArticleById = (id: number) => {
    return articles.find((article) => article.id === id)
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        loading,
        error,
        getArticleById,
        duration,
        setDuration,
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export default ArticleContext
