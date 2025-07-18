import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-grey-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-grey-500 mt-3'>
        We bring together the best courses from the best universities <br/> and colleges in the world, 
        so you can learn from the best.</p>
        {/* grid-cols-auto is defines as: [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] for this project  */}
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] 
      px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}  />)}
      </div>

      <Link to={'/course-list'} onClick={() => window.scrollTo(0, 0)} 
      className='text-grey-500 border-grey-500/30 px-10 py-3 rounded'>
      Show all courses</Link>
    </div>
  )
}

export default CoursesSection
