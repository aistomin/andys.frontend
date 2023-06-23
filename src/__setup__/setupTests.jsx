import '@testing-library/jest-dom'
import store from "../data/store.jsx";
import {render} from "@testing-library/react";
import {StoreProvider} from "easy-peasy";
import App from "../App.jsx";

window.scrollTo = jest.fn();

export const renderAppWithStore = () => {
    return render(
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    );
}
