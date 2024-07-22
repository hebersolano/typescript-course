[TypeScript Course]('https://members.codewithmosh.com/')

`tsc` typescript compiler

# stconfig.json

- "strict": true /_ Enable all strict type-checking options. _/,

- "target": "ES2018" /_ Set the JavaScript language version for emitted JavaScript and include compatible library declarations. _/,
- "rootDir": "./src", /_ Specify the root folder within your source files. _/
- "outDir": "./dist", /_ Specify an output folder for all emitted files. _/
- "removeComments": true, /_ Disable emitting comments. _/
- "sourceMap": true, /_ Create source map files for emitted JavaScript files. _/ Source maps are files that represent the mapping between TypeScript and JavaScript code. They’re used for debugging.
- "noImplicitAny": true, /_ Enable error reporting for expressions and declarations with an implied 'any' type. _/
- /for functions/
- "noUnusedParameters": true, /_ Raise an error when a function parameter isn't read. _/
- "noImplicitReturns": true, /_ Enable error reporting for codepaths that do not explicitly return in a function. _/
- "noUnusedLocals": true, /_ Enable error reporting when local variables aren't read. _/
- "strictNullChecks": true, /_ When type checking, take into account 'null' and 'undefined'. _/
- "allowUnreachableCode": true, /_ Disable error reporting for unreachable code. _/
- "noImplicitOverride": true, /_ Ensure overriding members in derived classes are marked with an override modifier. _/

# Fundamentals

## Types

- number
- string
- boolean
- null
- undefined
- object
- any
- unknown
- never
- enum
- tuple

## Priciples

- Open Closed Principle: classes should be open for extension and closed for modification
