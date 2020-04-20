// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    padding: 0.3rem 1rem 1rem 1rem;
    border-top: 2px solid #edf2f7;
    justify-content: flex-start;
    box-shadow: rgba(109, 103, 95, 0.22) 1px 3px 6px;
`;
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
interface Props {
    active?: boolean;
}
export const Button = styled.span<Props>`
    ${(props: any) => (props.active ? "color: red" : null)};
    padding: 0.3rem;
    cursor: pointer;
    &:hover {
        background: #c3baba;
    }
`;

export const Title = styled.div`
    font-size: 0.7em;
    padding: 0rem;
`;
