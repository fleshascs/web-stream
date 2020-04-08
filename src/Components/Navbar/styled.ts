import styled from "styled-components";

export const NavigationBar = styled.nav`
    max-height: 48px;
    height: 48px;
    display: flex;
    //justify-content: center;
    z-index: 1;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const MenuList = styled.ul`
    min-height: 48px;
    max-height: 48px;
    display: flex;
    list-style: none;
    user-select: none;
    margin: 0;
    padding: 0;
`;

export const MenuListItem = styled.li`
    &.active {
        color: #efefef;
        background: rgba(255, 255, 255, 0.1);
        border-bottom: 2px solid #fff;
    }
    &:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    & .active {
        background: rgba(255, 255, 255, 0.05);
    }
`;

export const NavLink = styled.a`
    padding: 0 22px;
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: #000;
    transition: all 0.2s ease;

    &:hover {
        text-decoration: none !important;
        color: #efefef;
    }
`;
