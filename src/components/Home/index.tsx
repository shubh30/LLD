import type { ComponentProps } from "../../types"
import { PROJECTS } from "./constants"

import { listStyle, itemStyle } from "./style"

const Home = ({ setPage }: ComponentProps) => {
  const onProjectClick = (key: string) => {
    setPage(key)
  }

  return (
    <div css={listStyle}>
      {PROJECTS.map((project) => {
        return (
          <div css={itemStyle} key={project.key} onClick={() => onProjectClick(project.key)}>{project.title}</div>
        )
      })}
    </div>
  )
}

export default Home