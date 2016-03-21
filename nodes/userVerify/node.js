$.options.type = 'email'
$.options.to = $.user.email
$.user.verify($.options, $.next)
