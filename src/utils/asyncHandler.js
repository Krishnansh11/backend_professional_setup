const asyncHandler = (requestHandler) => {
    (req,res,next)=> {
        Promise.resolve(requestHandler(req,res,next)).catch( (err)=> next(err))
    }
};

export { asyncHandler };

// Purpose

// The asyncHandler function is a higher-order function designed to catch errors in asynchronous route handlers automatically and pass them to Express's error-handling middleware. This helps in maintaining cleaner and more readable code, as you don't need to write repetitive try-catch blocks for each route handler.








// const asyncHandler = (fn) => async (req, res, next) => {
//   // higher order function
//   try {
//     await fn(req,res,next)
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
