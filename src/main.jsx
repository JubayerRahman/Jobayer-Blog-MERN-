import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home/Home.jsx'
import Blogs from './Page/Blogs/Blogs.jsx'
import Login from './Page/Login/Login.jsx'
import Registration from './Page/Registration/Registration.jsx'
import Blogform from './Page/BolgForm/Blogform.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import AdminPage from './Page/Admin/AdminPage.jsx'
import Profile from './Page/Profile/profile.jsx'
import SingleBlog from './Page/SingleBlog/SingleBlog.jsx'
import AdminBlogList from './Page/AdminBlogList/AdminBlogList.jsx'
import UpdateForm from './Page/UpdateForm/UpdateForm.jsx'
import ItroAdmin from './Page/Admin/ItroAdmin.jsx'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx'
import Users from "./Page/Users/Users.jsx"
import BookmarkPage from './Page/BookmarkPage/BookmarkPage.jsx'
import BlogSingleBlog from './Page/BlogSingleBlog/BlogSingleBlog.jsx'
import AdminRoute from './Components/AdminRoute/AdminRoute.jsx'

const roots = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blogs",
        element:<Blogs/>,
        loader: ()=> fetch("https://blog-server-alpha-inky.vercel.app/blogcount")
      },
      {
        path:"/blogs/:id",
        element:<PrivateRoute><SingleBlog/></PrivateRoute>,
        loader:({params}) => fetch(`https://blog-server-alpha-inky.vercel.app/blogs/${params.id}`)
      },
      {
        path:"/bookmark",
        element:<PrivateRoute><BookmarkPage/></PrivateRoute>
      },
      {
        path:"/bookmark/:id",
        element:<PrivateRoute><BlogSingleBlog/></PrivateRoute>
      },
      // routes for only admin
      {
        path:"/Admin",
        element:<PrivateRoute><AdminPage/></PrivateRoute>,
        children:[
          {
            path:"/Admin",
            element:<AdminRoute><ItroAdmin/></AdminRoute> 
          },
          {
            path:"/Admin/profile",
            element:<AdminRoute><Profile/></AdminRoute>
          },
          {
            path:"/Admin/blogForm",
            element:<AdminRoute><Blogform/></AdminRoute>
          },
          {
            path:"/Admin/bloglist",
            element:<AdminRoute><AdminBlogList/></AdminRoute>
          },
          {
            path:"/Admin/bloglist/:id",
            element:<AdminRoute> <UpdateForm/> </AdminRoute>,
            loader: ({params})=> fetch(`https://blog-server-alpha-inky.vercel.app/blogs/${params.id}`)
          },
          {
            path:"/Admin/user",
            element:<AdminRoute> <Users/> </AdminRoute> ,
            loader: ()=> fetch("https://blog-server-alpha-inky.vercel.app/user")
          }
        ]
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/registration",
        element:<Registration/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={roots} />
    </AuthProvider>
  </React.StrictMode>,
)
