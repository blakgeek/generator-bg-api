var APIError = require('rest-api-errors').APIError;

module.exports = function(app) {

    var env = app.get('env');

    app.use(function (err, req, resp, next) {

        if (resp.headersSent) {
            return next(err);
        }

        if (err instanceof APIError || err.status) {
            if(err.code || err.message) {
                return resp.status(err.status).send({
                    code: err.code,
                    message: err.message
                });
            } else {
                return resp.status(err.status).end();
            }
        }

        console.error(err);
        if(err && err.stack) {
            console.error(err.stack);
        }

        return resp.status(500).send({
            code: 'wtf'
        });
    });
};
