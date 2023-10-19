import React from 'react';
import useToggle from './useToggle';
import debounce from './debounce';
import useMousePosition from './useMousePosition';
import downloadByUrl from './download';
import useWindowSize from './useWindowSize';
import useCopyToClipboard from './useCopyToClipboard';
import useAsync from './useAsync';
import useGeolocation from './useGeolocation';
import useEventListener from './useEventListener'
import useForm from './useForm';
import useDoubleClick from './useDoubleClick';
import useClickInside from './useClickInside';

// Material UI Components
import { Box, IconButton, Typography, Slider, Stack, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Avatar } from '@mui/material';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  useToggle,
  debounce,
  useMousePosition,
  downloadByUrl,
  useWindowSize,
  useCopyToClipboard,
  useAsync,
  useGeolocation,
  useEventListener,
  useForm,
  useDoubleClick,
  useClickInside,
  Box,
  IconButton,
  Typography,
  Slider,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Avatar,
  QueueMusicIcon,
  PauseRounded,
  PlayArrowRounded,
  FastForwardRounded,
  FastRewindRounded,
  FastRewindRounded,
  VolumeUpRounded,
  VolumeDownRounded
};
export default ReactLiveScope;
