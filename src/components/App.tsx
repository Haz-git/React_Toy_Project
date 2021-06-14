import React from 'react';
import styled from 'styled-components';

//Components:
import Input from './Input';

//Styles:
const TestContainer = styled.div`
    border: 1px solid black;
    padding: 1em 1em;
`;

const App = () => {
    return (
        <div>
            <TestContainer>
                <h1>Context API Test</h1>
                <Input />
            </TestContainer>
        </div>
    );
};

export default App;
