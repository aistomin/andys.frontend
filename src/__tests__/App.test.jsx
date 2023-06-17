import App from "../App.jsx";
import {render} from "@testing-library/react";

window.scrollTo = jest.fn();

describe("App Component", function () {
    it("should have correct startup message", function () {
        let { getByText } = render(<App />);
        expect(getByText("TBD")).toMatchInlineSnapshot(`
      <h1>
        TBD
      </h1>
    `);
    });
});
