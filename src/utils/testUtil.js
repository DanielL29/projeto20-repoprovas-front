import { getTeacherDiscipline } from "../services/manyTablesService";
import { createTest } from "../services/testService";

export async function addTest(e, token, test, navigate) {
    e.preventDefault()

    const teacherDisciplineId = await getTeacherDiscipline(token, test.teacherId, test.disciplineId)

    const testToInsert = {
        name: test.name,
        pdfUrl: test.pdfUrl,
        categoryId: test.categoryId,
        teacherDisciplineId
    }

    const status = await createTest(token, testToInsert)

    if (status === 201) {
        navigate('/tests/disciplines')
    }
}