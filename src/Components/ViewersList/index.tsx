// #region Global Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { IStore } from "@Redux/IStore";
import { ViewersListActions } from "@Actions";
import { Container, Viewer, Username, Avatar, Title } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IViewersList } from "./ViewersList";
// #endregion Interface Imports

export const ViewersList: React.FunctionComponent<IViewersList.IProps> = (
    props: IViewersList.IProps
) => {
    const viewersList = useSelector((state: IStore) => state.viewersList);
    const dispatch = useDispatch();

    return (
        <Container>
            <Title>Viewers</Title>
            <Viewer>
                <Avatar src="http://www.gravatar.com/avatar/ae69fa0d674d490c99c4d8fdca23f1e2?s=100&amp;r=x&amp;d=retro" />
                <Username>Testas Testaitis</Username>
            </Viewer>
        </Container>
    );
};
