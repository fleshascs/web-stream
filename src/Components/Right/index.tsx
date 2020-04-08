import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Container, Wrapper, ToggleButton } from "./styled";
import { IRight } from "./Right";

const Right: React.FunctionComponent<IRight.IProps> = (props): JSX.Element => {
    const [opened, setOpened] = useState(false);

    const toggleOpen = () => {
        setOpened(!opened);
    };

    useEffect(() => {
        Router.events.on("onRouteChangeComplete", (err, url) => {
            if (err.cancelled) {
                console.log(`Route to ${url} was cancelled!`);
                return;
            }
            setOpened(false);
        });
    }, []);

    return (
        <>
            <Container className={opened ? "open" : ""}>
                <Wrapper>
                    {/* <Shoutbox
                            key="shoutbox"
                            isOpenOnMobile={this.state.opened}
                        /> */}
                    {props.children}
                </Wrapper>
            </Container>
            <ToggleButton onClick={toggleOpen}>🔥</ToggleButton>
        </>
    );
};

export { Right };
