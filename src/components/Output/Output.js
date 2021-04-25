/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext } from "react";
import { MovieContext } from "./../../Context/MovieContext";
import Container from "./../ReusableComponents/Container";
import Popular from "./../Popular/PopularMovies";
import Movies from "./../MoviesF/Movies";
import MoviesPagination from "./../MoviesF/MoviesPagination";


const style = css`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    > .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
@media (max-width: 1365px) {
    > .container {
        max-width: 90%;
    }
}
`;


const Output = () => {

    const { activeLink } = useContext(MovieContext);

    return (
        <div css={style} className="output">
            {activeLink === "Popular" && (
                <Container>
                    <Popular />
                </Container>
            )}
            {activeLink === "All Movies" && (
                <Container>
                    <React.Fragment>
                        <Movies />
                        <MoviesPagination />
                    </React.Fragment>
                </Container>
            )}
        </div>
    )
}

export default Output;