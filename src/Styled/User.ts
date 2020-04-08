// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1;
`;

export const Middle = styled.div`
    height: 100%;
    flex: 1 1 0%;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow: auto;
`;
