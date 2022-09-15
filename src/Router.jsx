import { Route, Routes } from "react-router-dom";
import AddTest from "./pages/test/AddTest";
import Auth from "./pages/auth/Auth";

export default function Router() {
    return (
        <Routes>
            <Route path="/sign-in" element={<Auth />} />
            <Route path="/sign-up" element={<Auth />} />
            <Route path="/tests/add" element={<AddTest />} />
        </Routes>
    )
}