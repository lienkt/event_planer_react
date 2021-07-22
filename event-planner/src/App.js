import React, { useState}  from 'react';
import Login from "./pages/LoginPage/Login";
import SignUp from './pages/SignUp';

export const PAGES = {
    Login,
    SignUp
};

export function App() {
    const [activePageKey, setActivePageKey] = useState("Login");
    const ActivePage = PAGES[activePageKey];
    return <ActivePage setActivePageKey={setActivePageKey}/>;
}