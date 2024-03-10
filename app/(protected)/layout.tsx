import React from "react"

interface ProtentedLayoutProps {
  children: React.ReactNode
}

const ProtentedLayout = ({ children }: ProtentedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  )
}

export default ProtentedLayout
