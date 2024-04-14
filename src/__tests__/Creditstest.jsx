import {fireEvent, render} from "@testing-library/react";
import {renderAppWithStore} from "../__setup__/setupTests.jsx";

describe("Credits Component", () => {

    it("should have all the paragraphs", () => {
        const {container} = renderAppWithStore();
        const creditsLink = container.querySelector("#creditsLink")
        fireEvent.click(creditsLink);
        expect(container.textContent)
            .toContain("Although I am the only one contributor");
        expect(container.textContent).toContain("Dave Gray");
        expect(container.textContent).toContain("Soumyajit Behera");
        expect(container.textContent).toContain("Under Construction");
        expect(container.textContent).toContain("Page Not Found");
        expect(container.textContent).toContain("Coming Soon");
        expect(container.textContent).toContain("I may forget to mention someone");
        expect(container.textContent).toContain("I may forget to mention someone");
    });

    it("should have photo", () => {
        const {container} = renderAppWithStore();
        const creditsLink = container.querySelector("#creditsLink")
        fireEvent.click(creditsLink);
        const photo = container.querySelector("#creditsPhoto")
        expect(photo).toBeVisible();
    });
});
