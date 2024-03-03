import React from 'react'

const Infobox = ({

    heading,
    backgroundColor,
    textColor,
    buttonInfo,
    children
}) => {
  return (
            <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor} last:text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColor} mt-2 mb-4`}>
              {children}
            </p>
            <a
              href={ buttonInfo.link }
              className={` ${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:opacity-80`}
            >
              {buttonInfo.text}
            </a>
          </div>
  )
}

export default Infobox