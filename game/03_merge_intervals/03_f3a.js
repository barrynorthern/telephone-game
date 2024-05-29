function function3(intervals) {
  if (intervals.length === 0) {
    return [];
  }

  // Sort the intervals based on their start times
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize the merged array with the first interval
  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastMerged = merged[merged.length - 1];
    let current = intervals[i];

    // If the start of the current interval is less than or equal to the end of the last merged interval
    if (current[0] <= lastMerged[1]) {
      // Update the end of the last merged interval to be the maximum of the current end and the end of the last merged interval
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // If there's no overlap, add the current interval to the merged array
      merged.push(current);
    }
  }

  return merged;
}
