import { Tailwindcss, Otom, Npm, Jenkins, Coffeescript, Ionic, Babel, Sdeno, Flutter, Figma, Electron, Reactjs, Azure, Stylus,
  Javascript, Nodejs, Bootstrap, Git, Vscode, Typescript, Sass, Nuxtjs, Html5, Vue, Docker, Chrome, Graphql, Gulp, Jquery, Redis,
  Sourcetree, Webpack, Github, Gitlab, Less, Css3, Angularjs, Dart, Redux, Svelte } from '@site/docs/collection/icon/devicon';

export const devicons = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Typescript', value: 'typescript' },
  { label: 'Nodejs', value: 'nodejs' },
  { label: 'Npm', value: 'npm' },
  { label: 'Html5', value: 'html5' },
  { label: 'Css3', value: 'css3' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Redux', value: 'redux' },
  { label: 'Angularjs', value: 'angularjs' },
  { label: 'Electron', value: 'electron' },
  { label: 'Dart', value: 'dart' },
  { label: 'Flutter', value: 'flutter' },
  { label: 'Nuxtjs', value: 'nuxtjs' },
  { label: 'Git', value: 'git' },
  { label: 'Webpack', value: 'webpack' },
  { label: 'Vscode', value: 'vscode' },
  { label: 'Otom', value: 'otom'},
  { label: 'Chrome', value: 'chrome' },
  { label: 'Github', value: 'github' },
  { label: 'Gitlab', value: 'gitlab' },
  { label: 'Docker', value: 'docker' },
  { label: 'Sourcetree', value: 'sourcetree' },
  { label: 'Figma', value: 'figma' }
];

export const selectDevicon = (icon) => {
  switch (icon) {
    case 'react':
      return <Reactjs />;
    case 'otom':
      return <Otom />;
    case 'npm':
      return <Npm />;
    case 'javascript':
      return <Javascript />;
    case 'typescript':
      return <Typescript />;
    case 'nodejs':
      return <Nodejs />;
    case 'vscode':
      return <Vscode />;
    case 'git':
      return <Git />;
    case 'html5':
      return <Html5 />;
    case 'css3':
      return <Css3 />;
    case 'vue':
      return <Vue />;
    case 'redux':
      return <Redux />;
    case 'nuxtjs':
      return <Nuxtjs />;
    case 'angularjs':
      return <Angularjs />;
    case 'electron':
      return <Electron />;
    case 'flutter':
      return <Flutter />;
    case 'webpack':
      return <Webpack />;
    case 'dart':
      return <Dart />;
    case 'chrome':
      return <Chrome />;
    case 'github':
      return <Github />;
    case 'gitlab':
      return <Gitlab />;
    case 'svelte':
      return <Svelte />;
    case 'docker':
      return <Docker />;
    case 'sourcetree':
      return <Sourcetree />;
    case 'figma':
      return <Figma />;
    default: 
      return <Reactjs />;
  }
}

export default function Index () {
  return (
    <></>
  )
};
