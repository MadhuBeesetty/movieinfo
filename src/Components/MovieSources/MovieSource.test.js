import React from "react";
import MovieSource from "./MovieSources";
import { render, screen } from "@testing-library/react";

describe("MovieSource component", () => {
  const MovieSourceProps = {
    name: "IMDb",
    summary:
      "IMDb is an online database of information related to films, television programs, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews.",
    websiteUrl: "https://www.imdb.com",
    wikiUrl: "https://en.wikipedia.org/wiki/IMDb",
  };

  const tree = () => render(<MovieSource {...MovieSourceProps} />);

  beforeEach(() => {
    jest.clearAllMocks();
    tree();
  });

  it('should have a "IMDB" as a source name', () => {
    const title = screen.getByText(MovieSourceProps.name);
    expect(title).toBeInTheDocument();
  });

  it("should have a movie summary", () => {
    const summary = screen.getByText(MovieSourceProps.summary);
    expect(summary).toBeInTheDocument();
  });

  it("should have a WEBSITE button", () => {
    let websiteButton = screen.getByRole("button", {
      name: "WEBSITE",
    });
    expect(websiteButton).toBeInTheDocument();
  });

  it("should have a WIKI button", () => {
    let websiteButton = screen.getByRole("button", {
      name: "WIKI",
    });
    expect(websiteButton).toBeInTheDocument();
  });
});
