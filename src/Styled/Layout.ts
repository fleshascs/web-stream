import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    position: relative;
    color: rgb(127, 118, 118);
    overflow: hidden;
`;

export const Main = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

export const CollumnsWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    position: relative;
    overflow: hidden;
`;
