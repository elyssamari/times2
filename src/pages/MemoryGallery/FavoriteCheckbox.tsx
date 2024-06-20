import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


export default function FavoriteCheckbox({ checked, onChange }) {
  return (
    <Checkbox
      icon={<FavoriteBorderIcon />}
      checkedIcon={<FavoriteIcon />}
      checked={checked}
      onChange={onChange}
      sx={{
        color: pink[800],
        '&.Mui-checked': {
          color: pink[600],
        },
        '& .MuiIconButton-root:hover': {
          backgroundColor: 'transparent', 
        },
        '& .MuiSvgIcon-root': {
          pointerEvents: 'none',
        },
      }}
    />
  );
}