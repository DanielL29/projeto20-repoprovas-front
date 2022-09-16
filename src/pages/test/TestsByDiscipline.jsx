import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore } from '@mui/icons-material'
import { useContext, useEffect, useState } from "react";
import { testsByDiscipline } from "../../utils/testUtil";
import UserContext from "../../contexts/UserContext";
import { TestWrapper } from "./TestStyle";

export default function TestsByDiscipline() {
    const [tests, setTests] = useState([])
    const { currentUser } = useContext(UserContext)

    useEffect(() => {
        testsByDiscipline(currentUser.token, setTests)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TestWrapper>
            {tests.map(term => {
                return (
                    <Accordion key={term.id} sx={{ ":before": { backgroundColor: '#fff' } }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{term.number}° Período</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {term.disciplines.map(discipline => {
                                    return (
                                        <Accordion key={discipline.id} elevation={0} sx={{ ":before": { backgroundColor: '#fff' } }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMore />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography>{discipline.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {discipline.categories.map(category => {
                                                        return (
                                                            <div className="categories" key={category.id}>
                                                                <h1>{category.tests.length > 0 ? category.name : ''}</h1>
                                                                {category.tests.map(test => {
                                                                    return (
                                                                        <p>{test.name} ({test.teacherDiscipline.teacher.name})</p>
                                                                    )
                                                                })}
                                                            </div>
                                                        )
                                                    })}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </TestWrapper>
    )
}