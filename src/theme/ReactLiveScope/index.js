import React from 'react';
import useToggle from '@site/src/hooks/useToggle';
import { debounce, downloadByUrl } from '@site/src/utils';
import useMousePosition from '@site/src/hooks/useMousePosition';
import useWindowSize from '@site/src/hooks/useWindowSize';
import useCopyToClipboard from '@site/src/hooks/useCopyToClipboard';
import useAsync from '@site/src/hooks/useAsync';
import useGeolocation from '@site/src/hooks/useGeolocation';
import useEventListener from '@site/src/hooks/useEventListener'
import useForm from '@site/src/hooks/useForm';
import useDoubleClick from '@site/src/hooks/useDoubleClick';
import useClickInside from '@site/src/hooks/useClickInside';
import useHover from '@site/src/hooks/useHover';

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
  useHover,
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
