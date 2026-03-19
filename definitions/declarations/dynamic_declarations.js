const austin_tables = [
    "bikeshare_stations"
    , "bikeshare_trips"
    , "daily_bikeshare_trips"
];

austin_tables.forEach(table_name => {
    declare({
        database: "sbx-edgar-ocado" // This is the project_id
        , schema: "staging" // This is the dataset
        , name: table_name // Table name from the array above
    });
});