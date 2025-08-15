import { css } from "@emotion/react";
import type { CircleProps } from "./DrawCircle.type";

export const canvasStyle = css`
  width: 400px;
  height: 300px;
  border: 1px solid;
  position: relative;
`

export const ctaContainerStyle = css`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`

export const circleStyle = ({top, left}: CircleProps) => css`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: red;
  top: ${top}px;
  left: ${left}px;
  transform: translate(-50%, -50%);
`