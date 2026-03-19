/**
 * Generates a surrogate key by hashing a list of columns.
 * @param {string[]} columns - The columns to hash.
 * @returns {string} - The SQL expression for the hashed unique identifier.
 */
function generate_surrogate_key(columns) {
  return `to_hex(md5(concat(${columns.join(", ',', ")}, '')))` ;
}

/**
 * Converts minutes into a rounded hour decimal.
 * @param {string} column_name - The column containing the minutes.
 * @returns {string} - The SQL expression for the conversion.
 */
function minutes_to_hours(column_name) {
  return `round(${column_name} / 60, 2)` ;
}

module.exports = {
  generate_surrogate_key,
  minutes_to_hours,
};
