# react-prism-code

## Installation
```
npm i react-prism-code
```

## Usage

### Block code
```jsx
<Code lang="jsx">{`import { Code, InlineCode } from "react-prism-code";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/components/prism-jsx"; // 默认只有 markup, css, clike and javascript

function Hello() {
  return <h2>React typescript</h2>
}`}</Code>
```
output
```jsx
import { Code, InlineCode } from "react-prism-code";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/components/prism-jsx"; // 默认只有 markup, css, clike and javascript

function Hello() {
  return <h2>React typescript</h2>
}
```

[Online Demo](https://codesandbox.io/s/react-prism-code-jzr4mh)

[Supported languages](https://prismjs.com/#supported-languages)