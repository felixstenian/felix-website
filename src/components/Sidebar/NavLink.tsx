import { Link, Text, LinkProps, Icon } from "@chakra-ui/react"
import { ReactNode , ElementType} from "react"
import NextLink from 'next/link'

interface NavLinkProps extends LinkProps {
  icon?: ElementType,
  href: string,
  children?: ReactNode
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <NextLink href={href}  passHref>
      <Link 
        {...rest}
        _hover={{
          textDecoration: 'none',
        }}
      >
        { !!icon && <Icon as={icon} fontSize={25} /> }
        { children &&
          <Text 
            fontSize={22} 
            lineHeight='26px' 
            _hover={{
              textDecoration: 'none',
              color: '#69FFDB',
              fontWeight: 600,
            }}
          >
            {children}
          </Text>
        }
      </Link>
    </NextLink>
  )
}