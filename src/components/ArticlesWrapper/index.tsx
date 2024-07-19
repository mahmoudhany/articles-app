import React, { useEffect, useState } from "react"
import { fetchArticles } from "../../utils"
import ArticleCard from "../ArticleCard"
import { Article } from "./articleTypes"
import { ArticlesContainer } from "./articleWrapper.style"
import LoadingSpinner from "../LoadingSpinner"

const ArticlesWrapper: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const articles: Article[] = await fetchArticles()
      setArticles(articles)
    }
    fetchData()
  }, [])

  return (
    <ArticlesContainer id="articles-container">
      {articles.length === 0 ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.media[0]?.["media-metadata"][2].url}
            title={article.title}
            abstract={article.abstract}
            publishedDate={article.published_date}
            url={article.url}
          />
        ))
      )}
    </ArticlesContainer>
  )
}

export default ArticlesWrapper
