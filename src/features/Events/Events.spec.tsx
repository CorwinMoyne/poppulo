import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import fetchMock from "jest-fetch-mock";
import React from "react";
import { render, screen, waitFor, within } from "../../testUtils";
import Events from "./Events";

beforeEach(() => {
  fetchMock.mockResponse((req) => {
    if (req.url.includes("www.vizgr.org")) {
      return Promise.resolve({
        body: [
          "<result><count>439</count><event><date>-73</date><description>Traditional date that Lud became King of Britain, according to Geoffrey of Monmouth.</description><lang>en</lang><granularity>year</granularity></event></result>",
        ],
      });
    }
  });
});

test("should show places select", async () => {
  const user: UserEvent = userEvent.setup();

  render(<Events />);

  await user.click(screen.getByLabelText("Filter"));

  const listbox = within(screen.getByRole("listbox"));

  await user.click(listbox.getByText(/By place/i));

  await waitFor(() => {
    expect(screen.getByLabelText("Place")).toBeInTheDocument();
  });
});

test("should show topics select", async () => {
  const user: UserEvent = userEvent.setup();

  render(<Events />);

  await user.click(screen.getByLabelText("Filter"));

  const listbox = within(screen.getByRole("listbox"));

  await user.click(listbox.getByText(/By topic/i));

  await waitFor(() => {
    expect(screen.getByLabelText("Topic")).toBeInTheDocument();
  });
});

test("should render events", async () => {
  const user: UserEvent = userEvent.setup();

  render(<Events />);

  await user.click(screen.getByText("Search"));

  await waitFor(() => {
    expect(screen.getByTestId("event-0")).toHaveTextContent(
      /Traditional date that Lud became King of Britain, according to Geoffrey of Monmouth/i
    );
  });
});
