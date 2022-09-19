import { Route, Routes, Navigate } from "react-router-dom";
import AddTest from "./pages/test/AddTest";
import Auth from "./pages/auth/Auth";
import TestsByDiscipline from "./pages/test/TestsByDiscipline";
import TestsByTeacher from "./pages/test/TestsByTeacher";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

export default function Router() {
    const { currentUser } = useContext(UserContext)
    const isLogged = currentUser.token !== undefined

    return (
        <Routes>
            <Route path="/" element={isLogged ? <Navigate to="/tests/disciplines" replace /> : <Auth />} />
            <Route path="/sign-up" element={<Auth />} />
            <Route path={isLogged ? "/tests/add" : "*"} element={isLogged ? <AddTest /> : <Navigate to="/" replace />} />
            <Route path={isLogged ? "/tests/disciplines" : "*"} element={isLogged ? <TestsByDiscipline /> : <Navigate to="/" replace />} />
            <Route path={isLogged ? "/tests/teachers" : "*"} element={isLogged ? <TestsByTeacher /> : <Navigate to="/" replace />} />
        </Routes>
    )
}