import {renderAppWithStore} from "../__setup__/setupTests.jsx";

describe("Navbar Component", () => {

    it("should have correct logo", () => {
        const {container} = renderAppWithStore();
        const logo = container.getElementsByClassName("main-name")[0]
        expect(logo.textContent).toBe("Andy Grails");
    });

    it("should have correct navigation links", () => {
        const {getByRole} = renderAppWithStore();
        expect(getByRole('link', {name: 'Home'}))
            .toHaveAttribute('href', '/');
        expect(getByRole('link', {name: 'Videos'}))
            .toHaveAttribute('href', '/videos');
        expect(getByRole('link', {name: 'Notes/Tabs'}))
            .toHaveAttribute('href', '/notes');
        expect(getByRole('link', {name: 'Lyrics'}))
            .toHaveAttribute('href', '/lyrics');
        expect(getByRole('link', {name: 'Contact Me'}))
            .toHaveAttribute('href', '/contact');
    });
});
