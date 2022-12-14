import axios from 'axios';
import { AUTH_CONFIG, TEST_ENDPOINT } from '../constants/endpoints';
import { errorToast } from './../utils/errorUtil';

export async function createTest(token, test) {
    let promise;

    try {
        promise = await axios.post(TEST_ENDPOINT, test, AUTH_CONFIG(token))
    } catch (err) {
        promise = err.response

        errorToast(err.response.data)
    }

    return promise.status
}

export async function getTestsByDiscipline(token) {
    let promise;

    try {
        promise = await axios.get(`${TEST_ENDPOINT}/discipline`, AUTH_CONFIG(token))
    } catch (err) {
        errorToast(err.response.data)

        promise = err.response
    }

    return promise.data
}

export async function getTestsByTeacher(token) {
    let promise;

    try {
        promise = await axios.get(`${TEST_ENDPOINT}/teacher`, AUTH_CONFIG(token))
    } catch (err) {
        errorToast(err.response.data)

        promise = err.response
    }

    return promise.data
}