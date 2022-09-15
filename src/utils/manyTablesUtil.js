import { getManyTables } from "../services/manyTablesService";

export async function manyTables(token, setCategories, setDisciplines, setTeachers) {
    const { categories, disciplines, teachers } = await getManyTables(token)

    setCategories(categories)
    setDisciplines(disciplines)
    setTeachers(teachers)
}