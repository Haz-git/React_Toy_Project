import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const TestButton = styled.button``;

const UseRefMain = () => {
    const buttonCounter = useRef(0);

    const handleButtonClick = () => {
        buttonCounter.current++;
        console.log(`You have clicked this button ${buttonCounter.current} times`);
    };

    console.log('This useRef based button has been rendered.');

    return (
        <div>
            <TestButton onClick={handleButtonClick}>
                A useRef implemented button. Open your console and click this button.
            </TestButton>
        </div>
    );
};

export default UseRefMain;
