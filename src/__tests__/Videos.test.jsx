import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("Videos Component", () => {

    it("should have a proper title", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const title = container.getElementsByClassName("videos-heading")[0];
        expect(title.textContent).toBe("My latest Videos")
    });

    it("should display all the existing videos", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const cards = container.getElementsByClassName("item-card");
        expect(cards.length).toBe(4);
    });
});