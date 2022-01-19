import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import NewsList from "../NewsList";
import { data } from "./mockes";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

test("NewsList should render data properly", () => {
  const setNewsDays = jest.fn() as () => void;
  const { toJSON } = render(
    <NewsList data={data} setNewsDays={setNewsDays} isLoading={false} />
  );
  expect(toJSON()).toMatchSnapshot();
});

test("NewsList should display loading Icon properly", () => {
  const setNewsDays = jest.fn() as () => void;
  const { queryByTestId, rerender, debug } = render(
    <NewsList data={data} setNewsDays={setNewsDays} isLoading={false} />
  );
  expect(queryByTestId("loadingIcon")).toBe(null);
  rerender(<NewsList data={[]} setNewsDays={setNewsDays} isLoading={true} />);
  expect(queryByTestId("loadingIcon")).toBeDefined();
});
