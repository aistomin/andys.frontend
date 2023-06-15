import App from "../App.jsx";
import {render} from "@testing-library/react";

describe("App Component", function () {
    it("should have correct startup message", function () {
        let { getByText } = render(<App />);
        expect(getByText("Vite + React")).toMatchInlineSnapshot(`
      <h1>
        Vite + React
      </h1>
    `);
    });
});
