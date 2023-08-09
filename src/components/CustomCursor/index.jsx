import React, { useState, useEffect } from "react";
import styles from './style.module.scss';
import clsx from 'clsx';

// This functional component represents a custom cursor with a flare effect.
export default function FlareCursor(props) {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);
  const [isInner, setIsInner] = useState(false);

  // Event handler for the mousemove event.
  const handleMouseMove = (e) => {
    // Update the cursor position based on the mouse coordinates.
    const el = document.getElementById(props.id);
    const scrollY = document.documentElement.scrollTop || document.body.scrollTop
    let inner = false;
    if (e.clientX > el.offsetLeft &&
      e.clientX < el.offsetLeft + el.offsetWidth &&
      e.clientY > el.offsetTop - scrollY &&
      e.clientY < el.offsetTop + el.offsetHeight - scrollY) {
      inner = true;
    }
    setIsInner(inner);
    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;

    // Check if the cursor is over a clickable element by inspecting the cursor style.
    inner && setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the flare based on whether the cursor is over a clickable element.
  const flareSize = isPointer ? 0 : 30;

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (
    <>
    {
      isInner ? <div
        className={clsx(styles.flare,  isPointer ? styles.pointer : '')}
        style={{
          ...cursorStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${flareSize}px`,
          height: `${flareSize}px`,
        }}
      ></div> : ''
    }
  </>
  )
}