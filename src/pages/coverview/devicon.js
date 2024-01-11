import { Tailwindcss, Otom, Reactjs } from '@site/docs/collection/icon/devicon';

export const devicons = [
  { label: 'React', value: 'react' },
  { label: 'Tailwindcss', value: 'tailwindcss'},
  { label: 'Otom', value: 'otom'}
];

export const selectDevicon = (icon) => {
  switch (icon) {
    case 'react':
      return <Reactjs />;
    case 'tailwindcss':
      return <Tailwindcss />;
    case 'otom':
      return <Otom />;
    default: 
      return <Reactjs />
  }
}
