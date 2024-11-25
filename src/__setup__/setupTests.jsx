import '@testing-library/jest-dom'
import store from "../data/store.jsx";
import {render} from "@testing-library/react";
import {StoreProvider} from "easy-peasy";
import App from "../App.jsx";

console.log("setupTests.jsx is called.");

window.scrollTo = jest.fn();

export const renderAppWithStore = () => {
    return render(
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    );
}

console.log("setupTests.jsx is finished.");