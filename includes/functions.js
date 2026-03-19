// Function 1: Generate a hashed surrogate key
function generate_surrogate_key(list_of_columns) {
  // We join the array of column names with commas, wrap them in CONCAT, and hash them.
  // Using MD5 and casting to string is a standard BigQuery approach.
  return `MD5(CONCAT(${list_of_columns.join(', ')}))`;
}

// Function 2: Convert minutes to a rounded hour decimal
function minutes_to_hours(column_name) {
  // Divide by 60.0 to ensure BigQuery does float division, then round to 2 decimals.
  return `ROUND(${column_name} / 60.0, 2)`;
}

// Required so that the .sqlx files can see the fucntions
module.exports = {
  generate_surrogate_key,
  minutes_to_hours
};