<<<<<<< HEAD
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)
    
=======
//Este modulo exportable, que se replica como una fincion y se alimenta de un req, rest y next

module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)
    
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
