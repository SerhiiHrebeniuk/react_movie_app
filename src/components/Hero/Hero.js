/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroNav from "./HeroNav";
import Output from "./../Output/Output";



const style = css`
  width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`;

const Hero = () => {
    return (
        <section css={style} className="hero">
            <HeroNav />
            <Output />
        </section>
    )
}

export default Hero;
