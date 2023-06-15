class ErrorHandler {
    ErrorHandler(err, req, res, next) {
        if (err.status === 500 || err.status === 400) {
            return res.status(400).send("Error 400");
        } else if (err.status === 401) {
            return res.status(401).send("Error 401");
        } else if (err.status === 402) {
            return res.status(402).send("Error 402");
        } else {
            return res.status(404).send("Error 404");
        }
    }
}

export default new ErrorHandler;