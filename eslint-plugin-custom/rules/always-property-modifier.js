module.exports = {
  meta: {
    docs: {
      description: "always class property modifier",
      recommended: true,
    },
    fixable: null,
    messages: {
        missing: "class property {{ methodName }} always need access modifier",
    },
    schema: [],
    type: "problem",
  },
  create(context) {
    return {
      'MethodDefinition'(node) {
        // 过滤构造函数以及静态函数
        if (node.key.name === 'constructor' || node.static) {
          return;
        }
        // 无访问修饰符
        if (!node.accessibility) {
          context.report({
            // message: `${node.key.name} method must add access modifier`,
            messageId: 'missing',
            node: node,
            data: {
              methodName: node.key.name,
            }
          });
        }
      }
    }
  }
}