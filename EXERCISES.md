# Exercises

Once the app is up and running (see [this page](https://github.com/bensoille/lambda-tu-exercise/blob/master/README.md) for setup instructions), the real work begins :)

# Checkout exercice branch

Issue following command and checkout this exercise source code :    
```bash
git checkout tu-add-exercise
```

## Missing unit test wanted !

Security robots have detected some malicious scan, trying to inject some specially crafted payload.
Our code base is not vulnerable, but some unit test should be added for long-term insurance.

### 1 - Build execution event
The payload that is potentially dangerous is *JSON* data, received in the *POST* request body :

```json
{
    "vector": "of attack",
    "should" : "be secured in the long-term"
}
```

Add some event variable in test script, containing dangerous payload

### 2 - Add your new unit test
Inspect existing tests in file and make your own one, with explicit output strings.    

Your test should check that :     
- function does not throw error in context
- function returns http code 200 in context
- returned message is "hello world" in context

### 3 - Try your unit test
Run tests so that they all pass, **then commit fix in the current branch**

