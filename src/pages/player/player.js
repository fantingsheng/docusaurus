import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function Player ({ songList, openDraw, currentIndex, changeCurrentIndex }) {
  const audioPlayer = React.useRef();
  const theme = useTheme();
  const [duration, setDuration] = React.useState(0); // seconds
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [volume, setVolume] = React.useState(0.3);
  const [timer, setTimer] = React.useState(null);

  function formatDuration(seconds) {
    seconds = Math.floor(seconds);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    if (minutes < 10) {
      minutes =`0${minutes}`;
    }
    if (seconds < 10) {
      seconds =`0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  const onPlayOrPause = () => {
    paused ? audioPlayer.current.play() : audioPlayer.current.pause();
    setPaused(!paused)
  }

  const onChangeVolume = (val) => {
    console.log(val)
    setVolume(val);
    audioPlayer.current.volume = val;
  };

  const onChangeProgress = (val) => {
    setPosition(val);
    audioPlayer.current.currentTime = val;
  }

  const onPreview = () => {
    if (currentIndex > 0) {
      changeCurrentIndex(currentIndex - 1); 
    }
  }

  const onNext = () => {
    if (currentIndex < songList.length - 1) {
      changeCurrentIndex(currentIndex + 1);
    } else {
      changeCurrentIndex(0);
    }
  }

  React.useEffect(() => {
    audioPlayer.current.addEventListener('loadeddata', () => {
      setDuration(audioPlayer.current.duration)
    });
    audioPlayer.current.addEventListener('play', () => {
      if (timer) {
        clearInterval(timer);
      }
      setTimer(setInterval(() => {
        setPosition(audioPlayer.current.currentTime)
      }, 1000));
    });
    audioPlayer.current.addEventListener('pause', () => {
      if (timer) {
        clearInterval(timer);
      }
    });
    audioPlayer.current.addEventListener('ended', () => {
      clearInterval(timer);
      setPosition(audioPlayer.current.currentTime);
    }, () => {
      // next song
    });
  }, []);

  return (
    <div style={{ height: '100%', margin: 'auto' }}>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <CoverImage>
              <img
                alt={`${songList[currentIndex].name} -- ${songList[currentIndex].artists}`}
                src={songList[currentIndex].avatar}
              />
            </CoverImage>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
              <IconButton aria-label="music queue" onClick={openDraw}>
                <QueueMusicIcon fontSize="small" htmlColor={lightIconColor} />
              </IconButton>
            </Box>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                {songList[currentIndex].artists}
              </Typography>
              <Typography noWrap>
                <b>{songList[currentIndex].name}</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                {songList[currentIndex].lyric}
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => onChangeProgress(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -1,
            }}
          >
            <audio ref={audioPlayer} src={songList[currentIndex].link} />
            <IconButton aria-label="previous song" onClick={onPreview}>
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={onPlayOrPause}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: '3rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
              )}
            </IconButton>
            <IconButton aria-label="next song" onClick={onNext}>
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              value={volume}
              min={0}
              step={0.01}
              max={1}
              onChange={(_, value) => onChangeVolume(value)}
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 16,
                  height: 16,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Widget>
        <WallPaper />
      </Box>
    </div>
  );
}
