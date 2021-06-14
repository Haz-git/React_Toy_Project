import React from 'react';
import styled from 'styled-components';

//Components:
import Input from './Input';
import LazyMain from './lazy_components/LazyMain';

//Styles:
const TestContainer = styled.div`
    border: 1px solid black;
    padding: 1em 1em;
    margin: 1em 0;
`;

const App = () => {
    return (
        <div>
            <TestContainer>
                <h1>Context API Test</h1>
                <Input />
            </TestContainer>
            <TestContainer>
                <h1>React Lazy + Suspense Test</h1>
                <LazyMain />
            </TestContainer>
        </div>
    );
};

export default App;
