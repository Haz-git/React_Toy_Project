import * as React from 'react';

//Components:
import ChildContainerSub from './ChildContainerSub';

const ChildContainer = () => {
    return (
        <div>
            <div>
                <h2>Child 1</h2>
            </div>
            This is the direct child container to Input Parent Container: I shouldn't hold the first
            name and last name!The input is passed through me, I don't have any props.
            <ChildContainerSub />
        </div>
    );
};

export default ChildContainer;
