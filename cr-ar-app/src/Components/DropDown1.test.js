// test.js
import React from "react";
import ReactDOM from "react-dom";
import DropDown1 from "./DropDown1"; // Assuming DropDown1 is in a separate file named DropDown1.js

// Function to mock axios.post for testing purposes
jest.mock("axios", () => ({
  post: jest.fn(() => Promise.resolve({ data: "Mocked response" })),
}));

// Function to mock the server responses for testing purposes
const mockServerResponses = () => {
  jest.spyOn(global, "fetch").mockImplementation((url) => {
    if (url === "http://localhost:3300/academicYear") {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { AcYr: "2018/2019" }
            
            // Add more data as needed for testing different scenarios
          ]),
      });
    } else if (url.includes("http://localhost:3300/semesters/")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { semester: "6" }
            // Add more data as needed for testing different scenarios
          ]),
      });
    } else if (url.includes("http://localhost:3300/departments/")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { DepName: "Department of Computer Engineering" }
            // Add more data as needed for testing different scenarios
          ]),
      });
    }
  });
};

// Function to clean up after each test
const cleanup = () => {
  global.fetch.mockRestore();
};

describe("DropDown1 Component", () => {
  beforeEach(() => {
    mockServerResponses();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DropDown1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add more test cases as needed to test different scenarios
});
