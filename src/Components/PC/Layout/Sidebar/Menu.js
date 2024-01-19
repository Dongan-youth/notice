import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = ({ MenuImageURL, MenuName, PageUrl }) => {
  const location = useLocation()

  return (
    <>
      {PageUrl === location.pathname ? (
        <Link to={PageUrl}>
          <div className="flex flex-row items-center py-3 rounded-xl bg-[#F6F6F9] border-[#CACAD0] border-2 border-solid mb-4">
            <img src={MenuImageURL} alt="Menu" className="w-auto h-9 px-5" />
            <span className="text-[#7D8DA7] px-2 text-lg text-center font-semibold font-[Inter]">{MenuName}</span>
          </div>
        </Link>
      ) : (
        <Link to={PageUrl}>
          <div className="flex flex-row items-center py-3 rounded-xl border-2 border-white hover:bg-[#F6F6F9] hover:border-[#CACAD0] hover:border-2 hover:border-solid mb-4">
            <img src={MenuImageURL} alt="Menu" className="w-auto h-9 px-5" />
            <span className="text-[#7D8DA7] px-2 text-lg text-center font-semibold font-[Inter]">{MenuName}</span>
          </div>
        </Link>
      )}
    </>
  )
}

export default Menu
