import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

//styles:

const StateButtons = styled.button``;

const StateButton = () => {
    console.log('State-based counter button has been rendered');
    const [buttonCounter, setButtonCounter] = useState(0);

    const handleButtonClick = () => {
        let newCount = buttonCounter + 1;
        setButtonCounter(newCount);
        console.log(`I have been pressed ${newCount} amount of times!`);
    };

    return (
        <div>
            <StateButtons onClick={handleButtonClick}>
                A state implemented button. Check out how many times I render to update the count!
            </StateButtons>
        </div>
    );
};

export default StateButton;
