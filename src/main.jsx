import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import UserProfile from './pages/UserProfile.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ProfileLayout from './layouts/ProfileLayout.jsx';
import Login from './pages/LoginPage.jsx';
import Signup from './pages/SignUpPage.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<HomePage/>} />
//       <Route path="product" element={<ProductInfo />} />
//       <Route path="profile" element={<UserProfile />} />
//     </Route>
//   )
// );

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {path: "product", element: <ProductInfo /> },
        {path : "login", element: <Login  />},
        {path : "signup", element: <Signup  />}
      ]
    },
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
        { index: true, element: <UserProfile /> },
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
