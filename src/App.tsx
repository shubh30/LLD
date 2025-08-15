import { useState } from "react"
import { PAGES } from "./constants"

import Home from "./components/Home"
import DataTable from "./components/DataTable"
import DrawCircle from "./components/DrawCircle"
import type { Components } from "./types"
import { containerStyle, headingStyle, titleStyle } from "./App.style"

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
    },
    DRAW_CIRCLE: {
      component: DrawCircle
    }
  }

  const Component = components[currentProject]?.component || Home

  return (
    <div css={containerStyle}>
      <div css={headingStyle}>
        <h1 css={titleStyle}>{currentProject}</h1>
        {currentProject !== PAGES.HOME && <button onClick={onHomeButtonClick}>Back to Home</button>}
      </div>
      <Component setPage={setCurrentProject} />
    </div>
  )
}

export default App
