import { Route, Routes } from "react-router-dom";
import AddTest from "./pages/test/AddTest";
import Auth from "./pages/auth/Auth";
import TestsByDiscipline from "./pages/test/TestsByDiscipline";
import TestsByTeacher from "./pages/test/TestsByTeacher";

export default function Router() {
    return (
        <Routes>
            <Route path="/sign-in" element={<Auth />} />
            <Route path="/sign-up" element={<Auth />} />
            <Route path="/tests/add" element={<AddTest />} />
            <Route path="/tests/disciplines" element={<TestsByDiscipline />} />
            <Route path="/tests/teachers" element={<TestsByTeacher />} />
        </Routes>
    )
}