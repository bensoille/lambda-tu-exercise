# Exercises

Once the app is up and running (see [this page](https://github.com/bensoille/lambda-tu-exercise/blob/master/README.md) for setup instructions), the real work begins :)

# Checkout exercice branch

Issue following command and checkout this exercise source code :    
```bash
git checkout tu-moveurl-exercise
```

## Move exposed function

A function must be moved away, we must change the URL at which it is accessed.
It's been decided that this function is no longer accessible at URL `/hello`, but instead it will be accessed at URL `/greet`.

### 1 - Change path
The path is defined in an UNIQUE location. Find where this information is configured in code and change path accordingly.
> Hint : path and http method are both declared in same *declarative* YAML file.

### 2 - Relaunch app
Application must be relaunched for changes to take effect and for new path to be exposed.

Hit `Ctrl+C` in console where lives your `sam local start-api` and stop services.    
Then restart with `sam local start-api` in same console.

### 3 - Try your change
App should be accessible at [this URL](http://127.0.0.1:3000/greet) now.

### 4 - Check that UTs are green
Rerun tests and check that it's all green

### 5 - Eventually fix failing tests
If needed

### 6 - Push your changes to current branch

