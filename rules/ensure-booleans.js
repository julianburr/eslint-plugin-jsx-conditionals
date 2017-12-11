module.exports = {
  meta: {
    docs: {
      description:
        'Ensure variables in JSX conditionals are always cast to booleans, to avoid unwanted side effects with other falsey values like empty strings etc.',
      category: 'Possible Errors',
      recommended: true
    },
    schema: []
  },

  create (context) {
    return {
      JSXExpressionContainer: function (node) {
        if (node.expression.type === 'LogicalExpression') {
          const exp = node.expression;
          if (
            exp.operator === '&&' &&
            exp.left.type !== 'UnaryExpression' &&
            exp.left.type !== 'BinaryExpression' &&
            !(
              exp.left.type === 'CallExpression' &&
              exp.left.callee.name === 'Boolean'
            )
          ) {
            context.report(
              exp.left,
              'Logical expressions must be cast to booleans'
            );
          }
        }
      }
    };
  }
};
