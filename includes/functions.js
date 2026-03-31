function generate_surrogate_key(list_of_columns) {
    return `farn_hash(concat(${list_of_columns.join(", ")}))`; // Standardized hashing [cite: 10]
}

function minutes_to_hours(column_name) {
    return `round(cast(${column_name} as numeric) / 60, 2)`; // Converts mins to decimal hours [cite: 11]
}

module.exports = { generate_surrogate_key, minutes_to_hours };