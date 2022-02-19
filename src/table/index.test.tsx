import { render } from "@testing-library/react";
import { Example } from "./index.stories";

it("Checks if hello world show", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const screen = render(<Example {...Example.args} />);

  expect(screen.getByRole("table")).toBeInTheDocument();
});
