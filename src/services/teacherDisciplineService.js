import axios from "axios";
import { AUTH_CONFIG, TEACHER_DISCIPLINE_ENDPOINT } from "../constants/endpoints";
import { errorToast } from "../utils/errorUtil";

export async function getTeacherDiscipline(token, teacherId, disciplineId) {
    let promise;

    try {
        promise = await axios.get(`${TEACHER_DISCIPLINE_ENDPOINT}/${teacherId}/${disciplineId}`, AUTH_CONFIG(token))
    } catch (err) {
        errorToast(err.response.data)
    }

    return promise.data.id
}

export async function getDisciplineTeachers(token, disciplineId) {
    try {
        const promise = await axios.get(`${TEACHER_DISCIPLINE_ENDPOINT}/${disciplineId}`, AUTH_CONFIG(token))

        return promise.data
    } catch (err) {
        errorToast(err.response.data)
    }
}