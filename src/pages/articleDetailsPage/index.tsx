import { useParams } from "react-router-dom"
import ArticleContext from "../../context/articleContext"
import { useContext } from "react"
import ArticleDetails from "../../components/ArticleDetails"
import { Container } from "../../components/ArticleDetails/articlesDetails.style"

const ArticleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { getArticleById } = useContext(ArticleContext) || {
    getArticleById: () => undefined,
  }
  const article = getArticleById(Number(id))

  if (!article) {
    return (
      <Container>
        <p style={{ textAlign: "center" }}>Article not found.</p>
      </Container>
    )
  }
  return <ArticleDetails article={article} />
}

export default ArticleDetailsPage
