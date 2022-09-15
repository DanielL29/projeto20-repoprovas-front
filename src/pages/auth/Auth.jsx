import { SignWrapper } from "./AuthStyle";
import logo from '../../assets/images/logo.png'
import { useContext, useState } from "react";
import AuthInput from '../../components/input/AuthInput';
import { GITHUB_BUTTON_STYLE } from "../../constants/objectStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { login, register } from "../../utils/authUtil";
import UserContext from "../../contexts/UserContext";

export default function Auth() {
    const [user, setUser] = useState({ email: '', password: '', confirmPassword: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(UserContext)
    const signInOrSignUp = useLocation().pathname === '/sign-in'

    return (
        <SignWrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={e => signInOrSignUp ?
                login(e, user, setLoading, navigate, setCurrentUser) :
                register(e, user, setLoading, navigate)
            }>
                <h1>{signInOrSignUp ? 'Login' : 'Cadastro'}</h1>
                <Button style={GITHUB_BUTTON_STYLE} variant="contained" disableElevation>
                    ENTRAR COM O GITHUB
                </Button>
                <div className="division">
                    <div></div>
                    <p>ou</p>
                    <div></div>
                </div>
                <AuthInput label="Email" text="email" value={user.email}
                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} disabled={loading} />
                <AuthInput label="Senha" text="password" type="password" value={user.password}
                    showPassword={showPassword} setShowPassword={setShowPassword}
                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} disabled={loading} />
                {!signInOrSignUp ? (
                    <AuthInput label="Confirme sua senha" text="confirmPassword" type="password" value={user.confirmPassword}
                        showPassword={showPassword} setShowPassword={setShowPassword}
                        onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} disabled={loading}
                    />
                ) : ''}
                <div className="submit">
                    <h2 onClick={() => navigate(signInOrSignUp ? '/sign-up' : '/sign-in')}>
                        {signInOrSignUp ? 'Não possuo cadastro' : 'Já possou cadastro'}
                    </h2>
                    <Button style={{
                        boxShadow: `
                            0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
                            0px 2px 2px rgba(0, 0, 0, 0.14), 
                            0px 1px 5px rgba(0, 0, 0, 0.12)
                        `
                    }} type="submit" variant="contained" disableElevation>
                        {signInOrSignUp ? 'Entrar' : 'Cadastrar'}
                    </Button>
                </div>
            </form>
        </SignWrapper>
    )
}