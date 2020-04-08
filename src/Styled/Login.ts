// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    width: 400px;
    margin: 0px auto;
`;

export const Box = styled.div`
    padding: 1rem 3rem;
    margin-top: 5rem;
    box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
    position: relative;
`;

export const Icon = styled.img`
    filter: invert(1);
    width: 22px;
    margin-right: 13px;
`;

export const Title = styled.h3`
    padding-bottom: 2rem;
`;

export const GoogleLink = styled.a`
    background-color: #dd4b39;
    color: white;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    display: flex;
`;
