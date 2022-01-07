import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import CNPagination from "../";

describe("component - CNPagination", () => {
  afterEach(() => {
    cleanup();
  });

  it("should not render on non props provided", () => {
    render(<CNPagination />);

    const component = screen.queryAllByTestId("cn-pagination");
    expect(component).toHaveLength(0);
  });

  it("should render correctly", () => {
    const props = {
      data: { pages: 2 },
      handleChange: jest.fn(),
    };

    render(<CNPagination {...props} />);

    const component = screen.getByTestId("cn-pagination");
    expect(component).toBeDefined();
  });

  it("should onChange fn be called", () => {
    const props = {
      data: { pages: 2 },
      handleChange: jest.fn(),
    };

    render(<CNPagination {...props} />);

    fireEvent.click(screen.getByText(/1/));
    expect(props.handleChange).toHaveBeenCalled();
  });
});
