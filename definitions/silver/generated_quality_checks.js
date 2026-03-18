const qualityMetrics = ["duration_minutes", "subscriber_type", "bike_type"];

qualityMetrics.forEach(metric => {
    publish(`stg_trips_quality_${metric}`, {
        type: "table",
        description: `Generated quality check for ${metric} in bikeshare_trips`,
        tags: ["medallion_silver", "quality_metrics", "daily"],
        dependencies: ["stg_trips"]
    }).query(ctx => `
        SELECT
            ${metric},
            COUNT(*) AS count_of_records,
            MIN(start_time) AS first_seen,
            MAX(start_time) AS last_seen
        FROM
            \${ctx.ref("stg_trips")}
        GROUP BY 1
    `);
});
