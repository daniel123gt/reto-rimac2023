import * as React from 'react'
import { type SVGProps } from 'react'
const Dots = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={3}
    fill="none"
    {...props}
  >
    <path
      stroke="#4F4FFF"
      strokeDasharray="2 8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1.5h30"
    />
  </svg>
)
export default Dots
