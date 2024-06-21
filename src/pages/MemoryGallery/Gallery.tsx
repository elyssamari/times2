import React from 'react';
import { Grid, ImageList, ImageListItem } from '@mui/material';
import FavoriteCheckbox from './FavoriteCheckbox.tsx';


export default function Gallery({ items, toggleFavorite }) {
  return (
    <ImageList cols={3}>
      {items.map((item) => (
        <ImageListItem key={item.img} cols={1}>
          {item.type === 'photo' ? (
            <img
              src={`${process.env.PUBLIC_URL}/` + item.img}
              alt={item.title}
              width={item.width || 1536}
              height={item.height || 2048}
            />
          ) : item.type === 'video' || item.type === 'live photo' ? (
            <video
              controls
              width={item.width || 496}
              height={item.height || 896}
            >
              <source
                src={`${process.env.PUBLIC_URL}/` + (item.type === 'live photo' ? item.img.replace('.mov', '.mp4') : item.img)}
                type={`video/${(item.type === 'live photo' ? item.img.replace('.mov', '.mp4') : item.img).split('.').pop()?.toLowerCase()}`}
              />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <Grid container justifyContent="center">
            <FavoriteCheckbox
              checked={item.favorite}
              onChange={() => toggleFavorite(item.img)}
            />
          </Grid>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
