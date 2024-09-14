import { ReactNode, FC } from "react"

interface Props {
  children?: ReactNode
  style?: Object
  className?: String
  // any props that come into the component
}

export const Section: FC<Props> = ({ children, style, className }) => {
  return (
    <section className={`section ${className}`} style={style}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}