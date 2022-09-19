import { githubOAuthCode, signIn, signUp } from "../services/authService"

export async function login(e, user, setLoading, navigate, setCurrentUser) {
    e.preventDefault()

    setLoading(true)

    delete user.confirmPassword

    const { status, token } = await signIn(user)

    if (status === 200) {
        setCurrentUser({ token })
        localStorage.setItem('userLocal', JSON.stringify({ token }))

        navigate('/tests/disciplines')
    }

    setLoading(false)
}

export async function register(e, user, setLoading, navigate) {
    e.preventDefault()

    setLoading(true)

    const status = await signUp(user)

    if (status === 201) {
        navigate('/')
    }

    setLoading(false)
}

export async function githubAuthorize() {
    window.location.replace(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
}

export async function githubOAuth(code, setCurrentUser) {
    if (code !== undefined) {
        const token = await githubOAuthCode(code)

        localStorage.setItem('userLocal', JSON.stringify(token))
        setCurrentUser(token)
    }
}