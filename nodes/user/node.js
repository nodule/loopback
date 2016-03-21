var User = $.loopback.User.extend('user');
User.attachTo($.user_connector);
User.session.attachTo(input.session_connector);
output = {
  user: $.create(User)
}
