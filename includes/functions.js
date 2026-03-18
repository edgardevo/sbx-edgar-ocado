/**
 * Centralized documentation for common columns across the Austin Bikeshare project.
 */
const common_columns = {
    trip_id: "The unique identifier for each bike trip",
    subscriber_type: "The type of membership held by the rider (e.g., Member, Walk Up)",
    start_time: "The precise timestamp when the trip began",
    end_time: "The precise timestamp when the trip concluded",
    duration_minutes: "Total trip length in minutes",
    station_id: "Unique numeric identifier for the bike station",
    station_name: "The public-facing name of the station",
    station_status: "The current operational state of the station (Active/Closed)",
    estimated_revenue: "Calculated revenue impact in USD based on duration and member type"
};

/**
 * Generate a surrogate key by hashing the concatenation of multiple columns.
 */
function generate_surrogate_key(list_of_columns) {
    const castColumns = list_of_columns.map(col => `IFNULL(CAST(${col} AS STRING), 'NULL')`).join(', ');
    return `FARM_FINGERPRINT(CONCAT(${castColumns}))`;
}

/**
 * Convert minutes to rounded hours decimal.
 */
function minutes_to_hours(column_name) {
    return `ROUND(SAFE_DIVIDE(${column_name}, 60), 2)`;
}

module.exports = {
    common_columns,
    generate_surrogate_key,
    minutes_to_hours
};
