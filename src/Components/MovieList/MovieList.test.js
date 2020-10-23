import React from "react";
import MovieList from "./MovieList";
import { render, screen } from "@testing-library/react";

describe("MovieList component", () => {
  const tree = render(<MovieList />);

  it('should have a "Avengers Movies" header', () => {
    const title = screen.getByText("Avengers Movies");
    expect(title).toBeInTheDocument();
  });

  it("should render multiple child components", () => {
    expect(tree).toMatchSnapshot();
  });
});
