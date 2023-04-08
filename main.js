var colors = require('colors');




const PRINT = function PRINT(text) {
    console.log(text)
} 

const PRINT_ERR = function PRINT_ERR(text) {
    console.error(text)
}

const PRINT_WARN = function PRINT_WARN(text) {
    cosole.warn(text)
}

if (PRINT=="") {
    PRINT_ERR("Error encontrado, no hay ningun caracter")
}

if (PRINT_ERR=="") {
    PRINT_ERR("Error encontrado, no hay ningun caracter")
}

if (PRINT_WARN=="") {
    PRINT_ERR("Error encontrado, no hay ningun caracter")
}

///COLORS
const PRINT_GREEN = function PRINT_GREEN(text) {
    PRINT(text.green)
} 

const PRINT_RED = function PRINT_RED(text) {
    PRINT(text.red)
} 

const PRINT_YELLOW = function PRINT_YELLOW(text) {
    PRINT(text.yellow)
} 

const PRINT_BLUE = function PRINT_BLUE(text) {
    PRINT(text.blue)
} 

const PRINT_MAGENTA = function PRINT_MAGENTA(text) {
    PRINT(text.magenta)
} 

const PRINT_CYAN = function PRINT_CYAN(text) {
    PRINT(text.cyan)
} 

const PRINT_WHITE = function PRINT_WHITE(text) {
    PRINT(text.white)
} 

const PRINT_GRAY = function PRINT_WHITE(text) {
    PRINT(text.gray)
} 

const PRINT_GREY = function PRINT_WHITE(text) {
    PRINT(text.grey)
} 

// PRINT_GREEN("Hola Mundo")
// PRINT_RED("Hola Mundo")
// PRINT_YELLOW("Hola Mundo")
// PRINT_BLUE("Hola Mundo")
// PRINT_MAGENTA("Hola Mundo")
// PRINT_CYAN("Hola Mundo")
// PRINT_WHITE("Hola Mundo")
// PRINT_GRAY("Hola Mundo")
// PRINT_GREY("Hola Mundo")



// console.log("Hello World")
