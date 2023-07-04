import {render} from "@testing-library/react";
import Home from "../components/home/Home.jsx";

describe("Home Component", () => {

    it("should have epigraph", function () {
        const {container} = render(<Home/>);
        const epigraph = container.getElementsByClassName("blockquote")[0];
        expect(epigraph.textContent)
            .toMatchInlineSnapshot(`""Every bad situation is a blues song waiting to happen."Amy Winehouse"`);
    });

    it("should have greeting", () => {
        const {container} = render(<Home/>);
        const greeting = container.getElementsByClassName("home-greeting")[0];
        expect(greeting.textContent)
            .toContain("Hey, Blues and Rock fans!");
    });

    it("should have introduction", () => {
        const {container} = render(<Home/>);
        const introduction = container.getElementsByClassName("home-about-body")[0];
        expect(introduction.textContent)
            .toContain("Andy here.");
        expect(introduction.textContent)
            .toContain("Stay tuned and take care!!! Peace ✌.");
    });

    it("should have photo", () => {
        const {container} = render(<Home/>);
        const photo = container.getElementsByClassName("home-photo")[0];
        expect(photo).toBeVisible();
    });

    it("should have links to social media", () => {
        const {container} = render(<Home/>);
        const social = container.getElementsByClassName("home-about-social")[0];
        expect(social.textContent).toContain("FIND ME ON");
        expect(
            container.getElementsByClassName("home-social-icons").length
        ).toBe(4);
    });
});
