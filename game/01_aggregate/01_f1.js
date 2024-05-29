/**
 * Aggregates the records by summing up the values for each unique ID.
 *
 * @param {Array<{id: string, value: number}>} records - The array of records to be aggregated. Each record should have an 'id' property of type string and a 'value' property of type number.
 * @returns {Object<string, number>} - The aggregated result object where each key represents a unique ID and its value is the sum of the corresponding records' values.
 */
export default function function1(records) {
  let result = {};

  for (let record of records) {
    if (result.hasOwnProperty(record.id)) {
      result[record.id] += record.value;
    } else {
      result[record.id] = record.value;
    }
  }

  return result;
}
