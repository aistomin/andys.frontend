import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("NotesSheet Component", () => {

    it("should be accessible from the home page", () => {
        const {container, getByRole} = renderAppWithStore();
        const notesMenu = getByRole('link', {name: 'Notes/Tabs'});
        fireEvent.click(notesMenu);
        const card = container.getElementsByClassName("item-card")[0];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        expect(window.location.href).toBe("http://localhost/notes/1")
    });

    it("should have all the necessary UI components", () => {
        const {container, getByRole} = renderAppWithStore();
        const notesMenu = getByRole('link', {name: 'Notes/Tabs'});
        fireEvent.click(notesMenu);
        const card = container.getElementsByClassName("item-card")[0];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("page-content")[0];
        const embeddedPdf = content
            .getElementsByClassName("embed-responsive-item")[0];
        expect(embeddedPdf.src)
            .toBe("https://drive.google.com/file/d/1VBFh6xiKjQap6tZB8Z2axJb5rKnr_DOi/preview");
        const buttons = content.getElementsByClassName("notes-sheet-button")
        expect(buttons.length).toBe(2);
        expect(buttons[0].textContent).toContain("Download PDF");
        expect(buttons[1].textContent).toContain("Download GuitarPro File");
    });
});
