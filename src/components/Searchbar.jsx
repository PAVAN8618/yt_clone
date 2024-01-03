import { IconButton, Paper} from "@mui/material"
import { useState } from "react"
import { Search } from '@mui/icons-material';



const SearchBar = () => {

  return(
    <Paper
    component='from'
    onSubmit={{}}
    sx={{
      borderRadius:20,
      border:'1px solid #e3ee3',
      pl:2,
      boxShadow:'none',
      mr:{sm:5}
    }}
    >
        <input
        className="search-bar"
        placeholder="Search.."
        value=""
        onChange={()=>{}}
        />
        <IconButton
        type="submit"
        sx={{p:'10px',color:'red'}} aria-label='search'>
          <Search/>
        
          </IconButton>
    </Paper>
  )
}



  


export default SearchBar