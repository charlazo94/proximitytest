class ProximityError extends Error {
    constructor(args){
        super(args);
        this.name = "ProximityError";
        Error.captureStackTrace(this, this.constructor);
    }
};

export default ProximityError;