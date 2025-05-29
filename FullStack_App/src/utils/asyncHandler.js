const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req,res,next)).//Resolve huda requestHandler execute hanxa
        catch((err)=> next(err))//Reject bho bhani next error execute hanxa
        
    }
}


export {asyncHandler}

// const asyncHandler1 = (fn) => {} //Callback function
// const asyncHandler1 = (fn) =>() => {}//Passing function into the function 
// const asyncHandler1 = (fn) => async() => {}//Passing function into the async function 

//Wrapper function

// const asyncHandler1 = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         }
//     )
// }
// }