# eslint-plugin-ensure-boolean-in-jsx-conditional

Ensuring variables used in JSX conditionals are cast to booleans whenever using `&&` to avoid unwanted side effects, e.g. for other falsey values like empty strings etc.

```jsx
// BAD
const Component = ({ check }) => (
  <div>
    {check && <p>Check passes!</p>}
  </div>
);

// GOOD
const Component = ({ check }) => (
  <div>
    {!!check && <p>Check passes!</p>}
    {Boolean(check) && <p>Check passes!</p>}
    {check ? <p>Check passes!</p> : null}
  </div>
);
```

## Usage

```bash
yarn add eslint-plugin-ensure-boolean-in-jsx-conditional --dev
```

In your `.eslintrc` config:
```json
{
  "plugins": [
    "ensure-boolean-in-jsx-conditional"
  ]
}
```


## Development

```bash
git clone git@github.com:julianburr/eslint-plugin-ensure-boolean-in-jsx-conditional.git
cd eslint-plugin-ensure-boolean-in-jsx-conditional
yarn

# Run tests
yarn test
```