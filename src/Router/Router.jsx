import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Root from "../Root/Root";




const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Homepage />,
                loader: () => fetch("")
            },




        ]

    }
]);



export default appRouters;