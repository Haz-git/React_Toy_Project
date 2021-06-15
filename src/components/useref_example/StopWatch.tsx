import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

//styles:
const MainContainer = styled.div`
    border: 1px solid black;
    padding: 1em 1em;
    margin: 1em 1em;
`;

const StopWatch = () => {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) return;
        timerIdRef.current = window.setInterval(() => setCount((c) => c + 1), 1000);
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    });

    return (
        <MainContainer>
            <div>
                <h1>StopWatch</h1>
            </div>
        </MainContainer>
    );
};

export default StopWatch;
