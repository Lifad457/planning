import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`   
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;
        --ff-secondary: 'Fredoka', sans-serif;

        --fs-extra-large: 2.25rem;
        --fs-large: 1.6rem;
        --fs-medium: 1.25rem;
        --fs-normal: 1rem;
        --fs-small: 0.8rem;
        --fs-extra-small: 0.6rem;

        --fw-thin: 100;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-semi-bold: 600;
        --fw-bold: 700;
        --fw-extra-bold: 800;
        --fw-black: 900;

        --clr-primary: #FFF1A0;
        --clr-secondary: #ED8A0A;
        --clr-tertiary: #339966;
    }

    html, body {
        font-family: var(--ff-primary);
        line-height: 1.6;
        background-color: var(--clr-tertiary);
    }
`;
