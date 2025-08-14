import { css } from "@emotion/react";

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
`;

export const thStyle = css`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const tdStyle = css`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const paginationStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: fit-content;
`;

export const paginationCtaStyle = css`
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  border: 1px solid #ccc;

  &:disabled {
    background-color: #a8a8a8ff;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: #ddd;
  }
`

export const activeCtaStyle = css`
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;