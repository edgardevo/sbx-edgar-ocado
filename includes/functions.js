/* Take an array of columns and returns them as a hashed unique itendifier */

function generate_surrogate_key(list_of_columns) {
  // 1. Wrap every column in COALESCE and CAST to string
  const casted_cols = list_of_columns.map(col => `COALESCE(CAST(${col} AS STRING), '')`);
  
  // 2. Join the array of columns together using the pipe delimiter
  const concat_cols = casted_cols.join(", '|', ");
  
  // 3. Wrap the whole thing in CONCAT and MD5
  return `MD5(CONCAT(${concat_cols}))`;
}

/* Converts a minutes column to a rounded hour decimal */
function minutes_to_hours(column_name) {
  return `ROUND(${column_name} / 60.0, 2)`;
}

module.exports = {
  generate_surrogate_key,
  minutes_to_hours
};