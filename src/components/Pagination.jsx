import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export  const Pagination = () => {
    const {page, totalPages, HandlePageChange}=useContext(AppContext)
    if(!totalPages) return null;
    return (
        <div className="fixed bottom-0  inset-x-0 bg-[#6d44fc] text-white py-1.5 border-t-2 border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
                {page>1&& (
                <button onClick={()=>HandlePageChange(page -1)}
                className="border-2 border-gray-300 py-1 px-4 rounded-md">
                     Previous </button>) }

                     {page < totalPages && (
          <button
            onClick={() => HandlePageChange(page + 1)}
            className="border-2 border-gray-300 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
         <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
            </div>
            
        </div>
    )
}
export default Pagination
