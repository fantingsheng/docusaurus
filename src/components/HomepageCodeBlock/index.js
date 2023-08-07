import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import useTypewriter from 'react-typewriter-hook' // https://github.com/haowen737/react-typewriter-hook
import AnimateLinear from '@site/src/components/AnimateLinear';

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
        <div className='col col--6 col--offset-3 margin-bottom--lg'>
          <AnimateLinear>
            <div className='text--center' style={{ width: '100%'}}>
              <h4 className='margin-bottom--md'>每段代码都有一个故事，分享你的故事</h4>
              <a className='button button--secondary ' href='/codestory'>投稿</a>
            </div>
          </AnimateLinear>
        </div>
        <div className='col col--8 col--offset-2'>
          <CodeBlock
            title=''
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
