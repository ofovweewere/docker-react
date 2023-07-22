import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("it renders learn react link", () => {
  const div = document.createElement("div");
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
