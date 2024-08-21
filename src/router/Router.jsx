import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Root from "../components/Home/Root";
import ExploreUs from "../components/Others/ExploreUs/ExploreUs";
import ITStrategy from "../components/Others/Solutions/IT/ITStrategy";
import HRStrategy from "../components/Others/Solutions/HR/HRStrategy";
import HRServices from "../components/Others/Services/HRServices/HRServices";
import Career from "../components/Others/Career/Career";
import Blog from "../components/Others/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/explore",
        element: <ExploreUs />,
      },
      {
        path: "/HR-Services",
        element: <HRServices></HRServices>, 
      },
      {
        path: "/IT-Strategy",
        element: <ITStrategy></ITStrategy>,
      },
      {
        path: "/HR-Strategy",
        element: <HRStrategy />,
      },
      {
        path: "/projects",
        element: <Blog></Blog> ,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },

      
    ],
  },
]);

export default router;
