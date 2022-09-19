import { useLocation } from "react-router-dom";
import { HeaderWrapper } from "./HeaderStyle";
import logo from '../../assets/images/logo.png'
import { ALL_ROUTES } from "../../constants/allRoutes";
import LogoutIcon from '@mui/icons-material/Logout';
import { LOGOUT_STYLE } from "../../constants/objectStyles";
import { TextField } from '@mui/material';
import Navbar from "../navbar/Navbar";

export default function Header() {
    const location = useLocation()

    function RenderHeader() {
        const allRoutes = ALL_ROUTES.find(route => route === location.pathname)

        if (allRoutes && allRoutes !== '/' && allRoutes !== '/sign-up') {
            return (
                <>
                    <HeaderWrapper>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <LogoutIcon style={LOGOUT_STYLE} />
                        </div>
                        <div className="search">
                            <TextField id="search" label="Pesquise por disciplina" variant="outlined" style={{ width: '464px' }} />
                        </div>
                    </HeaderWrapper>
                    <Navbar />
                </>
            )
        } else if (allRoutes) {
            return <></>
        } else {
            return (
                <h1>Page not found</h1>
            )
        }
    }

    return <RenderHeader />
}