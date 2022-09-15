import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";

export default function Router() {
    return (
        <Routes>
            <Route path="/sign-in" element={<Auth />} />
            <Route path="/sign-up" element={<Auth />} />
        </Routes>
    )
}