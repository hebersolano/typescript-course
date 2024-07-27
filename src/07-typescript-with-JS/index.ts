// import { calculateTax } from "./tax.js";
import { calculateTax } from "./tax-declare";
import * as _ from "lodash";

//* INCLUDE JS CODE IN TS PROJECTS
// "allowJs": true
console.log(calculateTax(100));

//* TYPE CHECKING JS CODE
// "checkJs": true

//* DESCRIBING TYPES USING JSDocs
/**
 * JSDoc
 */

//* CREATING DECLARATION FILES
// file.d.ts
/**
 *  export declare function (parameter: type): type;
 */
// file.js

//* USING DEFINITELY TYPED DECLARATION FILES
// DefinitelyTyped package
// npm i --save-dev @types/package-name
// npm i -D @types/package-name
_.clone([1, 2, 3]);
