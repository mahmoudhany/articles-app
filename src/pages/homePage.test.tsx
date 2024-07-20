import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { Suspense } from "react"
import HomePage from "./homePage"
import ArticleContext from "../context/articleContext"
import LoadingSpinner from "../components/LoadingSpinner"
import { IArticle } from "../types/articleTypes"

const mockArticles = [
  { id: 1, title: "Article 1", content: "Content 1" },
  { id: 2, title: "Article 2", content: "Content 2" },
]

const mockContextValue = {
  articles: mockArticles as unknown as IArticle[],
  loading: false,
  error: null,
  duration: 1,
  setDuration: jest.fn(),
  getArticleById: jest.fn(),
}

jest.mock("../components/ArticleCard", () => ({ article }: any) => (
  <div>{article.title}</div>
))

jest.mock("../components/LoadingSpinner", () => () => <div>Loading...</div>)

describe("HomePage", () => {
  test("displays loading spinner when loading", () => {
    const loadingContextValue = { ...mockContextValue, loading: true }
    render(
      <ArticleContext.Provider value={loadingContextValue}>
        <HomePage />
      </ArticleContext.Provider>
    )

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  test("displays error message on error", () => {
    const errorContextValue = {
      ...mockContextValue,
      error: "Something went wrong",
    }
    render(
      <ArticleContext.Provider value={errorContextValue}>
        <HomePage />
      </ArticleContext.Provider>
    )

    expect(screen.getByText("Something went wrong")).toBeInTheDocument()
  })

  test("renders articles correctly", async () => {
    render(
      <ArticleContext.Provider value={mockContextValue}>
        <Suspense fallback={<LoadingSpinner />}>
          <HomePage />
        </Suspense>
      </ArticleContext.Provider>
    )

    await waitFor(() => {
      expect(screen.getByText("Article 1")).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText("Article 2")).toBeInTheDocument()
    })
  })

  test("calls setDuration on duration change", () => {
    render(
      <ArticleContext.Provider value={mockContextValue}>
        <HomePage />
      </ArticleContext.Provider>
    )

    const select = screen.getByLabelText("Select duration:")
    fireEvent.change(select, { target: { value: "7" } })

    expect(mockContextValue.setDuration).toHaveBeenCalledWith(7)
  })
})
