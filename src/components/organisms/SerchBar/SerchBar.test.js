import { render, screen, fireEvent } from "test-utils";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import { SearchBar } from "./SerchBar";

const server = setupServer(...handlers);

describe("Search Bar", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Render the component", () => {
    render(<SearchBar />);
    screen.getByText("Teacher");
    screen.getByPlaceholderText("Search");
  });

  it("Displays users when search phrase is matching", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "ad" } });
    await screen.findByText(/Adam Romański/);
  });
});
