import React from 'react'
import SearchDiv from './search/SearchDiv';
import PlayList from './playlist/PlayList';

const Container = () => {
  return (
    <div className='container'>
      <SearchDiv />
      <PlayList />
    </div>
  )
}

export default Container;