import React from "react";
import MovieBox from "./MovieBox";
import { render, screen } from "@testing-library/react";

describe("MovieBox component", () => {
  const MovieBoxProps = {
    movie: {
      title: "Avengers: Endgame",
      summary:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      imdbUrl: "https://www.imdb.com/title/tt4154796/",
      fullCastUrl: "https://www.imdb.com/title/tt4154796/fullcredits#cast",
      casts: [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
        "Chris Hemsworth",
        "Scarlett Johansson",
        "Jeremy Renner",
      ],
    },
  };

  const tree = () => render(<MovieBox {...MovieBoxProps} />);

  beforeEach(() => {
    jest.clearAllMocks();
    tree();
  });

  it("should have a movie name", () => {
    const title = screen.getByText(MovieBoxProps.movie.title);
    expect(title).toBeInTheDocument();
  });

  it("should have a movie summary", () => {
    const summary = screen.getByText(MovieBoxProps.movie.summary);
    expect(summary).toBeInTheDocument();
  });

  it("should have a IMDB button", () => {
    let IMDBButton = screen.getByRole("button", {
      name: "IMDB",
    });
    expect(IMDBButton).toBeInTheDocument();
  });
});
