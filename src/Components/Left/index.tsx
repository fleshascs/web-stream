// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Wrapper } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ILeft } from "./Left";
// #endregion Interface Imports

export const Left: React.FunctionComponent<ILeft.IProps> = (
    props: ILeft.IProps
) => {
    return (
        <Container className="open">
            <Wrapper>{props.children}</Wrapper>
        </Container>
    );
};
