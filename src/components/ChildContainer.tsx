import * as React from 'react';

//Components:
import ChildContainerSub from './ChildContainerSub';

const ChildContainer = () => {
    return (
        <div>
            This is the direct child container to Input Parent Container
            <ChildContainerSub />
        </div>
    );
};

export default ChildContainer;
