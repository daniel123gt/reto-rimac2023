import * as React from 'react'
import { type SVGProps } from 'react'
const Arrow = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#03050F"
      d="M10 14.894 3.494 8.38 5.256 6.62 10 11.356l4.744-4.737 1.762 1.762L10 14.894Z"
    />
  </svg>
)
export default Arrow
