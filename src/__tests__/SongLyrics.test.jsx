import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("SongLyrics Component", () => {

    it.skip("should be accessible from the home page", () => {
        const {container, getByRole} = renderAppWithStore();
        const notesMenu = getByRole('link', {name: 'Lyrics'});
        fireEvent.click(notesMenu);
        const card = container.getElementsByClassName("item-card")[1];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        expect(window.location.href).toBe("http://localhost/lyrics/101")
    });

    it.skip("should have all the necessary UI components", () => {
        const {container, getByRole} = renderAppWithStore();
        const notesMenu = getByRole('link', {name: 'Lyrics'});
        fireEvent.click(notesMenu);
        const card = container.getElementsByClassName("item-card")[1];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("page-content")[0];
        const embeddedPdf = content
            .getElementsByClassName("embed-responsive-item")[0];
        expect(embeddedPdf.src)
            .toBe("https://drive.google.com/file/d/1ZP_dcg9NPA5oACZWLBwH8SPzAckCjw4y/preview");
        const buttons = content.getElementsByClassName("download-lyrics-button")
        expect(buttons.length).toBe(1);
        expect(buttons[0].textContent).toContain("Download PDF");
    });
});
