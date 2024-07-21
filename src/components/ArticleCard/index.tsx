import React from "react"
import { Abstract, Card, CardImage, Footer, Title } from "./articleCard.style"
import { IArticle } from "../../types/articleTypes"

interface ArticleCardProps {
  article: IArticle
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, abstract, published_date, id } = article
  const image = article.media[0]?.["media-metadata"][2].url

  return (
    <Card to={`/article/${id}`} data-cy="article-card">
      <CardImage src={image} alt={article.media[0]?.caption} />
      <Title data-cy="article-title">{title}</Title>
      <Abstract>{abstract}</Abstract>
      <Footer>
        <time dateTime={published_date}>{published_date}</time>
      </Footer>
    </Card>
  )
}

export default ArticleCard
