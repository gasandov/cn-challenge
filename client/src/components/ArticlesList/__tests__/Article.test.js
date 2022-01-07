import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Article from "../Article";

describe("component - Article", () => {
  afterEach(() => {
    cleanup();
  });

  it("should not render when no props are provided", () => {
    render(<Article />);

    const component = screen.queryAllByTestId("cn-article-card");
    expect(component).toHaveLength(0);
  });

  it("should render correctly", () => {
    const props = {
      data: {
        title: "This is a title",
        description: "This is a description",
        url: "someUrl",
        urlToImage: "someUrlToImage",
      },
    };

    render(<Article {...props} />);

    const component = screen.getByTestId("cn-article-card");
    expect(component).toBeDefined();
  });
});
