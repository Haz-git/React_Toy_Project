import React, { useState, useContext } from 'react';
import styled from 'styled-components';

//Components:
import ChildContainer from './ChildContainer';

const MainContainer = styled.div`
    border: 1px solid black;
`;

const MainInput = styled.input`
    height: 2rem;
    width: 4rem;
`;

const Input = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    return (
        <MainContainer>
            <div>
                <h1>Input Parent Container</h1>
            </div>
            First Name:
            <MainInput onChange={handleFirstName} />
            Last Name:
            <MainInput onChange={handleLastName} />
            <div>
                This is the state held by input:
                <div>{firstName + ' ' + lastName}</div>
            </div>
        </MainContainer>
    );
};

export default Input;
