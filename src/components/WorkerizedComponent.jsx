import React, { useEffect } from 'react';

export default function WorkerizedComponent() {
    useEffect(() => {
        const worker = new Worker(new URL('../workers/helloWorld.worker', import.meta.url));

        worker.addEventListener('message', (data) => {
            console.log(data);
        })
    }, []);

    return (
        <div>This is WORKERIZED component</div>
    )
}