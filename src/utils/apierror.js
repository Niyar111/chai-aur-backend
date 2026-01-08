class Apierror extends Error {
    constructor(message, statusCode) {
        super(message); // Call the parent class constructor    
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default Apierror;