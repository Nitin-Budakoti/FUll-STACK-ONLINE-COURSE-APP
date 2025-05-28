import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login"
import Courses from "./Pages/Students/Courses";
import HeroSection from "./Pages/Students/HeroSection";
import Mainlayout from "./Layout/Mainlayout";
import { RouterProvider } from "react-router-dom";
import { MyLearning } from "./Pages/Students/MyLearning";
import Profile from "./Pages/Students/Profile";
const appRouter = createBrowserRouter([
  {
      path: "/",element: <Mainlayout />,
      children: [
        { path: "/", element: (<><HeroSection /> <Courses />  </>), },
        {
          path:"/login",element: <Login />,
        },
        {
          path:"/Mylearning",element: <MyLearning />,
        }, {
          path:"/profile",element: <Profile />,
        }
      ],
  }
]); 
function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App;