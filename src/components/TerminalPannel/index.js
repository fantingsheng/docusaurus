import Link from '@docusaurus/Link';
import styles from './style.module.scss';

const TerminalLine = ({ children, blinking = false }) => (
 <div>
  <span className={styles.rightArrow} aria-hidden="true">
   →{"  "}
  </span>
  <span className={styles.userName} aria-hidden="true">
   ~/{'timfan'}{" "}
  </span>
  {blinking ? (
   <span className={styles.blinkCursor} aria-hidden="true">
    ${" "}
   </span>
  ) : (
   <span className={styles.dolar}>$</span>
  )}{" "}
  <span style={{ fontStyle: 'italic' }}>{children}</span>
 </div>
);

const TerminalResponse = ({ children }) => <div style={{ lineHeight: '1.5rem' }}>{children}</div>;

export default function Terminal({}) {
 return (
  <div className={styles.card}>
   <div className={styles.toolBar}>
    <div className={styles.dot} style={{ backgroundColor: '#fb5f57' }} />
    <div className={styles.dot} style={{ backgroundColor: '#fdbf2d' }} />
    <div className={styles.dot} style={{ backgroundColor: '#27cb3f' }} />
    <div className={styles.title} aria-hidden="true">
     Console
    </div>
   </div>
   <div className={styles.main}>
    <TerminalLine>
      list github --user=
      <Link href={`https://github.com/${'fantingsheng'}`} target="_blank" aria-label={`See ${'fantingsheng'} github`}>
      <>"{'fantingsheng'}"</>
      </Link>
    </TerminalLine>
    <TerminalResponse>
      <div>
      <span aria-hidden="true"> + </span>
      <span className={styles.fontBold}>{27} Open Source </span>repositories on Github (total size: 782.0 Mb)
      </div>
      <div>
      <span aria-hidden="true"> + </span>
      <span className={styles.fontBold}>20.34K Contributions</span> since 2023 in last year)
      </div>
    </TerminalResponse>
    
    <TerminalLine>contact --discord</TerminalLine>
    <TerminalResponse>
      + <span className={styles.fontBold}>User:</span>{" "}
      <Link href={`https://spacexcode.com/author}`} target="_blank">
      {'Timfan'}
      </Link>
      <br />+ <span className={styles.fontBold}>Link:</span>{" "}
      <Link href="https://spacexcode.com/author" target="_blank">
      { 'https://spacexcode.com/author' }
      </Link>
    </TerminalResponse>
    <TerminalLine blinking={true} />
   </div>
  </div>
 );
}