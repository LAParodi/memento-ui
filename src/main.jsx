import { StrictMode } from "react";
import { esMX } from "@clerk/localizations";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./routes/Homepage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("No se ha encontrado una llave pública.");
}

const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/posts",
          element: <PostListPage />,
        },
        {
          path: "/:slug",
          element: <SinglePostPage />,
        },
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_startTransition: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

// Credenciales de prueba
// username: test
// correo: test@test.com
// pass: Testing123.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} localization={esMX}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </ClerkProvider>
  </StrictMode>
);
