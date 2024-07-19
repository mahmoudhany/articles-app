const URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`

export const fetchArticles = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  return data.results
}
