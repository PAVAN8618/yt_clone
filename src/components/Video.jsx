import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Video = ({videos}) => {
    console.log(videos)

  return (
    
    <Stack direction='row' flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
      {videos.map((item,index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard Video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}

        </Box>
      ))}
    </Stack>
  )
}

export default Video