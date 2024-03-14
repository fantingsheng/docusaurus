import React from 'react';
import styles from './style.module.scss';
import { CircularProgress } from '@mui/material';

export default function RouteBox ({ route, active, loading, handleClickRoute, handleClickMore }) {
  return (
    <li style={{ borderColor: active ? route.color : "#e0e4e0" }} key={route.slug} onClick={() => handleClickRoute(route.slug)}>
      <div className={styles.rhead}>
        <p><span className={styles.dot} style={{ backgroundColor: route.color }}></span>{route.name}</p>
        <span className={styles.mode}>{route.type}</span>
      </div>
      <ol>
      <li>
        <span>路程 (Distance)</span>
        <strong>{route.distance} km</strong>
      </li>
      <li>
        <span>海拔 (Elevation)</span>
        <strong>{route.elevation} m</strong>
      </li>
      </ol>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className={styles.moreBtn} onClick={() => handleClickMore()}>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
      </svg>
      { loading && active ?
        <div className={styles.loadingCover}>
          <CircularProgress color="inherit" />
        </div> : <></>
      }
    </li>
  )
}