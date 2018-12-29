const rule = require('../rules/ensure-booleans');
const RuleTester = require('eslint/lib/testers/rule-tester.js');
const ruleTester = new RuleTester();

ruleTester.run('Ensure Booleans in JSX Conditionals', rule, {
  valid: [
    {
      code: `const Component = ({check}) => (<div>{!check && <p>Check</p>}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
    },
    {
      code: `const Component = ({check}) => (<div>{!!check && <p>Check</p>}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
    },
    {
      code: `const Component = ({check}) => (<div>{check === true && <p>Check</p>}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
    },
    {
      code: `const Component = ({check}) => (<div>{Boolean(check) && <p>Check</p>}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
    },
    {
      code: `const Component = ({check}) => (<div>{check ? <p>Check</p> : null}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } }
    }
  ],
  invalid: [
    {
      code: `const Component = ({check}) => (<div>{check && <p>Check</p>}</div>)`,
      parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } },
      errors: [
        {
          message: 'Logical expressions must be cast to booleans'
        }
      ]
    }
  ]
});
