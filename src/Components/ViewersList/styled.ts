// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    //background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    //align-items: center;
    //min-height: 100vh;
`;

export const Title = styled.div`
    font-size: 1.3em;
    padding: 1rem;
`;

export const Viewer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.3rem 1rem;
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const Username = styled.div`
    padding-left: 0.3rem;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    text-decoration: none;
`;
