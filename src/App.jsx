import { Outlet, RouterProvider,createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Doners from "./pages/Doners"
import Prospect  from "./pages/Prospects"
import Prospects from "./pages/Prospects"
import Menu from "./components/Menu"






function App() {
  const Layout=()=>{
    return(
      <div className="flex">
        <div>
          <Menu />
        </div>
        
        <div>
          <Outlet />
        </div>
      </div>
      
    )
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/admin',
      element:<Layout/>,
      children:
        [
          {
            path:"/admin",
            element:<Admin/>
          },
          {
            path:"/admin/doners",
            element:<Doners />

          },
          {
            path:"/admin/prospects",
            element:<Prospects />

          }
        ]
      
    }
    ])
    
  return (
    <>
      <RouterProvider router={router} />
      
     
    </>
  )
}

export default App
