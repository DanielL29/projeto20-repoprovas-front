import axios from 'axios';
import { GITHUB_OAUTH, SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from '../constants/endpoints';
import { errorToast } from './../utils/errorUtil';

export async function signIn(user) {
    let promise;

    try {
        promise = await axios.post(SIGN_IN_ENDPOINT, user)
    } catch (err) {
        promise = err.response

        errorToast(err.response.data)
    }

    return { status: promise.status, token: promise.data?.token }
}

export async function signUp(user) {
    let promise;

    try {
        promise = await axios.post(SIGN_UP_ENDPOINT, user)
    } catch (err) {
        promise = err.response

        errorToast(err.response.data)
    }

    return promise.status
}

export async function githubOAuthCode(code) {
    try {
        const promise = await axios.post(GITHUB_OAUTH, { code })

        return promise.data
    } catch (err) {
        errorToast(err.response.data)
    }
}
