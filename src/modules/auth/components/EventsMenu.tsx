import React from 'react'

const eventsMenu = () => {
  return(
    <>
      <ul>
        <li>All Photos</li><li>Events</li><li>Community</li><li>Hangout</li>
      </ul>
      <form>
        <input type="search" name="search" className='' />
        <input type='button' className="">Search</input>
      </form>
    </>
  )
}

export default eventsMenu