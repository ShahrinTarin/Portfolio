import { createBrowserRouter } from "react-router"
import Home from "../Component/Home"
import RootLayOut from "../RootLayOut/RootLayOut"

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayOut,
    children: [
      {
        path: '/',
        Component: Home
      },
    ]

    
  }


])

export default router