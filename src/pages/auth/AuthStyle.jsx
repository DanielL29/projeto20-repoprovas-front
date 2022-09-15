import styled from 'styled-components'

export const SignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-top: 55px;
        margin-bottom: 185px;
    }

    h1 {
        font-weight: 500;
        font-size: 24px;
    }

    form {
        width: 464px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-weight: 500;
        font-size: 12px;
        margin: 0 5px;
    }

    .division {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 30px;
    }

    .division div {
        height: 1px;
        background-color: #C4C4C4;
        width: 100%;
    }

    .submit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    h2 {
        font-weight: 500;
        font-size: 12px;
        color: #4673CACC;
        text-decoration-line: underline;
        cursor: pointer;
    }

    h2:hover {
        filter: brightness(1.1);
    }
`