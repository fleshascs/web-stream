import React from "react";
import { Container, Video as VideoContainer } from "./styled";
//import { IVideo } from "./Video";

const Video = React.forwardRef(
    (props, ref?: React.Ref<HTMLVideoElement>): JSX.Element => {
        return (
            <Container>
                <VideoContainer ref={ref} />
            </Container>
        );
    }
);

export { Video };
