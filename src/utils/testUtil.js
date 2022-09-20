import { getDisciplineTeachers, getTeacherDiscipline } from '../services/teacherDisciplineService'
import { createTest, getTestsByDiscipline, getTestsByTeacher } from "../services/testService";

export async function addTest(e, token, test, navigate, setTest) {
    e.preventDefault()

    const teacherDisciplineId = await getTeacherDiscipline(token, test.teacherId, test.disciplineId)

    const testToInsert = {
        name: test.name,
        pdfUrl: test.pdfUrl,
        categoryId: test.categoryId,
        teacherDisciplineId
    }

    const status = await createTest(token, testToInsert)

    alert(`Adição de prova enviada ao seu email!`)

    if (status === 201) {
        navigate('/tests/disciplines')
    }
}

export async function testsByDiscipline(token, setTests, setCurrentUser, navigate) {
    const tests = await getTestsByDiscipline(token)

    if (tests === 'jwt expired') {
        localStorage.clear()
        setCurrentUser({})
        navigate('/')
    }

    setTests(tests)
}

export async function testsByTeacher(token, setTests, setCurrentUser, navigate) {
    const tests = await getTestsByTeacher(token)

    if (tests === 'jwt expired') {
        localStorage.clear()
        setCurrentUser({})
        navigate('/')
    }

    setTests(tests)
}

export async function disciplineTeachers(token, discipleId, setTeachers) {
    const teachers = await getDisciplineTeachers(token, discipleId)

    setTeachers(teachers)
}