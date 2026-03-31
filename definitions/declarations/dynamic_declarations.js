const sources = [
    { name: "bikeshare_trips", schema: "staging" },
    { name: "bikeshare_stations", schema: "staging" }
];

sources.forEach((source) => {
    declare({
        database: "sbx-edgar-ocado", // Data is hosted in public datasets
        schema: source.schema,
        name: source.name,
    });
});