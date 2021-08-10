
// async handler to avoid try and catch

const asyncHandler = fn => (req,res,next)=>
                     Promise.resolve(fn(req,res,next)).
                     catch(next);

// module export
module.exports = asyncHandler;

