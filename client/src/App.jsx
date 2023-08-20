import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// ******** Created Components ********//
import Username from './components/Username'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'

// ******** Route Routes ********//
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          <RouterProvider router={router}>

          </RouterProvider>
      </main>
    </>
  )
}

export default App
