const sources_tables = [
    "bikeshare_trips",
    "bikeshare_stations",
    "daily_bikeshare_trips"
];

sources_tables.forEach((table_name) => {
    declare({
        database: "sbx-edgar-ocado", // Data is hosted in public datasets
        schema: "staging",
        name: table_name
    });
});