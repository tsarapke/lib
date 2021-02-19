import getHelloWorld from '../utils/getHelloWorld';

self.addEventListener('message', () => {
    self.postMessage(getHelloWorld());
})