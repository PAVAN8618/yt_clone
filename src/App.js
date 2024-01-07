import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './index.css'
import { Box } from '@mui/material';
import { ChannelDetails, Feed, Navbar, SearchFeed, VideoDetails} from './components';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000", color:"white"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id"  element={<VideoDetails/>} />
        <Route path="/channel/:id"  element={<ChannelDetails/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
