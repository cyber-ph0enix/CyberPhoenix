class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = "Something went wrong.";
    }
}

module.exports = ExpressError;
