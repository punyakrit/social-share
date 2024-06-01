import React from 'react'

function DashboardSectionComponent({children}:any) {
  return (
    <div className="h-full overflow-y-scroll shadow-md rounded-3xl mx-2 shadow-white/10 bg-gray-950/70 no-scrollbar">
      {children}
    </div>
  )
}

export default DashboardSectionComponent
