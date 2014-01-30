var DataSource = loopback_datasource_juggler.DataSource;
output = {
  db: input.loopback.createDataSource({
    connector: loopback_connector_mongodb
  })
}
