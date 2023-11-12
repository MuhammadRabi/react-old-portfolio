import { createContext, useState } from "react"

const appContext = createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  const [isModalOpen, setisModalOpen] = useState(false)

  return (
    <appContext.Provider
      value={{ setisModalOpen, setisSidebarOpen, isModalOpen, isSidebarOpen }}
    >
      {children}
    </appContext.Provider>
  )
}

export { AppProvider, appContext }
