import React from "react";
import { render, screen } from "@testing-library/react";
import AdvisorTable from "./AdvisorTable";

describe("AdvisorTable", () => {
  const data = [
    { id: 1, name: "John Doe", age: 30, occupation: "Engineer" },
    { id: 2, name: "Jane Smith", age: 25, occupation: "Designer" },
    { id: 3, name: "Bob Johnson", age: 35, occupation: "Developer" },
  ];

  const columnNames = ["id", "name", "age", "occupation"];

  test("renders table with data and column names", () => {
    render(<AdvisorTable list={data} colNames={columnNames} />);

    // Check if table headers are rendered
    columnNames.forEach((colName) => {
      const headerElement = screen.getByText(colName.toUpperCase());
      expect(headerElement).toBeInTheDocument();
    });

    // Check if data is rendered
    data.forEach((item) => {
      const nameElement = screen.getByText(item.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
