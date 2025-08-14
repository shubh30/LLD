export type Pages = {
  HOME: string
}

export type ComponentProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

type ComponentType = {
  component: React.ComponentType<ComponentProps>
}

export type Components = Record<string, ComponentType>