/**
 * Merges overlapping intervals in an array of intervals.
 *
 * @param {Array<Array<number>>} intervals - The array of intervals to be merged. Each interval is represented by an array of two numbers.
 * @returns {Array<Array<number>>} - The merged intervals.
 */
export default function function3(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
}
