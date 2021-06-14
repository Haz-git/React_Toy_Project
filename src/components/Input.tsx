import * as React from 'react';
import { useState, createContext } from 'react';
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

//We should place the context object outside of the JSX function because we'll want to import this to take advantage of useContext()
export const nameContext = createContext({ firstName: '', lastName: '' });

const Input = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    //We've created a context object here with a default value of an empty object.

    return (
        //We wrap the context provider over our parent function, whose state we want to pass down.
        <nameContext.Provider value={{ firstName, lastName }}>
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
                <div>
                    <ChildContainer />
                </div>
            </MainContainer>
        </nameContext.Provider>
    );
};

export default Input;
