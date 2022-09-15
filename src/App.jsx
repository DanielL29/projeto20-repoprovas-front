import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Router from './Router';
import Header from './layouts/header/Header';

export default function App() {
    return (
        <UserProvider>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Router />
            </BrowserRouter>
        </UserProvider>
    );
}
