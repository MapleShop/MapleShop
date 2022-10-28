//Este modulo exportable, que se replica como una fincion y se alimenta de un req, rest y next

module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)
    