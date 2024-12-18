import { Outlet } from "react-router-dom";
import App from "../App";
import CounterComponent from "../components/stateManagement/stateManagement";
import AsyncStateTestComponent from "../components/stateManagement/asynchronousStateTest";

const mainRoutes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <p> Absolute Path /about</p>
    },
    
    {
        path: "/dashboard", // Absolute path /dashboard
        element: <p> Dahsboard </p> // This is for the /dashboard route
      },
      {
        path: "/dashboard/about", // Separate route for /dashboard/about
        element: <p> Dahsboard About</p> // This is for the /dashboard/about route
      },
      {
        path: "/stateManagement",
        element: <CounterComponent/>
      },
      {
        path: "/AsynchronousState",
        element: <AsyncStateTestComponent/>
      }
];

export default mainRoutes;