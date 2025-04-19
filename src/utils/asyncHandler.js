const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => {
            console.error("Async Handler Error:", error);
            res.status(error.code || 500).json({
                error: "Internal Server Error",
                success: false,
                message: error.message || "Something went wrong",
            });
        });
    }
}
export {
    asyncHandler,
};


// const asyncHandler = (fn) => async (req, res, next) =>{

//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         console.error("Async Handler Error:", error);
//         res.status(error.code||500).json({
//             error: "Internal Server Error",
//         success: false,
//         message: error.message || "Something went wrong",
//         });
//     }
// }