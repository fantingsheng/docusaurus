import React, { useEffect, useState, useRef } from 'react'

export default function (props) {
  const cardRef = useRef();

  const [style, setStyle] = useState({});

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  const [transitionTimer, setTransitionTimer] = useState();
  const [updateCall, setUpdateCall] = useState();

  const [settings, setSettings] = useState({
    reverse: false,
    max: 35,
    perspective: 1000,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    scale: '1.1',
    speed: '1000',
    transition: true,
    axis: null,
    reset: true
  });

  const reverse = settings.reverse ? -1 : 1;

  const getValues = (e) => {
    const x = (e.nativeEvent.clientX - left) / width
    const y = (e.nativeEvent.clientY - top) / height
    const _x = Math.min(Math.max(x, 0), 1)
    const _y = Math.min(Math.max(y, 0), 1)
    const tiltX = (reverse * (settings.max / 2 - _x * settings.max)).toFixed(2)
    const tiltY = (reverse * (_y * settings.max - settings.max / 2)).toFixed(2)
    const percentageX = _x * 100
    const percentageY = _y * 100

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY
    }
  }

  const updateElementPosition = () => {
    const element = cardRef.current;
    const rect = element.getBoundingClientRect()

    setWidth(element.offsetWidth)
    setHeight(element.offsetHeight)
    setLeft(rect.left)
    setTop(rect.top)
  }

  const setTransition = () => {
    clearTimeout(transitionTimer)

    setStyle(style => ({
      ...style,
      transition: `${settings.speed}ms ${settings.easing}`,
    }));
    
    setTransitionTimer(
      setTimeout(() => {
        setStyle(style => ({
          ...style,
          transition: '',
        }));
      }, settings.speed)
    )
  }

  const reset = () => {
    window.requestAnimationFrame(() => {
      setStyle(style => ({
        ...style,
        transform: `perspective(${settings.perspective}px) ` + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'scale3d(1, 1, 1)',
      }));
    })
  }

  const update = (e) => {
    const values = getValues(e)

    setStyle(style => ({
      ...style,
      transform: `perspective(${settings.perspective}px) `
        + `rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) `
        + `rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) `
        + `scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`
    }))

    setUpdateCall(null)
  }

  const onMouseEnter = (cb = () => {}, e) => {
    updateElementPosition();

    setStyle(style => ({
      ...style,
      willChange: 'transform',
    }));

    setTransition();

    return cb(e);
  }

  const onMouseMove = (cb = () => {}, e) => {
    e.persist()

    if (updateCall !== null) {
      window.cancelAnimationFrame(updateCall)
    }

    setUpdateCall(window.requestAnimationFrame(() => update(e)))
    return cb(e);
  }

  const onMouseLeave = (cb = () => {}, e) => {
    setTransition();

    if (settings.reset) {
      reset();
    }

    return cb(e);
  }

  useEffect(() => {
    setSettings(Object.assign({}, settings, props.options))
    
    setTimeout(() => {
      if (cardRef.current.parentElement.querySelector(':hover') === cardRef.current) {
        onMouseEnter()
      }
    }, 0);

    return () => {
      clearTimeout(transitionTimer)
      cancelAnimationFrame(updateCall)
    }
  }, [])

  const mergedStyle = {
    ...props.style,
    ...style,
  };

  return (
    <div style={mergedStyle}
      ref={cardRef}
      className={props.className}
      onMouseEnter={e => onMouseEnter(props.onMouseEnter, e)}
      onMouseMove={e => onMouseMove(props.onMouseMove, e)}
      onMouseLeave={e => onMouseLeave(props.onMouseLeave, e)}
    >
      {props.children}
    </div>
  )
}