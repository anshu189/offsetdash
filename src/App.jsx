import React from 'react'
import { Leaf } from 'lucide-react';
import Dashboard from './pages/Dashboard'
import CertificateTemplate from './components/certificate/CertificateTemplate';

const App = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 py-4 md:px-[15rem] px-[1rem]">
      <header className="flex flex-col items-start gap-2 p-4">
        <div className="inline-flex items-center gap-3 ">
          <span className="p-2 bg-[#d9ffe0] rounded-lg hover:bg-[#ceffd7] duration-200 cursor-pointer">
            <Leaf className="h-5 w-5 text-[#00bf63]" />
          </span>
          <h1 className="text-3xl font-semibold">
            Carbon <span className="text-[#00bf63]">Credits</span> Dashboard
          </h1>
        </div>
        <p className='text-subtext'>Manage & track your carbon credit certificates with ease.</p>
      </header>

      <main>
        <Dashboard />
        {/* <CertificateTemplate /> */}
      </main>
    </div>
  )
}

export default App