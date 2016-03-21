var DataSource = loopback_datasource_juggler.DataSource;
output = {
  db: $.create($.loopback.createDataSource({connector: loopback_connector_mongodb}))
}
