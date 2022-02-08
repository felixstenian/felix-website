import { ReactNode, ElementType } from 'react'
import { Link, Text, LinkProps, Icon } from '@chakra-ui/react'

import useSound from 'use-sound'

import ActiveLink from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  icon?: ElementType
  href: string
  children?: ReactNode
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  const soundUrl = 'sounds/bite.mp3'
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 })

  return (
    <ActiveLink href={href} passHref>
      <Link
        {...rest}
        onMouseEnter={() => play()} 
        onMouseLeave={() => stop()}
        _hover={{
          textDecoration: 'none'
        }}
      >
        {!!icon && <Icon as={icon} fontSize={25} />}
        {children && (
          <Text
            fontSize={22}
            lineHeight='26px'
            _hover={{
              textDecoration: 'none',
              color: 'primary',
              fontWeight: 600
            }}
          >
            {children}
          </Text>
        )}
      </Link>
    </ActiveLink>
  )
}
