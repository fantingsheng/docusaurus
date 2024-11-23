import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {

  const itemData = [
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723268778651-6f2ffc1d-5299-4ab1-a468-a2ae7a96f622.png',
      title: 'pixel',
      rows: 3,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723267723839-08c90833-6544-482f-8bff-0592505cd58c.png',
      title: 'Laptop',
      rows: 1,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723268206434-9403b8d9-f003-49a7-a29a-7062129f57bb.png',
      title: 'iphone',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723271051189-d48ba802-07da-4adf-8b15-a0b142b4d757.png',
      title: 'Browser',
      rows: 1,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723269066541-031c9258-3f29-4b96-8be1-5a13de9ecb95.png',
      title: 'watch',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1726905795158-66099b89-58bb-471d-9ef7-6d6c9c44fd63.png',
      title: 'tablet',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1723272481027-67b684c0-a603-4d5e-a86e-df3b0b8573c5.png',
      title: 'tablet',
      rows: 1,
      cols: 2,
    }
  ];
  
  return (
    <ImageList
      sx={{ width: '100%', '& li': {marginTop: '0 !important'} }}
      variant="quilted"
      cols={8}
      rowHeight={82}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

