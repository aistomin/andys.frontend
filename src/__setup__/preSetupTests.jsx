import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util';

console.log("preSetupTests.jsx is called.");

Object.assign(global, { TextDecoder, TextEncoder });

console.log("preSetupTests.jsx is finished.");