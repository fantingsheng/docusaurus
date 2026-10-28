import React, { useEffect, useState } from 'react';

/**
 * react-lottie（内部依赖 lottie-web）在模块加载阶段就会访问 `document`，
 * 导致 Docusaurus 的 SSG 报 "document is not defined" 而构建失败。
 *
 * 这里改为只在浏览器端动态加载 react-lottie：
 * - 服务端渲染（SSG）时输出一个等尺寸占位元素，尺寸与动画一致，避免布局抖动；
 * - 客户端首次渲染同样为占位元素（保证 hydration 一致），挂载后再渲染 Lottie。
 */
export default function Lottie({ width = 300, height = 300, ...props }) {
  const [Player, setPlayer] = useState(null);

  useEffect(() => {
    let active = true;
    import('react-lottie').then((mod) => {
      if (active) {
        setPlayer(() => mod.default);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (!Player) {
    return <div style={{ width, height }} aria-hidden="true" />;
  }

  return <Player width={width} height={height} {...props} />;
}
