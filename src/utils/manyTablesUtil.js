import { getManyTables } from "../services/manyTablesService";

export async function manyTables(token, setCategories, setDisciplines, setCurrentUser) {
    const data = await getManyTables(token)

    if (data === 'jwt expired') {
        localStorage.clear()
        setCurrentUser({})
    }

    setCategories(data.categories)
    setDisciplines(data.disciplines)
}