# Exercises

Once the app is up and running (see [this page](https://github.com/bensoille/lambda-tu-exercise/blob/master/README.md) for setup instructions), the real work begins :)

# Checkout exercice branch

Issue following command and checkout this exercise source code :    
```bash
git checkout tu-appaddition-exercise
```

## A micro service must be modified
The micro service accessible at path `/hello` is no more useful : we can see in usage graphes that this URL is not called anymore, users use some other service.    
Marketing team decided that the "*hello world*" string should be changed to "*Huge bargains here !!*" and attract users' interest again.

### 1 - Change function output
Change return and output the string "*Huge bargains here !!*" in place of old one. 

### 2 - Relaunch app
Relaunch `sam local start-api`.    
Then tryout your code at http://127.0.0.1:3000/hello

### 3 - Change unit tests
Change unit tests according to your changes

### 4 - Check that UTs are green
Rerun tests and check that it's all green

### 5 - Push your changes to current branch

