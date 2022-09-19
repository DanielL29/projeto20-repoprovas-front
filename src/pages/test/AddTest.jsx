import { Button, MenuItem, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectField from "../../components/select-field/SelectField";
import UserContext from "../../contexts/UserContext";
import { manyTables } from "../../utils/manyTablesUtil";
import { addTest, disciplineTeachers } from "../../utils/testUtil";
import { TestWrapper } from "./TestStyle";

export default function AddTest() {
    const [categories, setCategories] = useState([])
    const [disciplines, setDisciplines] = useState([])
    const [teachers, setTeachers] = useState([])
    const [test, setTest] = useState({
        name: '',
        pdfUrl: '',
        categoryId: '',
        disciplineId: '',
        teacherId: ''
    })
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        manyTables(currentUser.token, setCategories, setDisciplines)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TestWrapper onSubmit={e => addTest(e, currentUser.token, test, navigate)}>
            <TextField id="name" name="name" value={test.name} label="Nome da prova"
                variant="outlined" fullWidth style={{ marginBottom: '15px' }} required
                onChange={e => setTest({ ...test, [e.target.name]: e.target.value })} />
            <TextField id="pdfUrl" name="pdfUrl" value={test.pdfUrl} label="Link da prova"
                variant="outlined" fullWidth style={{ marginBottom: '15px' }} required
                onChange={e => setTest({ ...test, [e.target.name]: e.target.value })} />
            <SelectField value={test.categoryId} text="Categoria" name="categoryId"
                onChange={e => setTest({ ...test, [e.target.name]: e.target.value })}>
                {categories.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)}
            </SelectField>
            <SelectField value={test.disciplineId} text="Disciplina" name="disciplineId"
                onChange={e => setTest({ ...test, [e.target.name]: e.target.value })}>
                {disciplines.map(discipline =>
                    <MenuItem key={discipline.id} value={discipline.id} onClick={() => disciplineTeachers(currentUser.token, discipline.id, setTeachers)}>
                        {discipline.name}
                    </MenuItem>
                )}
            </SelectField>
            <SelectField value={test.teacherId} text="Pessoa Instrutora" name="teacherId" disabled={test.disciplineId === ''}
                onChange={e => setTest({ ...test, [e.target.name]: e.target.value })}>
                {teachers.map(teacher => <MenuItem key={teacher.id} value={teacher.teacher.id}>{teacher.teacher.name}</MenuItem>)}
            </SelectField>
            <Button variant="contained" type="submit" fullWidth>ENVIAR</Button>
        </TestWrapper>
    )
}