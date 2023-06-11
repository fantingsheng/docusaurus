import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageCodeBlock() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--8 col--offset-2'>
          <CodeBlock
            language="jsx"
            live
            showLineNumbers>
            {`
function Welcome() {
  return (
    <div>
      <p>Welcome to SPACEXCODE! </p>
      <p>You can study front-end knowledges from here with me.</p>
    </div>
  );
}
            `}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
