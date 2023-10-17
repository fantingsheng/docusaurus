import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

export default function MusicQueue({ songList, currentIndex, changeCurrentIndex }) {

  return (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
    >
      <List>
        {songList.map((item, index) => (
          <ListItem
            key={index} 
            secondaryAction={
              currentIndex === index ? <Checkbox
                icon={<AudiotrackIcon />}
                checkedIcon={<AudiotrackIcon />}
              /> : ''
            }
            onClick={() => changeCurrentIndex(index)}
            disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt={item.artists} src={item.avatar} />
              </ListItemIcon>
              <ListItemText secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="text.primary"
                  >
                    {item.name}
                  </Typography>
                  {' -- ' + item.artists}
                </React.Fragment>
              } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
