// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    let response ;
    try {

        // Do not return 200 on error : jump to catch block directly
        if(!!!event) throw new Error("Event is empty !!") ;
        if(!!!event.httpMethod) throw new Error("No verb given !!") ;

        // event was given, return 200 with actual received event for display in page
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                'message': 'hello world',
                'event': event
            })
        }
    } catch (err) {
        //console.log(err);
        response = {
            'statusCode': 404,
            'body': JSON.stringify({
                'message': err.message
            })
        }        
    }

    return response
};
