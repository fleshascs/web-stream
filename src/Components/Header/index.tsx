import * as React from "react";
import { Container, Top, LogoContainer, Logo } from "@Styled/Header";
import { IHeader } from "./Header";

const Header: React.FunctionComponent<IHeader.IProps> = (
    props
): JSX.Element => {
    const { children } = props;
    return (
        <Container>
            <Top>
                <LogoContainer>{/* <Logo>{logo}</Logo> */}</LogoContainer>
            </Top>
            {children}
        </Container>
    );
};

export { Header };
