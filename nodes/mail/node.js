output = {
  mail: $.loopback.createDataSource({
    connector: $.create($.loopback.Mail),
    transports: $.get('transports')
  })
}
