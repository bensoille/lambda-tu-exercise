# Exercises

Once the app is up and running (see [this page](https://github.com/bensoille/lambda-tu-exercise/blob/master/README.md) for setup instructions), the real work begins :)

# Checkout exercice branch

Issue following command and checkout this exercise source code :    
```bash
git checkout tu_change_exercise
```

## Broken unit test detected !

Some developer has changed something in the app code, but he/she did not change correspondent unit tests. Failing test has been detected by robots and prevent from pushing to production.

### 1 - Find failing unit test
> Hint : issue command `npm test` when in correct folder. `package.json` file is needed in current folder !

### 2 - Find why it fails
Say that the developer has changed something because he/she was asked for :     
- his/her changes are compliant with new specs given by Product Owner
- these changes have been successfully tested

The failing unit test must be fixed, as truth is in the app code in this case

### 3 - Fix unit test
Fix test so that it passes, **then commit fix in the current branch**

### 4 - Check that everything passes now
Rerun tests and check that it's all green

