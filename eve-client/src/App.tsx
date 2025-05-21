import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    )
  },
  // Add more routes here in the future
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App