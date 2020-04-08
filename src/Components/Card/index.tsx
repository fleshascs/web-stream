import * as React from "react";
import { ICard } from "./Card";
import {Container } from './Card.styles';

const Card: React.FunctionComponent<ICard.IProps> = (props): JSX.Element => {
return (<Container>{props.children}</Container>);
};

export { Card };
