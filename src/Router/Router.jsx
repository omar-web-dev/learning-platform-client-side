import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import FAQ from "../Pages/FAQ";
import SignIn from "../Pages/SingIn";
// import SignIn from "../Pages/";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import Details from "../Pages/Details";
import ErrorPage from "../Pages/ErorrPage";
import Premium from "../Pages/Premium";
import PrivetRoute from "./PrivetRoute";

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
          loader: () => fetch('https://assingment-10-server.vercel.app/courses'),
        },
        {
          path: 'course/:id', 
          loader: ({params}) => fetch(`https://assingment-10-server.vercel.app/course/${params.id}`),
          element: <Details />,
        },
        {
          path: 'premium/:id', 
          loader: ({params}) => fetch(`https://assingment-10-server.vercel.app/course/${params.id}`),
          element: <PrivetRoute><Premium /></PrivetRoute>,
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
      errorElement: <ErrorPage/>
    }
  ])