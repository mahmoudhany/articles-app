import { useParams } from "react-router-dom"
import ArticleContext from "../../context/articleContext"
import { useContext } from "react"
import ArticleDetails from "../../components/ArticleDetails"

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { getArticleById } = useContext(ArticleContext) || {
    getArticleById: () => undefined,
  }
  const article = getArticleById(Number(id))

  return <ArticleDetails article={article} />
}

export default ArticleDetailsPage
