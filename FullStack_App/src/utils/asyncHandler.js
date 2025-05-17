const asyncHandler = () =>{

}


export {asyncHandler}

// const asyncHandler1 = (fn) => {} //Callback function
// const asyncHandler1 = (fn) =>() => {}//Passing function into the function 
// const asyncHandler1 = (fn) => async() => {}//Passing function into the async function 

const asyncHandler1 = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        }
        )
    }
}