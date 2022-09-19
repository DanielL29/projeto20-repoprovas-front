import { getManyTables } from "../services/manyTablesService";

export async function manyTables(token, setCategories, setDisciplines, setTeachers) {
    const { categories, disciplines } = await getManyTables(token)

    setCategories(categories)
    setDisciplines(disciplines)
}