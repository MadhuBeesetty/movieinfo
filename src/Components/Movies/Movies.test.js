import React from "react";
import Movies from "./Movies";
import { render } from "@testing-library/react";

describe("Movies component", () => {
  it(" should have multiple sub components in generated snapshot", () => {
    const tree = render(<Movies />);
    expect(tree).toMatchSnapshot();
  });
});
