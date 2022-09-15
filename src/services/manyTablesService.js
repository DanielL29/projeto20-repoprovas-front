import axios from 'axios';
import { AUTH_CONFIG, MANY_TABLES_ENDPOINT } from '../constants/endpoints';
import { errorToast } from './../utils/errorUtil';

export async function getManyTables(token) {
    let promise;

    try {
        promise = await axios.get(MANY_TABLES_ENDPOINT, AUTH_CONFIG(token))
    } catch (err) {
        errorToast(err.response.data)
    }

    return promise.data
}

export async function getTeacherDiscipline(token, teacherId, disciplineId) {
    let promise;

    try {
        promise = await axios.get(`${MANY_TABLES_ENDPOINT}/${teacherId}/${disciplineId}`, AUTH_CONFIG(token))
    } catch (err) {
        errorToast(err.response.data)
    }

    return promise.data.id
}