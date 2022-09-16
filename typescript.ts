// https://www.typescriptlang.org/play?#code/Q
// 基本数据类型
let isTrue: boolean = false
let num: number = 1
let str: string = 'this is string'
let n: null = null
let un: undefined = undefined
let anyVal: any = 'this is string'
anyVal = 2
let unusable: void = undefined

// 联合类型
let union: string | number;
union = 'this is string' // 不报错
union = 7 // 不报错

// 类型别名：type
type numberOrString = number | string;
let test: numberOrString
test = 1;

// 类型推论
let str2 = 'this is string'
// str2 = 1 // 报错

// 类型断言
// function getLength(something: string | number) {
//     if (something.length) {  // 报错
//         return something.length; // 报错
//     }
// }
function getLength2(something: string | number) {
    if ((<string>something).length) {  // 报错
        return (<string>something).length; // 报错
    }
}

// 引用类型，对象，数组，函数
// 接口定义对象
interface Person {
    name: string;
    age?: number;
    [propName: string]: any
}
let p1: Person = {
    name: 'tom',
    age: 23
}
// type定义对象
type Person2 = {
    name: string;
    age?: number;
    [propName: string]: any
}
let p2: Person2 = {
    name: 'tom',
    age: 23
}

// 一般type指类型别名，主要用来定义联合类型和元祖，其他的对象，函数的声明用interface

// 定义数组
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
// 使用接口定义数组
interface NumberArray {
    [index: number]: number // 数组下标是number， 值也是number
}
let arr3: NumberArray = [1, 2, 3]

// 定义函数
// 函数声明写法，末尾返回值类型number不用写，因为根据typescript类型推断，会自动判断出来
function sum(x: number, y: number): number {
    return x + y
}
// 函数表达式写法
let mySum = function (x: number, y: number): number {
    return x + y
}
// 箭头函数写法
let myAdd = (x: number, y: number): number => { 
    return x + y; 
}

// 接口定义函数
interface myFun {
    (a: boolean, b: boolean): boolean
}
const myfun: myFun = (a, b) => {
    return a && b
}

// 元祖：用来存不同类型的对象
let tuple: [string, number];
// tuple = [7]; // 报错
// tuple = ['str']; // 报错
// tuple = [7, 'str']; // 报错
tuple = ['str', 7];

// 枚举 枚举会被编译为一个双向映射的对象（name -> value）和（value -> name）
enum myConfigEnum {
    Auditing = 1,
    Approved = 2,
    Rejected = 3
}
console.log(myConfigEnum.Auditing);
console.log(myConfigEnum[1]);
// const 枚举
const enum copyConfigEnum {
    Auditing = 1,
    Approved = 2,
    Rejected = 3
}
console.log(copyConfigEnum.Auditing);
// console.log(copyConfigEnum[1]); // 报错

// 类
class MyClass {
    y = 5
    // 不用写constructor
    // constructor() {
    //     this.z = 6
    // }

    static a = 1;
    static fn1 = () => {
        console.log(1);
    }

    public fn2() {
        console.log(2, 'public method');
        this.fn3()
    }
    private fn3 = () => {
        console.log(3, 'private method');
    }
    protected fn4() {
        console.log(4, 'protected method');
    }
}

class Cat extends MyClass {
    constructor() {
        super()
    }
    fn5() {
        this.fn4()
    }
}

const cc = new Cat()
// 静态方法被继承
Cat.fn1()
// 实例public方法
cc.fn2()
// 实例的protected方法
cc.fn5()

// 接口定义类
interface MyInterfaceForClass {
    a: string;
    b: string;
    c: string;
    fn(d: string): void
}
class NewClass implements MyInterfaceForClass {
    a = 'a';
    b = 'b';
    c = 'c';
    d = 'd';
    fn = (d) => {
        console.log(d);
    }
}

// 接口继承
interface Alarm {
    alert()
}
interface LightableAlarm extends Alarm {
    lightOn()
    lightOff()
}

// 泛型
// 泛型函数
function logFn<T>(arg: T): T {
    return arg;
}
function swapFn<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
// 泛型接口
interface GenericFn {
    <T>(arg: T): T
}
const fn: GenericFn = (arg) => {
    return arg
}
fn(1)
fn('1')

// 测试
fn({} as Array<undefined>);

// 测试
export const getPathData = <T>(obj: T, path: string): T | void => {
    if (!obj || !path) return;
    let result = JSON.parse(JSON.stringify(obj));
    return result;
};

