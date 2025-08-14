import type { ComponentProps } from "../../types"
import { PROJECTS } from "./constants"

import { listStyle, itemStyle, titleStyle, subtitleStyle } from "./Home.style"

const Home = ({ setPage }: ComponentProps) => {
  const onProjectClick = (key: string) => {
    setPage(key)
  }

  return (
    <div css={listStyle}>
      <h1 css={titleStyle}>Projects</h1>
      <p css={subtitleStyle}>Click on a project to view its details.</p>
      {PROJECTS.map((project) => {
        return (
          <div css={itemStyle} key={project.key} onClick={() => onProjectClick(project.key)}>{project.title}</div>
        )
      })}
    </div>
  )
}

export default Home