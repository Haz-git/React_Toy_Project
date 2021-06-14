import * as React from 'react';
import styled from 'styled-components';

//styles:
const MainContainer = styled.div`
    border: 1px solid black;
    margin: 1em 0;
    padding: 1em 1em;
`;

const LazyComponent = () => {
    return <MainContainer>I'm a very lazy component.</MainContainer>;
};

export default LazyComponent;
