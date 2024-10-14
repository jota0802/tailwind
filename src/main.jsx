import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/home/Home.jsx'
import Error from './routes/error/Error.jsx'
import Login from './routes/login/Login.jsx'


const router = createBrowserRouter([
  {
    path:'/',element:<App/>,
    errorElement: <Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/Login',element:<Login/>}
    ]


}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
