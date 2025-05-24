import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { HomePage, TripSearchResultsPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    )
  },
  {
    path: '/search-results',
    element: <TripSearchResultsPage />
  }
  // Add more routes here in the future
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App