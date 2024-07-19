import React from "react"
import { Abstract, Card, CardImage, Footer, Title } from "./articleCard.style"

export interface ArticleCardProps {
  title: string
  image: string
  abstract: string
  publishedDate: string
  url: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  abstract,
  publishedDate,
  image,
  url,
}) => {
  return (
    <Card to={url} target="_blank">
      <CardImage src={image} alt={title} />
      <Title>{title}</Title>
      <Abstract>{abstract}</Abstract>
      <Footer>
        <time dateTime={publishedDate}>{publishedDate}</time>
      </Footer>
    </Card>
  )
}

export default ArticleCard
