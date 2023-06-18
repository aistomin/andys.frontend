import {render} from "@testing-library/react";
import App from "../App.jsx";

describe("Navbar Component", function () {

    it("should have correct logo", function () {
        const {container} = render(<App/>);
        const logo = container.getElementsByClassName("main-name")[0]
        expect(logo.textContent).toBe("Andy Grails");
    });

    it("should have correct navigation links", function () {
        const {getByRole} = render(<App/>);
        expect(getByRole('link', {name: 'Home'}))
            .toHaveAttribute('href', '/');
        expect(getByRole('link', {name: 'Videos'}))
            .toHaveAttribute('href', '/videos');
        expect(getByRole('link', {name: 'Notes/Tabs'}))
            .toHaveAttribute('href', '/notes');
        expect(getByRole('link', {name: 'Lyrics'}))
            .toHaveAttribute('href', '/lyrics');
        expect(getByRole('link', {name: 'About'}))
            .toHaveAttribute('href', '/about');
    });
});
