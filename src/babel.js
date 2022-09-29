// 简易编译器，编译 let a = 1;
const compiler = (input) => {
  const tokens = tokenizer(input);
  const ast = parser(tokens);
  const newAst = transformer(ast);
  const output = codeGenerator(newAst);
  console.log(output);
  return output;
};

const tokenizer = (input) => {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    let char = input[current];
    if (char === "=" || char === ";") {
      tokens.push({
        type: "Punctuator",
        value: char,
      });
      current++;
      continue;
    }

    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      if (value === "let") {
        tokens.push({ type: "Keyword", value });
      } else {
        tokens.push({ type: "Identifier", value });
      }

      continue;
    }

    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "Number", value });

      continue;
    }
  }
  console.log(tokens);
  return tokens;
};

const parser = (tokens) => {
  let current = 0;
  let ast = {
    type: "Program",
    body: [],
  };

  const walk = () => {
    let token = tokens[current];

    if (token.type === "Number") {
      current++;
      return {
        type: "Literal",
        value: token.value,
      };
    }

    if (token.type === "Identifier") {
      current++;
      return {
        type: "Identifier",
        name: token.value,
      };
    }

    if (token.type === "Keyword" && token.value === "let") {
      let node = {
        type: "VariableDeclaration",
        kind: token.value,
        declarations: [
          {
            type: "VariableDeclarator",
            id: {},
            init: {},
          },
        ],
      };

      current++;
      const node1 = walk();
      if (node1 && node1.type === "Identifier") {
        node.declarations[0].id = node1;
      }
      current++;
      const node2 = walk();
      if (node2 && node2.type === "Literal") {
        node.declarations[0].init = node2;
      }

      current++;
      return node;
    }

    if (token.type === "Punctuator") {
      current++;
    }
  };

  while (current < tokens.length) {
    ast.body.push(walk());
  }

  console.log(JSON.stringify(ast));
  return ast;
};

const transformer = (ast) => {
  return ast;
};

const codeGenerator = (node) => {
  switch (node.type) {
    case "Program":
      return node.body.map(codeGenerator).join("\n");

    case "VariableDeclaration":
      if (node.kind === "let") {
        let key = "var";
        return key + " " + node.declarations.map(codeGenerator);
      }

    case "VariableDeclarator":
      return codeGenerator(node.id) + " = " + codeGenerator(node.init) + ";";

    case "Identifier":
      return node.name;

    case "Literal":
      return node.value;
    default:
      throw new TypeError(node.type);
  }
};

module.exports = compiler;
