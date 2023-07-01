import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("Notes Component", () => {

    it.skip("should have a proper title", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Notes/Tabs'});
        fireEvent.click(videosMenu);
        const title = container.getElementsByClassName("music-sheets-heading")[0];
        expect(title.textContent).toBe("My latest Music Sheets")
    });

    it.skip("should display all the existing videos", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Notes/Tabs'});
        fireEvent.click(videosMenu);
        const cards = container.getElementsByClassName("item-card");
        expect(cards.length).toBe(2);
    });
});
