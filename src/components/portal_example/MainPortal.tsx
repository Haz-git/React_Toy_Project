import * as React from 'react';
import styled from 'styled-components';

const MainPortal = () => {
    return (
        <div>
            A portal is rendered outside of the DOM structure, but does not affect the React
            Components Tree.
        </div>
    );
};

export default MainPortal;
