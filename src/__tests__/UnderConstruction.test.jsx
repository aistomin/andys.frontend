import {render} from "@testing-library/react";
import UnderConstruction from "../components/errors/UnderConstruction.jsx";

describe("Under Construction Component", function () {

    it("should have correct logo", function () {
        const {container} = render(<UnderConstruction/>);
        const img = container.getElementsByClassName("img-fluid")[0];
        expect(img).toHaveAttribute('alt', 'Under Construction');
    });
});
