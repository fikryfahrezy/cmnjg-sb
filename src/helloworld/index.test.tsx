import { render } from "@testing-library/react";
import { Default } from "./index.stories";

it("Checks if hello world show", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const screen = render(<Default {...Default.args} />);

  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
