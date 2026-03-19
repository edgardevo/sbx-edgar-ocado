/**
 * Generates a hashed unique identifier (surrogate key) from a list of columns.
 * @param {Array<string>} list_of_columns - Array of column names to hash.
 * @returns {string} - A BigQuery SQL expression for the hashed key.
 */
function generate_surrogate_key(list_of_columns) {
  // We cast all columns to strings, concatenate them, and use MD5 to hash them.
  // TO_HEX ensures the output is a readable alphanumeric string.
  return `TO_HEX(MD5(CONCAT(CAST(${list_of_columns.join(" AS STRING), CAST(")} AS STRING))))`;
}

/**
 * Converts minutes to a rounded hour decimal.
 * @param {string} column_name - The name of the column containing minutes.
 * @returns {string} - A BigQuery SQL expression for rounded hours.
 */
function minutes_to_hours(column_name) {
  // Divides the minute column by 60 to get hours, and rounds to 2 decimal places.
  // Using SAFE_DIVIDE prevents division by zero errors in BigQuery.
  return `ROUND(SAFE_DIVIDE(${column_name}, 60), 2)`;
}

// Exporting the functions so they can be used in .sqlx models
module.exports = {
  generate_surrogate_key,
  minutes_to_hours
};