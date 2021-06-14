import * as React from 'react';
import { useContext } from 'react';
import { nameContext } from './Input';

const ChildContainerSub = () => {
    //Grab the context object from input:
    const grabbedContext = useContext(nameContext);
    console.log(grabbedContext.firstName);

    return (
        <div>
            <div>
                <h2>Child 2</h2>
            </div>
            This is a child of Child Container. This should render out the first name and last name.
            <div>First Name : {grabbedContext.firstName}</div>
            <div>Last Name : {grabbedContext.lastName}</div>
        </div>
    );
};

export default ChildContainerSub;
