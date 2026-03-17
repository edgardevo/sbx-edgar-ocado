const tablesToDeclare = [
    "sbx-edgar-ocado.staging.bikeshare_trips",
    "sbx-edgar-ocado.staging.bikeshare_trips_daily_counts",
    "sbx-edgar-ocado.staging.daily_bikeshare_trips"
];

tablesToDeclare.forEach(fullTableId => {
    const parts = fullTableId.split(".");
    
    if (parts.length === 3) {
        const [database, schema, name] = parts;
        declare({
            database,
            schema,
            name
        });
    } else {
        throw new Error(`Invalid table ID format: "${fullTableId}". Expected format: "project_id.dataset_name.table_name"`);
    }
});
