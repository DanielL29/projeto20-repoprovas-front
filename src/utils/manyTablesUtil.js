import { getManyTables } from "../services/manyTablesService";

export async function manyTables(token, setCategories, setDisciplines, setCurrentUser, navigate) {
    const data = await getManyTables(token)

    if (data === 'jwt expired') {
        localStorage.clear()
        setCurrentUser({})
        navigate('/')
    }

    setCategories(data.categories)
    setDisciplines(data.disciplines)
}