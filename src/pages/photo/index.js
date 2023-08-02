import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { ImageList, ImageListItem, ToggleButtonGroup, ToggleButton, ImageListItemBar,
  FormControlLabel, IconButton, Checkbox }  from '@mui/material';
import Map from '@mui/icons-material/Map';

export default function AlbumGallery () {
  const itemData = [
    { title: '苏宁悦城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969633-035197b8-c646-45bc-a43c-9350ced51585.jpg'},
    { title: '宜家家居', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969569-82b40cf0-61ae-424a-b0ab-be54140e446d.jpg'},
    { title: '傍晚天空-南湖大道', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969619-f7963791-c9a9-4460-968f-9af381d4de18.jpg'},
    { title: '太湖广场', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969587-3dbebfa2-50b3-4832-8fa0-1064a48ee941.jpg' },
    { title: '无锡太科园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969604-e34d6d43-46c8-4c1d-a95e-8ea64693a763.jpg'},
    { title: '高浪路-苏宁悦城段', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969547-b76c7d2a-8dbd-48f6-9495-8a29325fe8ba.jpg' },
    { title: '金城湾-万象城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689408969560-abf2f872-b7bf-4b76-9356-65471ab0de18.jpg' },
    { title: '无锡国家软件园', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411403075-2fb62116-9a67-43af-a6f3-8fe4fe8d3f56.jpg' },
    { title: '菱湖大道与高浪路交叉口', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411403045-935b392c-60e6-408d-a56b-5392024ab33a.jpg' },
    { title: '朗诗新郡', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411535688-2c38d2f5-a113-4c08-9d0f-9dde2a0dc961.jpg' },
    { title: '吴都路高架桥', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411608170-d2f68fcf-b75a-41be-ae51-4d7a57eb6f28.jpg' },
    { title: '苏宁悦城A区', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672728-b3cfd8b9-8edf-47e4-bb4e-414b2f6b03f8.jpg' },
    { title: '大悦城', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672709-236a3755-f646-44fd-8ba4-35d48bd5436d.jpg' },
    { title: '长广溪', img: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1689411672750-5fd2b742-8290-4fab-9995-52bd21607a9a.jpg' },
  ];
  const [col, setCol] = useState(4);
  const [showTitle, setShowTitle] = useState(true);

  const handleScale = (event, val) => {
    if (val !== null) {
      setCol(val)
    }
  };
  return (
    <Layout title='城市印象' description='记录自己的城市风景，居一城，爱一城'>
      <Head>
        <meta name='keywords' content='城市, 风景, 无锡, 随手拍' />
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col col--6 margin-top--md'>
            <ToggleButtonGroup
              color='primary'
              value={col}
              exclusive
              onChange={handleScale}
            >
              <ToggleButton value={6}>Small</ToggleButton>
              <ToggleButton value={4}>Medium</ToggleButton>
              <ToggleButton value={3}>Large</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='col col--6 margin-top--md'>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <FormControlLabel control={
                <Checkbox
                  checked={showTitle}
                  onChange={(event, val) => setShowTitle(val)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />}
                label='显示地点'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col col--12 margin-top--md'>
            <ImageList variant="masonry" cols={col} gap={10}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  {
                    showTitle ? <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                        >
                          <Map />
                        </IconButton>
                      }
                      actionPosition="left"
                    /> : ''
                  }
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}