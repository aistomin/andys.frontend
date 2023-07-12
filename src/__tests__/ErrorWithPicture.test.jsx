import {render} from "@testing-library/react";
import ErrorWithPicture from "../components/errors/ErrorWithPicture.jsx";
import comingSoon from "../assets/coming_soon.svg"

describe("Error With Picture Component", () => {

    it("should have correct logo", () => {
        const msg = "Some error description"
        const {container} = render(<ErrorWithPicture img={comingSoon} alt={msg}/>);
        const img = container.getElementsByClassName("img-fluid")[0];
        expect(img).toHaveAttribute('alt', msg);
    });
});
