var User = input.loopback.User.extend('user');
User.attachTo(input.user_connector);
User.session.attachTo(input.session_connector);
output = { user: User }
