import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div``;

const MainInput = styled.input`
    height: 2rem;
    width: 4rem;
`;

const Input = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <MainContainer>
            First Name:
            <MainInput />
            Last Name:
            <MainInput />
        </MainContainer>
    );
};

export default Input;
