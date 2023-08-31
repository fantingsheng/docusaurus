import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import useTypewriter from 'react-typewriter-hook' // https://github.com/haowen737/react-typewriter-hook
import AnimateLinear from '@site/src/components/AnimateLinear';

const codeList = [`import React from 'react';
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
ReactDOM.render(<App />, mount);`,
`import React from 'react';

const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;`
]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const codeIndex = random(0, 2);
const codeStr = codeList[codeIndex]

function MagicWriter() {
  const typing = useTypewriter(codeStr)
  return typing
}

export default function HomepageCodeBlock() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--6 col--offset-3 margin-bottom--lg'>
          <AnimateLinear hasShadow={true}>
            <div className='text--center' style={{ width: '100%'}}>
              <h4 className='margin-bottom--md'>每段代码都有一个故事，分享你的故事</h4>
              <a className='button button--secondary ' href='/codestory'>投稿</a>
            </div>
          </AnimateLinear>
        </div>
        <div className='col col--8 col--offset-2'>
          {/* showLineNumbers 显示行号 metastring='{8}' */}
          <CodeBlock
            title='本代码段由 ChatGPT 生成'
            language="jsx"
          >
            { MagicWriter() }
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
