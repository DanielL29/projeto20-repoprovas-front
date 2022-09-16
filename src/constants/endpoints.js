const API_URL = 'http://localhost:5000'

export const AUTH_CONFIG = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const SIGN_UP_ENDPOINT = `${API_URL}/sign-up`
export const SIGN_IN_ENDPOINT = `${API_URL}/sign-in`
export const MANY_TABLES_ENDPOINT = `${API_URL}/manyTables`
export const TEST_ENDPOINT = `${API_URL}/tests`
export const TEACHER_DISCIPLINE_ENDPOINT = `${API_URL}/teachersDisciplines`