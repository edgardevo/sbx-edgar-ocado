const tables = ['bikeshare_trips', 'bikeshare_stations'];

tables.forEach(table_name => {
  declare({
    database: "sbx-edgar-ocado",
    schema: "staging",
    name: table_name
  });
});