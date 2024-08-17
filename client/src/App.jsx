import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login/login";
import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
      
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
