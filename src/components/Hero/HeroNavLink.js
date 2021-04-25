/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from "react";
import { MovieContext } from "./../../Context/MovieContext";

const style = css`
border: none;
outline: none;
background: transparent;
font-size: 22px;
margin-right: 24px;
font-weight: 700;
cursor: pointer;
user-select: none;
@media (max-width: 860px) {
  font-size: 40px;
}
`;


const HeroNavLink = ({btnText}) => {

    const {setHiddenMenu, activeLink, setActiveLink} = useContext(MovieContext);

    return (
        <button  onClick={() => {
            setActiveLink(btnText);
            setHiddenMenu(true);
        }} css={style}
            style={{ color: activeLink === btnText ? "#f9a5ff" : "#fff" }}
        >{btnText}</button> 
    )
}

export default HeroNavLink;