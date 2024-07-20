import { Route, Routes } from "react-router-dom"
import ArticlesWrapper from "./pages/homePage"
import ArticleDetailsPage from "./pages/articleDetailsPage"
import { ArticleProivder } from "./context/articleContext"

function App() {
  return (
    <ArticleProivder>
      <Routes>
        <Route path="/" element={<ArticlesWrapper />} />
        <Route path="/article/:id" element={<ArticleDetailsPage />} />
      </Routes>
    </ArticleProivder>
  )
}

export default App
