import {render} from "@testing-library/react";
import App from "../App.jsx";

describe("Footer Component", function () {

    it("should have correct credits", function () {
        const {container} = render(<App/>);
        const credits = container.getElementsByClassName('footer-credits');
        expect(credits[0].textContent)
            .toMatchInlineSnapshot(`"Designed by Soumyajit Behera, developed by Andrej Istomin"`);
    });

    it("should have correct copyright", function () {
        const {container} = render(<App/>);
        const credits = container.getElementsByClassName('footer-copyright');
        expect(credits[0].textContent)
            .toMatchInlineSnapshot(
                `"Copyright © ${new Date().getFullYear()} Andy Grails"`
            );
    });

    it("should have correct social media links", function () {
        const {container} = render(<App/>);
        const icons = container.getElementsByClassName('social-icons-footer');
        expect(icons[0].firstChild)
            .toHaveAttribute(
                'href',
                'https://www.youtube.com/channel/UCPY0lKHgJuK5XQjVHXGBBSA'
            );
        expect(icons[1].firstChild)
            .toHaveAttribute(
                'href',
                'https://www.instagram.com/andy.grails'
            );
        expect(icons[2].firstChild)
            .toHaveAttribute(
                'href',
                'https://www.facebook.com/profile.php?id=100074082643728'
            );
        expect(icons[3].firstChild)
            .toHaveAttribute(
                'href',
                'https://twitter.com/AndyGrails'
            );
        expect(icons.length).toBe(4);
    });
});
