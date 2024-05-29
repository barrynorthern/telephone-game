import aggregate from "./functions/aggregate";
import majority from "./functions/majority";
import merge_intervals from "./functions/merge_intervals";
import rotate_90_cw from "./functions/rotate_90_cw";

describe("main", () => {
  it("should aggregate data correctly", () => {
    const records = [
      { id: "a", value: 10 },
      { id: "b", value: 20 },
      { id: "a", value: 5 },
      { id: "c", value: 7 },
      { id: "b", value: 15 },
    ];

    const expectedOutput = { a: 15, b: 35, c: 7 };

    const result = aggregate(records);
    expect(result).toEqual(expectedOutput);
  });

  it("should find the majority element correctly", () => {
    const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
    const expectedOutput = 2;
    const result = majority(arr);
    expect(result).toEqual(expectedOutput);
  });

  it("should merge intervals correctly", () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const expectedOutput = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    const result = merge_intervals(intervals);
    expect(result).toEqual(expectedOutput);
  });

  it("should rotate the array correctly", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedOutput = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    const result = rotate_90_cw(matrix);
    expect(result).toEqual(expectedOutput);
  });
});
