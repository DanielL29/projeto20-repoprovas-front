import { useContext, useEffect, useState } from "react";
import { testsByTeacher } from "../../utils/testUtil";
import UserContext from "../../contexts/UserContext";
import { TestWrapper } from "./TestStyle";
import TestsAccordion from "../../layouts/tests-accordion/TestsAccordion";
import { useNavigate } from "react-router-dom";

export default function TestsByDiscipline() {
    const [tests, setTests] = useState([])
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        testsByTeacher(currentUser.token, setTests, navigate)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TestWrapper>
            {tests.map(teacher => {
                return (
                    <TestsAccordion key={teacher.id} name={teacher.name}>
                        {teacher.categories.map(category => {
                            return (
                                <div className="categories" key={category.id}>
                                    <h1>{category.tests.length > 0 ? category.name : ''}</h1>
                                    {category.tests.map(test => {
                                        return (
                                            <p onClick={() => window.open(test.pdfUrl, '_blank')}>
                                                {test.name} ({test.teacherDiscipline.discipline.name})
                                            </p>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </TestsAccordion>
                )
            })}
        </TestWrapper>
    )
}