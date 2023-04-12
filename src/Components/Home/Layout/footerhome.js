import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';

export default function Footerhome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box className="footerhome">
        <Box className="footerhome__circle"> 
            <AddCircleIcon />
        </Box>
        <BottomNavigation className='footerhome___menu' value={value} onChange={handleChange}>
          <BottomNavigationAction className='footerhome__item'
            label="Khám phá"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction className='footerhome__item'
            label="Sự kiện"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction className='footerhome__item'
            label="Bản đồ"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction  className='footerhome__item' label="Cá nhân" value="folder" icon={<PersonIcon />} />
        </BottomNavigation>
        </Box>
      );
}