output = {
  mail: input.loopback.createDataSource({
    connector: input.loopback.Mail,
    transports: input.transports
  })
}
