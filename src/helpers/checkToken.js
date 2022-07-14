const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        console.log(bearer)
        req.token = token;
        return next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403);
    }
}

module.exports = {
    checkToken
}