## Folder Structure

This project' structure look like this:

```
curex/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    components/
      AddCurrency/
        index.js
        index.test.js
        style.css
      BaseCurrency/
        index.js
        index.test.js
      ListCurrency/
        index.js
        index.test.js
        style.css
    containers/
      Homepage/
        index.js
        index.test.js
    redux/
      Action/
        action_convertion.js
        action_convertion.test.js
        action_currency.js
        action_currency.test.js
      Reducer/
        index.js
        reducer_convertion.js
        reducer_currency.js
      Store/
        index.js
    helper/
      index.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
  .dockerignore
  .gitignore
  Dockerfile
  package.lock.json
  package.json
  README.md
```

## Docker
### Docker Port Configuration
The Dockerfile supplied will expose the app to the port 3000
