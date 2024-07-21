import React from "react"
import {
  Title,
  Abstract,
  Container,
  ImageBanner,
  PublishedDate,
} from "./articlesDetails.style"
import { IArticle } from "../../types/articleTypes"

interface ArticleDetailsProps {
  article: IArticle | undefined
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ article }) => {
  const image = article?.media[0]?.["media-metadata"][2].url

  return (
    <Container>
      {image && <ImageBanner src={image} alt={article.media[0]?.caption} />}
      <Title data-cy={'details-title'}>{article?.title}</Title>
      <Abstract>{article?.abstract}</Abstract>
      <PublishedDate>{article?.published_date}</PublishedDate>
    </Container>
  )
}

export default ArticleDetails
