import "@testing-library/jest-native/extend-expect";
import { render, fireEvent } from "@testing-library/react-native";
import SearchBar from "../SearchBar";

test("SearchBar should render", () => {
  const updateTopic = jest.fn() as (topic: string) => void;
  const { toJSON } = render(<SearchBar updateTopic={updateTopic} />);
  expect(toJSON()).toMatchSnapshot();
});

test("SearchBar should call uptadeTopic properly", () => {
  const updateTopic = jest.fn() as (topic: string) => void;
  const { getByPlaceholderText } = render(
    <SearchBar updateTopic={updateTopic} />
  );
  const input = getByPlaceholderText("Search for news");

  expect(updateTopic).toHaveBeenCalledTimes(0);
  fireEvent(input, "submitEditing");
  expect(updateTopic).toHaveBeenCalledTimes(1);
  expect(updateTopic).toHaveBeenCalledWith("");

  fireEvent.changeText(input, "some topic");
  fireEvent(input, "submitEditing");
  expect(updateTopic).toHaveBeenCalledTimes(2);
  expect(updateTopic).toHaveBeenCalledWith("some topic");
});
