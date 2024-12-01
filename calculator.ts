import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

class Calculator {
    private lastResult: number | null = null;

    add(a: number, b:number): number {
        this.lastResult = a+b;
        return this.lastResult;
    }

    subtract(a:number, b:number): number {
        this.lastResult = a-b;
        return this.lastResult;
    }

    multiply(a:number, b:number): number {
        this.lastResult = a*b;
        return this.lastResult;
    } 

    divide(a:number, b:number): number | string {
        if (b === 0) {
            return "ERROR! Division by 0 is not possible!"
        }
        else {
            this.lastResult = a/b;
            return this.lastResult;
        }
    }
}