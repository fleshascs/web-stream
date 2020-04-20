// #region Global Imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { IStore } from "@Redux/IStore";
import { socket } from "@Services/socket";
import { ViewersListActions } from "@Actions";
import {
    Container,
    Viewer,
    Username,
    Avatar,
    Title,
    OnlineIcon,
    ViewerCount,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IViewersList } from "./ViewersList";
// #endregion Interface Imports

export const ViewersList: React.FunctionComponent<IViewersList.IProps> = (
    props: IViewersList.IProps
) => {
    //const viewersList = useSelector((state: IStore) => state.viewersList);
    //const dispatch = useDispatch();
    const [viewers, setViewers] = useState([]);
    const [onlineCount, setOnlineCount] = useState(0);

    useEffect(() => {
        socket.emit("getViewers", { room: "test" }, function(data: any) {
            console.log("getViewers", data);
            setViewers(data.authorisedUsers);
        });

        socket.on("updateViewers", function(data: any) {
            console.log("updateViewers", data);
            setViewers(data.authorisedUsers);
            setOnlineCount(data.online);
        });
    }, []);

    return (
        <Container>
            <Title>
                Viewers
                <ViewerCount>
                    <span
                        className="material-icons"
                        style={{
                            fontSize: "1.3em",
                            marginRight: "4px",
                        }}
                    >
                        person
                    </span>{" "}
                    {onlineCount}
                </ViewerCount>
            </Title>
            {viewers.map((viewer: any) => (
                <Viewer key={viewer._id}>
                    {/* <Avatar src="http://www.gravatar.com/avatar/ae69fa0d674d490c99c4d8fdca23f1e2?s=100&amp;r=x&amp;d=retro" /> */}
                    <OnlineIcon />
                    <Username>{viewer.displayName}</Username>
                    <span className="material-icons">mic</span>
                    <span className="material-icons" style={{ color: "red" }}>
                        videocam
                    </span>
                </Viewer>
            ))}
        </Container>
    );
};
