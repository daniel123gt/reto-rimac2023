import { type SVGProps } from 'react'
const ButtonArrow = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={12} cy={12} r={11} stroke="#A9AFD9" strokeWidth={2} />
      <path
        fill="#A9AFD9"
        d="M12.972 15.904 9.064 12l3.908-3.904 1.057 1.058L11.187 12l2.842 2.846-1.057 1.058Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default ButtonArrow
