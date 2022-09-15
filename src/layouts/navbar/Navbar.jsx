import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarWrapper } from './NavbarStyle';

export default function Navbar() {
    const [page, setPage] = useState({
        testsDisciplines: false,
        testsTeachers: false,
        testsAdd: false
    })
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/tests/disciplines') {
            setPage({ ...page, testsDisciplines: true })
        } else if (location.pathname === '/tests/teachers') {
            setPage({ ...page, testsTeachers: true })
        } else {
            setPage({ ...page, testsAdd: true })
        }
    }, [page, location.pathname])

    return (
        <NavbarWrapper>
            <Button variant={page.testsDisciplines ? 'contained' : 'outlined'}
                disableElevation onClick={() => navigate('/tests/disciplines')}>
                DISCIPLINAS
            </Button>
            <Button variant={page.testsTeachers ? 'contained' : 'outlined'}
                disableElevation onClick={() => navigate('/tests/teachers')}>
                PESSOA INTRUSTORA
            </Button>
            <Button variant={page.testsAdd ? 'contained' : 'outlined'}
                disableElevation onClick={() => navigate('/tests/add')}>
                ADICIONAR
            </Button>
        </NavbarWrapper>
    )
}