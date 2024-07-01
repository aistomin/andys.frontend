import {renderAppWithStore} from "../__setup__/setupTests.jsx";

describe("Footer Component", () => {

    it("should have correct credits", () => {
        const {container} = renderAppWithStore();
        const credits = container.getElementsByClassName('footer-credits');
        expect(credits[0].textContent)
            .toMatchInlineSnapshot(`"Developed by me with a little help from my friends"`);
    });

    it("should have correct copyright", () => {
        const {container} = renderAppWithStore();
        const credits = container.getElementsByClassName('footer-copyright');
        expect(credits[0].textContent)
            .toMatchInlineSnapshot(
                `"Copyright © ${new Date().getFullYear()} Andy Grails"`
            );
    });

    it("should have correct social media links", () => {
        const {container} = renderAppWithStore();
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
        expect(icons.length).toBe(3);
    });
});
