const austin_tables = [
    "bikeshare_stations"
    , "bikeshare_trips"
    , "daily_bikeshare_trips"
];

austin_tables.forEach(table_name => {
    declare({
        database: "sbx_edgar-ocado" // This is the project_id
        , schema: "austin_bikeshare" // This is the dataset
        , name: table_name // Table name from the array above
    });
});