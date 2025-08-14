import { useState } from "react"
import { PAGES } from "./constants"

import Home from "./components/Home"
import DataTable from "./components/DataTable"
import type { Components } from "./types"

function App() {
  const [currentProject, setCurrentProject] = useState(PAGES.HOME)
  const onHomeButtonClick = () => {
    setCurrentProject(PAGES.HOME)
  }
  const components: Components = {
    HOME: {
      component: Home
    },
    DATA_TABLE: {
      component: DataTable
    }
  }

  const Component = components[currentProject]?.component || Home

  return (
    <div>
      <button onClick={onHomeButtonClick}>Back to Home</button>
      <Component setPage={setCurrentProject} />
    </div>
  )
}

export default App
