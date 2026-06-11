import React from "react";
import {UserNavigate,useRoutes} from "react-router-dom";
import {useAuth} from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LoginRequired from "./components/LoginRequired";
