const tablesToDeclare = [
    "sbx-edgar-ocado.staging.bikeshare_trips",
    "sbx-edgar-ocado.staging.bikeshare_stations"
];

tablesToDeclare.forEach(fullTableId => {
    const parts = fullTableId.split(".");

    if (parts.length === 3) {
        const [database, schema, name] = parts;
        declare({
            database,
            schema,
            name,
        });
    } else {
        throw new Error(`Invalid table ID format: "${fullTableId}". Expected format: "project_id.dataset_name.table_name"`);
    }
});
