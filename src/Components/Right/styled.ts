import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 24rem;
    @media (max-width: 900px) {
        display: none;

        &.open {
            width: 100%;
            max-width: 100%;
            display: flex;
            z-index: 2;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ToggleButton = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 14%;
    right: 22px;
    color: #ffffff;
    padding: 10px;
    border-radius: 50%;
    background: #292c35;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    background: #292c35;
    color: #d4d4d4 !important;
    border: 3px solid #ff7a23;
    font-size: 1.8rem;

    @media (min-width: 900px) {
        display: none;
    }
`;
