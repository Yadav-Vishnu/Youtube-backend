class ApiError extends Error {
  constructor(
   StatusCode,
   message = "Something went wrong",
   errors = [],
   stacks = ""
  ) {
    super(message);
    this.code = code;
    this.status = StatusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;


    if(stacks) {
      this.stack = stacks;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
  } 
  
}

export{ApiError}