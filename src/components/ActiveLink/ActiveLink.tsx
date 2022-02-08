import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter()

  let isActive = false

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'primary' : 'gray.200',
        fontWeight: isActive ? '600' : '400'
      })}
    </Link>
  )
}

export default ActiveLink
