import React, { useEffect, useState, useRef } from 'react'

export default function (props) {
  const cardRef = useRef();

  const [state, setState] = useState({
    style: {}
  })

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  const [transitionTimer, setTransitionTimer] = useState();
  const [updateCall, setUpdateCall] = useState();

  const [reverse, setReverse] = useState();

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

  useEffect(() => {
    setSettings(Object.assign({}, settings, props.options))

    const element = cardRef.current;
    setTimeout(() => {
      if (element.parentElement.querySelector(':hover') === element) {
        onMouseEnter()
      }
    }, 0)
    return () => {
      clearTimeout(transitionTimer)
      window.cancelAnimationFrame(updateCall)
    }
  }, [])

  useEffect(() => {
    setReverse(settings.reverse ? -1 : 1)
  }, [settings]);

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
    const rect = cardRef.current.getBoundingClientRect()

    setWidth(cardRef.current.offsetWidth)
    setHeight(cardRef.current.offsetHeight)
    setLeft(rect.left)
    setTop(rect.top)
  }

  const setTransition = () => {
    clearTimeout(transitionTimer)

    setState(Object.assign({}, state, {
      style: {
        ...state.style,
        transition: `${settings.speed}ms ${settings.easing}`,
      },
    }))

    setTransitionTimer(setTimeout(() => {
      setState(Object.assign({}, state, {
        style: {
          ...state.style,
          transition: '',
        },
      }))
    }, settings.speed))
  }

  const reset = () => {
    window.requestAnimationFrame(() => {
      setState(Object.assign({}, state, {
        style: {
          ...state.style,
          transform: `perspective(${settings.perspective}px) ` + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'scale3d(1, 1, 1)',
        },
      }))
    })
  }

  const update = (e) => {
    const values = getValues(e)

    setState(Object.assign({}, state, {
      style: {
        ...state.style,
        transform: `perspective(${settings.perspective}px) `
          + `rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) `
          + `rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) `
          + `scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`,
      },
    }))

    setUpdateCall(null)
  }

  const onMouseEnter = (e) => {
    updateElementPosition()

    setState(Object.assign({}, state, {
      style: {
        ...state.style,
        willChange: 'transform',
      },
    }))

    setTransition()
  }

  const onMouseMove = (e) => {
    e.persist()

    if (updateCall !== null) {
      window.cancelAnimationFrame(updateCall)
    }

    // this.event = e
    setUpdateCall(window.requestAnimationFrame(() => update(e)))
  }

  const onMouseLeave = (e) => {
    setTransition()
    if (settings.reset) {
      reset()
    }
  }

  return (
    <div style={state.style}
      ref={cardRef}
      className={props.className}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </div>
  )
}