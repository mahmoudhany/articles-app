import React from "react"
import { Card, Content, Footer, Title } from "./articleCard.style"

interface ArticleCardProps {
  title: string
  content: string
  author: string
  publishedDate: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  content,
  author,
  publishedDate,
}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <span>By {author}</span> |{" "}
        <time dateTime={publishedDate}>{publishedDate}</time>
      </Footer>
    </Card>
  )
}

export default ArticleCard
