import styled from "styled-components";

export const Container = styled.header`
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
    z-index: 4;
    position: relative;
`;

export const Logo = styled.div`
    font-family: bauerg;
    font-size: 2em;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const Top = styled.div`
    background: rgb(41, 44, 53);
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    marginright: 0;
    padding-right: 30%;
    flex: 3;

    @media (max-width: 750px) {
        padding-right: 0px;
        flex: 0;
        justify-content: flex-start;
    }
`;
