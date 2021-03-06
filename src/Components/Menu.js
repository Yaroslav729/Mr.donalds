import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import {ListItem} from "./ListItem";
import {Banner} from "./Banner";

const MenuStyled = styled.main`
background-color: #CCC;
margin-top: 110px;
`;

const SectionMenu = styled.section`
padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <Banner/>
<SectionMenu>
    <h2>
        Бургеры
    </h2>
    <ListItem
        itemList={dbMenu.burger}
        setOpenItem={setOpenItem}
    />
</SectionMenu>

        <SectionMenu>
            <h2>
               Закуски / Напитки
            </h2>
            <ListItem
                itemList={dbMenu.other}
                setOpenItem={setOpenItem}
            />
        </SectionMenu>
    </MenuStyled>
);