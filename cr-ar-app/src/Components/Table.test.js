// test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Provides additional matchers for Jest

import Table from "./Table"; // Assuming Table is in a separate file named Table.js

describe("Table Component", () => {
  const list = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    // Add more data as needed for testing different scenarios
  ];

  const colNames = ["ID", "Name", "Age"];

  it("renders the component correctly", () => {
    render(<Table list={list} colNames={colNames} />);

    // Check if the table exists
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();

 

  });

});
