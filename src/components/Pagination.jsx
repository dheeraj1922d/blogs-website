import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page , changePage , totalPage } = useContext(AppContext);
  return (
    <div>
      { 
      page > 1 && 
      (
        <button onClick={()=>changePage(page-1)}>Previous</button>
      )
      }
      {
        page < totalPage && (
          <button onClick={()=>changePage(page+1)}>Next</button>
        )
      }

      <div>
        page{page} of {totalPage}
      </div>
    </div>
  )
}

export default Pagination