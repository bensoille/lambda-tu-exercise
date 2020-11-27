# Lambda functions unit testing made easy

**First read this page and startup app, then see actual exercises on [this page](EXERCISES.md)**

This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.

- hello-world - Code for the application's Lambda function.
- events - Invocation events that you can use to invoke the function.
- hello-world/tests - Unit tests for the application code. 
- template.yaml - A template that defines the application's AWS resources.

If you prefer to use an integrated development environment (IDE) to build and test your application, you can use the AWS Toolkit.  
The AWS Toolkit is an open source plug-in for popular IDEs that uses the SAM CLI to build and deploy serverless applications on AWS. The AWS Toolkit also adds a simplified step-through debugging experience for Lambda function code. See the following links to get started.

* [PyCharm](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [IntelliJ](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html)
* [Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)

# How to :

## 1 - Get files and build modules

1. clone this repository : `git clone ...`
2. *cd* to project directory *npm* root : `cd lambda-tu-exercise/hello-world`
3. install *nodejs* stuff : `npm i`

## 2 - Pre build the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 10](https://nodejs.org/en/), including the NPM package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

To build your application **for the first time**, run the following in your shell when in this project root :

```bash
lambda-tu-exercise$ sam build
```

## 3 - Use the SAM CLI to build and test locally

Build your application with the `sam build` command if big changes occurred.

```bash
lambda-tu-exercise$ sam build
```

The SAM CLI installs dependencies defined in `hello-world/package.json`, creates a deployment package, and saves it in the `.aws-sam/build` folder.

The SAM CLI can emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
lambda-tu-exercise$ sam local start-api

Mounting HelloWorldFunction at http://127.0.0.1:3000/hello [GET]
You can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions, changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template
2020-11-27 17:11:15  * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
```

**Finally, point your favourite browser to http://127.0.0.1:3000/hello and see the app running.**


## Unit tests

Tests are defined in the `hello-world/tests` folder in this project. Use NPM to install the [Mocha test framework](https://mochajs.org/) and run unit tests.

```bash
lambda-tu-exercise$ cd hello-world
hello-world$ npm install
hello-world$ npm run test


> hello_world@1.0.0 test /home/ben/Bureau/easiware/lambda-tu-exercise/hello-world
> mocha tests/unit/

  Testing /hello
    ✓ must return 200 with response when ANY event given
    ✓ must return 404 with correct response when INVALID event given
    ✓ must return 404 with correct response when NO event given


  3 passing (9ms)

```

**This is another way to execute application, in controlled contexts**

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
aws cloudformation delete-stack --stack-name lambda-tu-exercise
```

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
