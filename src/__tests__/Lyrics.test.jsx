import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("Lyrics Component", () => {

    it.skip("should have a proper title", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Lyrics'});
        fireEvent.click(videosMenu);
        const title = container.getElementsByClassName("lyrics-heading")[0];
        expect(title.textContent).toBe("My latest Lyrics")
    });

    it.skip("should display all the existing videos", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Lyrics'});
        fireEvent.click(videosMenu);
        const cards = container.getElementsByClassName("item-card");
        expect(cards.length).toBe(2);
    });
});
