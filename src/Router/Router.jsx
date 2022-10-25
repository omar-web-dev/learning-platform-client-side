import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import SignIn from "../SharePage/SingIn";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'home', element: <Home />,
        },
        {
          path: 'fqa', element: <FAQ />,
        },
        {
          path: 'courses', 
          element: <Courses />,
          loader: () => fetch('http://localhost:5000/course'),
        },
        {
          path: 'sign-in',
          element: <SignIn />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'sign-up',
          element: <SignUp />
        },
        {
          path: 'profile',
          element: <Profile />
        },
      ],
      errorElement: 'this is a error page'
    }
  ])