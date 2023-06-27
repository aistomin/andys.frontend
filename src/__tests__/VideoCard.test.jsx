import {renderAppWithStore} from "../__setup__/setupTests.jsx";
import {fireEvent} from "@testing-library/react";

describe("VideoCard Component", () => {

    it("should have all the necessary elements", () => {
        const {container, getByRole} = renderAppWithStore();
        const videosMenu = getByRole('link', {name: 'Videos'});
        fireEvent.click(videosMenu);
        const card = container.getElementsByClassName("item-card")[0];
        expect(card).toBeVisible();
        expect(card.getElementsByClassName("embed-responsive-item")[0].src)
            .toBe("https://www.youtube.com/embed/lcCEvMI_Q3o");
        expect(card.getElementsByClassName("card-title")[0].textContent)
            .toBe("Science of Survival with Neil deGrasse Tyson & Dr. Teimojin Tan – Cosmic Queries");
        expect(card.getElementsByClassName("card-text")[0].textContent)
            .toBe("P No. 1");
        expect(card.getElementsByClassName("card-link")[0].href)
            .toBe("http://localhost/videos/3");
    });
});
