// helpers method for success and failed response used in try catch block.

//success method
export const successResponse = async (res, message, success, data) => {
    return res.status(200).json({
      message: message,
      success: success,
      data: data,
    });
  };
  
//failed method
export const failedResponse = (res, message, success) => {
    return res.status(200).json({
      message: message,
      success: success,
    });
  };