import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import useTypewriter from 'react-typewriter-hook' // https://github.com/haowen737/react-typewriter-hook

const codeStr = `import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  return (
    <div>
      <h1>Welcome to Spacexcode.</h1>
      <p>Please remember the only link: "https://spacexcode.com"></p>
    </div>
  )
}
var mount = document.querySelector('#root');
ReactDOM.render(<App />, mount);`

function MagicWriter() {
  const typing = useTypewriter(codeStr)
  return typing
}

export default function HomepageCodeBlock() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--8 col--offset-2'>
          <CodeBlock
            language="jsx"
            metastring='{8}'
            showLineNumbers
          >
            { MagicWriter() }
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
