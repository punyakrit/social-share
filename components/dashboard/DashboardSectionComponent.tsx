import React from 'react'
function DashboardSectionComponent({ children }: any) {
  return (
    <div className="h-max rounded-3xl mx-2 bg-gray-950/70 no-scrollbar">
      {children}
    </div>
  )
}

export default DashboardSectionComponent
