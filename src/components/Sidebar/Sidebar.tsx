import { Icon, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, IconButton, Text, Flex, Box } from "@chakra-ui/react"
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import SidebarNav from "./SidebarNav"

const Sidebar = () => {
  const { isOpen, onClose, onOpen } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <>
        <IconButton
          aria-label='Open sidebar'
          icon={<Icon as={RiMenuLine} />}
          fontSize={30}
          variant='unstyled'
          onClick={onOpen}
          ml={6}
          color='#69FFDB'
          position='absolute'
          top={3}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size='xs' blockScrollOnMount={true}>
          <DrawerOverlay>
            <DrawerContent bg='#11233F'>
              <DrawerCloseButton fontSize={18} color='#69FFDB'/>

              <DrawerBody>
                <SidebarNav />

              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }
  return (
    <SidebarNav />
  )
}

export default Sidebar