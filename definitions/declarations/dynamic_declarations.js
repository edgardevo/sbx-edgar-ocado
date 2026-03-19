const sources = [
  { name: "trips", schema: "austin_bikeshare" },
  { name: "stations", schema: "austin_bikeshare" }
];

sources.forEach((source) => {
  declare({
    database: "bigquery-public-data",
    schema: source.schema,
    name: source.name,
  });
});
