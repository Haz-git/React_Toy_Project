import * as React from 'react';
import { Suspense, lazy } from 'react';

//Dynamic import:

const LazyComponent = lazy(() => import('./LazyComponent'));

const LazyMain = () => {
    return (
        <div>
            <div>
                The component below is lazy loaded. To see the fallback 'LOADING...' in action, go
                to chrome dev console and set '3g slow' network throttling.
            </div>
            <Suspense fallback={<div>LOADING...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default LazyMain;
