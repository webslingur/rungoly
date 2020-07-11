# Rungoly

Rungoly is meant to create beautiful strings to make the message standout. It returns a string which can be logged or used anywhere in the application.

  - Options
    - design
        - char: Character to print
        - count: number of char per line
        - lines: number of lines to print
    - message
        - space: Line space above and below the message
        - text: Message text

# Usage
```sh
> const rungoly = require("rungoly");
> const message = "This is test message";
> const options = {
>     design: {
>         char: "=",
>         count: 100,
>         lines: 3
>     },
>     message: {
>         space: 1,
>         text: message
>     }
> }
> console.log(rungoly.printChar(options));
> rungoly.log(options)); // This suggestion came from https://twitter.com/cunfusia
```

### Todos

 - Support colors for logs
 - Add more cool patterns
 - Add it on Github
 - Minify js files
 - CI/CD
 - JS docs
 - Testing

License
----

MIT


**Free Software, Hell Yeah!**