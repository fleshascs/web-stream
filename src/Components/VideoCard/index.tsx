import * as React from "react";
import { ICard } from "./VideoCard";
import { Container } from "./styled";
import { Card } from "@Components";

const VideoCard: React.FunctionComponent<ICard.IProps> = (
    props
): JSX.Element => {
    return (
        <Container>
            <Card>{props.children}</Card>
        </Container>
    );
};

export { VideoCard };
