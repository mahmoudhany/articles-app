import React, { Suspense, useContext, lazy } from "react"
import { ArticlesContainer } from "../components/ArticlesWrapper/articleWrapper.style"
import LoadingSpinner from "../components/LoadingSpinner"
import ArticleContext from "../context/articleContext"

const ArticleCard = lazy(() => import("../components/ArticleCard"))

const HomePage: React.FC = () => {
  const {
    articles = [],
    loading,
    error,
    duration,
    setDuration,
  } = useContext(ArticleContext) || {
    articles: [],
    loading: false,
    error: null,
    duration: 1,
    setDuration: () => {},
  }

  if (loading) return <LoadingSpinner />

  if (error) return <div>Something went wrong</div>

  return (
    <>
      <div style={{ marginBottom: "20px", width: "80%", margin: "0 auto" }}>
        <label htmlFor="duration">Select duration: </label>
        <select
          name="duration"
          id="duration"
          onChange={(e) => {
            setDuration(+e.target.value)
          }}
          value={duration}
          test-id="duration-select"
        >
          <option value="1">1 day</option>
          <option value="7">7 days</option>
          <option value="30">30 days</option>
        </select>
      </div>
      <ArticlesContainer>
        <Suspense fallback={<LoadingSpinner />}>
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </Suspense>
      </ArticlesContainer>
    </>
  )
}

export default HomePage
