import React from 'react'

export default function Footer() {
  return (
   <footer className="bg-white dark:bg-sky-950 shadow mt-auto">
           <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
             <p className="text-center text-gray-500 dark:text-gray-400">
               © {new Date().getFullYear()} Thande's Task Manager. All rights reserved.
             </p>
           </div>
         </footer>
  )
}
