import babel from "@babel/core";

// let const
let a = 1;
const b = 1;

// 解构
const [d, e] = [1, 2];
const { f, g } = { f: "f", g: "g" };

// 模板字符串
const str = `this is a : ${a}`;

// 字符串方法
str.includes("this");
str.replaceAll("this", "that");

// 数值的方法
Number.isFinite(25);
Number.isInteger(25.1);

// 箭头函数，参数默认值
const fun = (a, b, c = 1) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
fun();

// 箭头函数，rest参数
const fun2 = (a, ...b) => {
  console.log(a);
  console.log(b);
};
fun2();

// 数组方法
[1, 5, 10, 15].findIndex((item) => item === 5);
[1, 5, 10, 15].includes(5);

// 对象写法
const obj = {
  [a]: "a",
  b,
};

// 对象上的方法
Object.is("a", obj);

// 链式写法
const message = {};
const firstName = message?.body?.user?.firstName || "default";
const headerText = message.settings.headerText ?? "Hello, world!";

// Symbol
let s = Symbol("s");

// Set, Map
const set = new Set([1, 2, 3, 4, 4]);
const map = new Map();
map.set("a", a);

// Proxy, Reflect
const obj2 = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);

// Promise
const p = new Promise((resolve, reject) => {
  resolve("1");
});

p.then((res) => {
  console.log(res);
})
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("finally");
  });

// Iterator, for of
const arr = [1, 2, 3];
for (let v of arr) {
  console.log(v);
}

// async await
const fun3 = async () => {
  const pres = await p();
  return pres;
};

// class
class Test {
  b = 2;
  static c = 3;
  constructor() {
    this.a = 1;
  }

  [d]() {
    console.log(this.a);
    console.log(this.b);
  }

  log = () => {
    console.log(this.a);
    console.log(this.b);
  };
}

class Test2 extends Test {
  constructor() {
    super();
  }
}

// 编译JSX，@babel/plugin-syntax-jsx
const jsx = () => {
  return <div></div>
}
jsx()

// export
export default Test;
