import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "../../pages/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { AuthRoutes } from "../utils/authRoutes";
import { useDispatch } from 'react-redux';
import { refreshUser } from 'components/Redux/Auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';

const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import("pages/Login"));
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const TasksPage = lazy(() => import('pages/TasksPage'));

export const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
         <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/categories"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={<AuthRoutes component={LoginPage} redirectTo="/categories" />}
        />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </>
  );
};
