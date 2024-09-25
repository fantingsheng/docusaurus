import React from 'react';
import { useRef, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import AnimateLinear from '@site/src/components/AnimateLinear';
import useTypeWriter from '@site/src/hooks/useTypeWriter';
import { useForm, ValidationError } from '@formspree/react';
import confetti from 'canvas-confetti';
import styles from "./styles.module.css";
import { TextField, InputAdornment } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
  const formRef = useRef();

  // function MagicWriter() {
  //   const typing = useTypeWriter(codeStr, null, typeEnd)
  //   return typing
  // }

  const [state, handleSubmit] = useForm('xeqybgnr');

  if (state.errors) {
    toast.error('请输入邮箱地址', {position: 'bottom-center'});
  }
  if (state.succeeded) {
    toast.success('提交成功', {position: 'bottom-center'});
    formRef.current.reset();
    typeEnd();
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
        y: (formRef.current.getBoundingClientRect().top + formRef.current.offsetHeight) / window.innerHeight
      }
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--6 col--offset-3 margin-bottom--lg'>
          <Toaster />
          <AnimateLinear hasShadow={true} pad={10} bw={8}>
            <div className='text--center' style={{ width: '100%'}}>
              <form ref={formRef} onSubmit={handleSubmit}>
                <h4 className={styles.subTitle}>让我们用代码让这个世界更美好</h4>
                <p className={styles.subText}>订阅关注我们，您将收到最新最潮的前端资讯和开发经验分享</p>
                <div className={styles.formItem}>
                  <TextField
                    type="email"
                    name='email'
                    placeholder='user@spacexcode.com'
                    size='small'
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <button type="submit" className='button button--secondary' disabled={state.submitting}>订阅</button>
                </div>
              </form>
            </div>
          </AnimateLinear>
        </div>
        {/* <div className='col col--8 col--offset-2 margin-bottom--md'>
          <div ref={blockRef}>
            <CodeBlock
              title='🤖 本代码段由 ChatGPT 生成 '
              language="jsx"
            >
              { MagicWriter() }
            </CodeBlock>
          </div>
        </div> */}
      </div>
    </div>
  );
}
