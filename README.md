# eslint-plugin-jsx-conditionals

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
yarn add eslint-plugin-jsx-conditionals --dev
```

In your `.eslintrc` config:
```json
{
  "plugins": [ "jsx-conditionals" ],
  "rules": {
    "jsx-conditionals/ensure-booleans": "error"
  }
}
```


## Development

```bash
git clone git@github.com:julianburr/eslint-plugin-jsx-conditionals.git
cd eslint-plugin-jsx-conditionals
yarn

# Run tests
yarn test
```