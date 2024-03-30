import React from 'react';
import { useRef } from 'react';
import CodeBlock from '@theme/CodeBlock';
import AnimateLinear from '@site/src/components/AnimateLinear';
import useTypeWriter from '@site/src/hooks/useTypeWriter';
import confetti from 'canvas-confetti';

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

export default MyComponentWithLogger;`,
`function Bookmark({ slug }) {
  return (
    <button
      formAction={async () => {
        "use server";
        await sql \`INSERT INTO Bookmarks (slug) VALUES (\${slug});\`;
      }}
    >
      <BookmarkIcon />
    </button>
  );
}`
]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const codeIndex = random(0, codeList.length);
const codeStr = codeList[codeIndex]



export default function HomepageCodeBlock() {
  const blockRef = useRef();

  function MagicWriter() {
    const typing = useTypeWriter(codeStr, null, typeEnd)
    return typing
  }
  
  function typeEnd () {
    confetti({
      // shapes: [pineapple], // 粒子形状、类型
      // colors: ['#303948'] // 粒子颜色
      particleCount: 180, // 默认值：50，要发射的五彩纸屑的数量。
      startVelocity: 30, // 默认值：45，五彩纸屑开始移动的速度，以像素为单位
      angle: 90, // 发射的角度，0 表示水平向右；90 表示垂直向上；180 表示水平向左；270 表示垂直向下
      spread: 150, //默认值：45，五彩纸屑在垂直方向扩散的角度，45 表示五彩纸屑以垂直方向正负 22.5 度角发射
      ticks: 300, // 默认值: 200 ，值越小粒子消失得越快，值越大粒子消失得越慢
      gravity: 0.5, // 默认值：1，粒子下落的速度。1 是全重力，0.5 是半重力，0 表示无重力；大于 1 表示加速下落，负值表示粒子会向上升起。
      origin: {
        x: 0.5,
        y: (blockRef.current.getBoundingClientRect().top + blockRef.current.offsetHeight) / window.innerHeight
      }
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--6 col--offset-3 margin-bottom--lg'>
          <AnimateLinear hasShadow={true} bw={8}>
            <div className='text--center' style={{ width: '100%'}}>
              <h4 className='margin-bottom--md'>每段代码都有一个故事，分享你的故事</h4>
              <a className='button button--secondary ' href='/codestory'>投稿</a>
            </div>
          </AnimateLinear>
        </div>
        <div className='col col--8 col--offset-2 margin-bottom--md'>
          <div ref={blockRef}>
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
    </div>
  );
}
