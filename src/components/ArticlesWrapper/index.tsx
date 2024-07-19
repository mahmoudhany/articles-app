import React, { useEffect } from "react"
import styled from "styled-components"
import { fetchArticles } from "../../utils"
import ArticleCard from "../ArticleCard"

// Define styled components outside of the ArticlesComponent
const ArticlesContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ArticlesWrapper: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchArticles(1, 10)
    }

    fetchData()
  }, [])

  return (
    <ArticlesContainer id="articles-container">
      <ArticleCard
        title="test"
        author="test"
        content="test"
        publishedDate="test"
      />
    </ArticlesContainer>
  )
}

export default ArticlesWrapper
