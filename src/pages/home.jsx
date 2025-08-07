import React from 'react'
import TaskManager from '../components/TaskManager';
import ApiData from '../pages/posts'

export default function Home() {
  return (
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* TaskManager */}
        <div className ='mb-8'>
          <TaskManager />
        </div>
        {/* API Data */}
        <div className="bg-white dark:bg-sky-950 overflow-hidden shadow rounded-lg p-6 ">
          <h2 className="text-2xl text-center  text-orange-500 font-bold mb-4">Fetched Posts Data</h2>
           <ApiData/>    
        </div> 
      </main>
  )
}
