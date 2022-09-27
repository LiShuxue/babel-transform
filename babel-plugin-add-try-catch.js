const addTryCatchPlugin = (babel) => {
  const { types } = babel;

	return {
    name: 'add-try-catch',
    visitor: {
      FunctionDeclaration(path) {
        const node = path.node;
        const { id, params, body: blockStatement } = node;

        // 已经有 try catch 什么也不做
        if (blockStatement.body && types.isTryStatement(blockStatement.body[0])) {
            return
        }

        /**
         *  构造 try catch 语句分三步：
         *  1. 构造catch块里面的函数调用
         *  2. 构造catch语句
         *  3. 构造try 语句
         * */ 
        
        // 构造函数调用表达式：types.callExpression(callee, arguments);
        const callee = types.identifier('report');
        const args = types.identifier('error');
        const callExpression = types.callExpression(callee, [args]);
        const expressionStatement = types.expressionStatement(callExpression);

        // 构造 catch 语句 types.catchClause(param, body)
        const param = types.identifier('error');
        const catchBlockStatement = types.blockStatement([expressionStatement]);
        const handler = types.catchClause(param, catchBlockStatement)

        // 构造 try 语句 types.tryStatement(block, handler, finalizer);
        const tryStatement = types.tryStatement(blockStatement, handler);

        // 重新构造该函数声明
        const body = types.blockStatement([tryStatement]);
        const tryCatchFunctionDeclare = types.FunctionDeclaration(id, params, body);

        path.replaceWith(tryCatchFunctionDeclare);
      }
    }
  }
}

module.exports =  addTryCatchPlugin;