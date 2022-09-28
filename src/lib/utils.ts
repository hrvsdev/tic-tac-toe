import queryString from "query-string";

export const winLogic = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getQueryId = () => window.location.hash.substring(1)

// export const getQueryId = () => queryString.parse(window.location.search).g as string;