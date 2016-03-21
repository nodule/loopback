output = {
  mail: $.loopback.createDataSource({
    connector: $.loopback.Mail,
    transports: $.transports
  })
}
