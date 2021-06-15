import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const TestButton = styled.button``;

const UseRefMain = () => {
    return (
        <div>
            <TestButton>Log your button clicks.</TestButton>
        </div>
    );
};

export default UseRefMain;
