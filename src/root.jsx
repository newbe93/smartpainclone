import { createBrowserRouter } from "react-router-dom";
import Home from "/src/views/Home";
import App from "/src/App";

const root = createBrowserRouter([
    {
        path : "/",
        element : <App />
    }
], {
    basename: "/smartpainclone/"
})

export default root;