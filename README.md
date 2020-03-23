# babel-plugin-minify-object-property

Extract direct object property value

## Example

**in**

```js
if ({ isWeb: false, isWechat: !0 }.isWeb) {
  console.log(1);
}
```

**out**

```js
if (false) {
  console.log(1);
}
```

## Installation

```bash
npm install babel-plugin-minify-object-property --save-dev
```

## Suggestion

Used with `babel-plugin-minify-dead-code-elimination`
