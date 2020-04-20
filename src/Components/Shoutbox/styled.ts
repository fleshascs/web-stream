// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const ShoutboxContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    //padding-top: 10px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MessgesList = styled.div``;

export const NotLoggedIn = styled.div`
    color: grey;
    font-size: 0.9em;
`;

export const Container = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow: auto; //sito reikejo del firefox
`;

export const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid #d2d6de;
    resize: none;
    font-size: 0.9em;
    color: #767a7f;
    outline-color: #424c58;
    overflow: auto;
    background: transparent;
`;
