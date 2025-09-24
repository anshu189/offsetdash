import React from 'react'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 py-4 md:px-[15rem] px-[1rem]">
      <header className="flex flex-col items-start gap-2 p-4">
        <h1 className="text-3xl font-semibold">Carbon Credit Dashboard</h1>
        <p className='text-subtext'>Manage & track your carbon credit certificates with ease.</p>
      </header>

      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App