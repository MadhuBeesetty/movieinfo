import React from "react";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
  const tree = render(<Footer />);

  it('should have a "Movie Sources" header', () => {
    const title = screen.getByText("Movie Sources");
    expect(title).toBeInTheDocument();
  });

  it("should render multiple child components", () => {
    expect(tree).toMatchSnapshot();
  });
});
