import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { INavbar } from "./Navbar";
import { NavigationBar, MenuList, MenuListItem, NavLink } from "./styled";

export const LINKS = [
    {
        textId: "Browse",
        to: "/",
        paths: ["/", "/index"],
    },
    {
        textId: "Broadcast",
        to: "/user/test",
        paths: ["/user"],
    },
];

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    const router = useRouter();
    return (
        <NavigationBar>
            <MenuList>
                {LINKS.map((url, index) => (
                    <MenuListItem key={url.to + index}>
                        <Link href={url.to} passHref>
                            <NavLink
                                className={
                                    url.paths &&
                                    url.paths.includes(router.pathname)
                                        ? "active"
                                        : undefined
                                }
                            >
                                {/* {this.props.t(url.textId)} */}
                                {url.textId}
                            </NavLink>
                        </Link>
                    </MenuListItem>
                ))}
            </MenuList>
        </NavigationBar>
    );
};

export { Navbar };
