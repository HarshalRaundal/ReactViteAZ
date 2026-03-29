import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import "./index.css";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ScratchPage from "./pages/ScratchPage.jsx";
import UseStateFromScratch from "./components/useStateFromScratch.jsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/learn",
        element: <ScratchPage />,
      },
    ],
    errorElement: (
      <>
        <Header />
        <ErrorPage />
      </>
    ),
  },
]);

export const root = createRoot(document.getElementById("root"));

// export const renderApp = () => {
//   console.log("Re Render App");
//   createRoot(document.getElementById("root")).render(
//     <RouterProvider router={browserRouter}>
//       <App />
//     </RouterProvider>,
//   );
// };

// root.render(
//   <RouterProvider router={browserRouter}>
//     <App />
//   </RouterProvider>,
// );

root.render(<UseStateFromScratch />);
