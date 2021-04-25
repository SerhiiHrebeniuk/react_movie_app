/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const styles = css`
    width: 100%;
    max-wodth: 1300px;
    margin: 0 auto;
`;

const Container = ({children}) => (
    <div css={styles} className="container">
        {children}
    </div>  
);

export default Container;