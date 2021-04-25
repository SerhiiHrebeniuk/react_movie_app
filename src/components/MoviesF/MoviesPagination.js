/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext } from "react";
import { MovieContext } from "./../../Context/MovieContext";
import Container from "./../ReusableComponents/Container";

const style = css`
width: 100%;
.container {
  &:nth-child(1) {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: none;
      outline: none;
      background: #32de57;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      border-radius: 4px;
      width: 160px;
      padding: 10px 0;
      cursor: pointer;
      user-select: none;
      margin: 0 10px;
      transition: background 500ms ease-in-out;
      &:hover {
        background: #259a3e;
      }
    }
  }
}
`;


const MoviesPagination = () => {

    const { currentPage, showPagination, newPage } = useContext(MovieContext);

    return (
        <div css={style} className="moviesPagination">
            {showPagination && (
                <Container>
                    <React.Fragment>
                   <button  
                   style={{cursor: currentPage !== 1 ? "pointer" : "not-allowed", 
                   background: currentPage !==1 ? "#32de57" : "#3033847"}} 
                   onClick={() => newPage("previous")} 
                   >Prev Page</button>
                   <button onClick={() => newPage("next")} >Next Page</button>
                   </React.Fragment>
                </Container>
            )}
        </div>
    )
}

export default MoviesPagination;