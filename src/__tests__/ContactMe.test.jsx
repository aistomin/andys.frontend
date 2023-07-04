import {fireEvent} from "@testing-library/react";
import {renderAppWithStore} from "../__setup__/setupTests.jsx";

describe("Contact Me Component", () => {

    it("should have a proper title", () => {
        const {container, getByRole} = renderAppWithStore();
        const contactMenu = getByRole('link', {name: 'Contact Me'});
        fireEvent.click(contactMenu);
        const title = container.getElementsByClassName("page-heading")[0];
        expect(title.textContent).toBe("Contact Me")
    });

    it("should have a proper submit form", () => {
        const {
            container,
            getAllByRole,
            getByRole
        } = renderAppWithStore();
        const contactMenu = getByRole('link', {name: 'Contact Me'});
        fireEvent.click(contactMenu);
        const inputs = getAllByRole('textbox');
        expect(inputs.length).toBe(2);
        const email = inputs[0];
        expect(email.name).toBe("email");
        const message = inputs[1];
        expect(message.name).toBe("message");
        const submitButton = container
            .getElementsByClassName("submit-contact-request")[0];
        expect(submitButton.textContent).toContain("Send the Request");
    });
});
