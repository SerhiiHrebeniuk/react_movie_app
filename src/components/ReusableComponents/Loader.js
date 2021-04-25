/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const styles = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 10px;
    background: #3489db;
    border-radius: 5px;
    animation: spinner 1.8s ease-in-out infinite;
    &:before, &:after{
        position: absolute;
        display: block;
        content: "";
        animation: spinner 1.8s ease-in-out infinite;
        height: 10px;
        border-radius: 5px;
        margin-top: 15px;
    }
    &:before{
        top: -20xp;
        left: 50px;
        width: 60px;
        background: #ef4836;
    }
    &:after{
        bottom: -30px;
        width: 105px;
        background: #f5ab35;
    }
    @keyframes spinner {
        0%{
            transform: translateX(40px);
        }
        50% {
            transform: translateX(-60px);
        }
        100% {
            transform: translateX(40px);
        }
    }
`;

const Loader = () => <div css={styles} className="loader"></div>;


export default Loader;