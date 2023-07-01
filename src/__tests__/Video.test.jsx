import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("Video Component", () => {

    it.skip("should be accessible from the home page", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[1];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        expect(window.location.href).toBe("http://localhost/videos/4")
    });

    it.skip("should have all the UI components if fully configured", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[3];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("video-content")[0];
        const embeddedVideo = content
            .getElementsByClassName("embed-responsive-item")[0];
        expect(embeddedVideo.src)
            .toBe("https://www.youtube.com/embed/OcX7xpxOC2U");
        const buttons = content.getElementsByClassName("video-button")
        expect(buttons.length).toBe(3);
        expect(buttons[0].textContent).toContain("Go to YouTube");
        expect(buttons[1].textContent).toContain("Notes/Tabs");
        expect(buttons[2].textContent).toContain("Song Lyrics");
        const title = content.getElementsByClassName("video-title")[0];
        expect(title.textContent)
            .toBe("Black Hole Paradox with Neil deGrasse Tyson & Matt O’Dowd – Cosmic Queries");

        const description = content.getElementsByClassName("video-description")[0];
        expect(description.textContent)
            .toContain("Duis sit amet quam tempus, aliquet mauris sed, tincidunt est.");
        expect(description.textContent)
            .toContain("Aliquam vitae massa ligula.");
    });

    it.skip("should not have lyrics button if not configured", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[0];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("video-content")[0];
        const buttons = content.getElementsByClassName("video-button")
        expect(buttons.length).toBe(2);
        expect(buttons[0].textContent).toContain("Go to YouTube");
        expect(buttons[1].textContent).toContain("Notes/Tabs");
    });

    it.skip("should not have notes button if not configured", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[2];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("video-content")[0];
        const buttons = content.getElementsByClassName("video-button")
        expect(buttons.length).toBe(2);
        expect(buttons[0].textContent).toContain("Go to YouTube");
        expect(buttons[1].textContent).toContain("Lyrics");
    });

    it.skip("should have only YouTube button if neither lyrics nor notes are configured", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[1];
        const details = card.getElementsByClassName('card-link')[0]
        fireEvent.click(details);
        const content = container.getElementsByClassName("video-content")[0];
        const buttons = content.getElementsByClassName("video-button")
        expect(buttons.length).toBe(1);
    });
});
