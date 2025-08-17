import { useRef, useState } from "react"
import { canvasStyle, circleStyle, ctaContainerStyle } from "./DrawCircle.style"
import type { Point } from "./DrawCircle.type"

const DrawCircle = () => {
  const [points, setPoints] = useState<Point[]>([])
  const [queue, setQueue] = useState<Point[]>([])
  const canvasRef = useRef<HTMLDivElement>(null)

  const onCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const point: Point = { x, y };
    setPoints([point, ...points])
    setQueue([]);
  }

  const handleUndo = () => {
    if (!points.length) return;
    const [remove, ...rest] = points;
    setPoints(rest)
    setQueue([remove, ...queue])
  }

  const handleRedo = () => {
    if (!queue.length) return;
    const [restore, ...rest] = queue;
    setQueue(rest)
    setPoints([restore, ...points])
  }

  return (
    <div>
      <h2>Draw Circle</h2>
      <div css={canvasStyle} ref={canvasRef} onClick={onCanvasClick}>
        {points.length > 0 && points.map((point, index) => {
          const {x, y} = point;
          return <div css={circleStyle({top: y, left: x})} key={index}></div>
        }) }
      </div>
      <div css={ctaContainerStyle}>
        <button onClick={handleUndo}>UNDO</button>
        <button onClick={handleRedo}>REDO</button>
      </div>
    </div>
  )
}

export default DrawCircle
