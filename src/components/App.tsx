import React from 'react';
import styled from 'styled-components';

//Components:
import Input from './Input';
import LazyMain from './lazy_components/LazyMain';
import UseRefMain from './useref_example/UseRefMain';
import StateButton from './useref_example/StateButton';
import StopWatch from './useref_example/StopWatch';
import MainPortal from './portal_example/MainPortal';

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
            <TestContainer>
                <h1>useRef() Example</h1>
                <UseRefMain />
                <StateButton />
                <div>
                    <StopWatch />
                </div>
            </TestContainer>
            <TestContainer>
                <h1>Portal Test</h1>
                <MainPortal />
            </TestContainer>
        </div>
    );
};

export default App;
