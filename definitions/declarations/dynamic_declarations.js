// 1. Define the configuration array with the actual table names in your environment
const austin_tables = [
  "bikeshare_stations",
  "bikeshare_trips",
  "daily_bikeshare_trips"
];

// 2. Iterate over the array to register the sources in the Dataform graph
austin_tables.forEach(table_name => {
  
  // 3. Use Dataform's built-in declare() function to map the exact locations
  declare({
    database: "sbx-edgar-ocado", // The specific GCP project ID
    schema: "staging",           // The specific dataset where the tables live
    name: table_name             // The dynamic table name from the loop
  });

});