class apiResponse {
    constructor(statusCode, data, message = "Sucesss"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}