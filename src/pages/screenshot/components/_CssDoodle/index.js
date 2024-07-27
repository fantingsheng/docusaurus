import React, { useEffect, forwardRef } from 'react';
import { useConfigContext } from '../../_configProvider';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const CssDoodle = forwardRef(({ rule }, ref) => {
  const { config } = useConfigContext();

  useEffect(() => {
    config.bgLayer && ref.current && ref.current.update(config.bgLayer);
  }, [config.bgLayer]);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import('css-doodle');
    }
  }, []);

  return (
    <css-doodle ref={ref}>
      <style>
        {rule}
      </style>
    </css-doodle>
  );
});

export default CssDoodle;
