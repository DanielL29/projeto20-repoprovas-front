import { signIn, signUp } from "../services/authService"

export async function login(e, user, setLoading, navigate, setCurrentUser) {
    e.preventDefault()

    setLoading(true)

    delete user.confirmPassword

    const { status, token } = await signIn(user)

    if (status === 200) {
        setCurrentUser({ token })
        localStorage.setItem('userLocal', JSON.stringify({ token }))

        navigate('/tests/discipline')
    }

    setLoading(false)
}

export async function register(e, user, setLoading, navigate) {
    e.preventDefault()

    setLoading(true)

    const status = await signUp(user)

    if (status === 201) {
        navigate('/sign-in')
    }

    setLoading(false)
}