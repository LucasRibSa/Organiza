import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root/root';
import ErrorPage from './error-page';
import SignIn from './routes/signIn';
import { SignUp } from './routes/signUp';
import { Dashboard } from './routes/Dashboard';
import { IncomeExpense } from './routes/IncomeExpense';
import Investment from './routes/investment';
import { Budget } from './routes/Budget';
import { Notification } from './routes/Notification';
import { App } from './routes/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "investment",
        element: <Investment />,
      },
      {

      }
    ]
  },
  {
    path: "organiza",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "income-and-expense",
        element: <IncomeExpense />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "investment",
        element: <Investment />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
