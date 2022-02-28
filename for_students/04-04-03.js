/**
 * CS559 Spring 2021 Example Solution
 * Written by CS559 course staff
 */

/**
 * 04-04-03.js - a simple JavaScript file that gets loaded with
 * page 4 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as utilities from "./04-04-utilities.js";

/**
 * TwoDots - a function for the student to write
 * Notice that it gets the two points and the context as arguments
 * This function should apply a transformation
 *
 * This should perform some transformation - you can decide how it works
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    // Begin Example Solution
    /** @type {number} */ const dx = x2 - x1;
    /** @type {number} */ const dy = y2 - y1;
    // Using matrix multiplication (not recommended)
    /** @type {number} */ const scale = Math.sqrt(dx * dx + dy * dy) / 10.0 / Math.SQRT2;  // CS559 Example Code
    /** @type {number} */ const angle = Math.atan2(dy, dx) - Math.PI / 4;  // CS559 Example Code
    /** @type {number} */ let a = scale * Math.cos(angle);
    /** @type {number} */ let b = scale * Math.sin(angle);
    /** @type {number} */ let c = -scale * Math.sin(angle);
    /** @type {number} */ let d = scale * Math.cos(angle);
    /** @type {number} */ let e = x1;
    /** @type {number} */ let f = y1;
    // Without using matrix multiplication
    a = (dx - dy) / 2 / 10.0;
    b = (dy + dx) / 2 / 10.0;
    c = (dx + dy) / 2 / 10.0;
    d = (dy - dx) / 2 / 10.0;
    e = x1;
    f = y1;
    // End Example Solution
    // please leave this line - you should CHANGE the 6 lines above
    context.transform(a, b, c, d, e, f);
}

// start the program running
utilities.setup("canvas1", twoDots);

