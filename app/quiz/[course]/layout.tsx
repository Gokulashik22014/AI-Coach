import React from 'react'

const CourseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-24'>
        {children}
    </div>
  )
}

export default CourseLayout