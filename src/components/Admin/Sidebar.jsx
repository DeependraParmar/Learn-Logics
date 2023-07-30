import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiBook2Fill, RiDashboardFill, RiUser3Fill } from 'react-icons/ri'
import { Link,useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
            <VStack borderLeft={['', '', '1px solid teal','1px solid teal']} alignItems={'flex-start'} spacing={'4'} padding={['2rem 0rem','2rem 0rem','2rem','3rem']} >
                <SidebarLinks route={'dashboard'} active={location.pathname==='/admin/dashboard'} icon={<RiDashboardFill size={'20'} />} text={'Dashboard'} />
                <SidebarLinks route={'users'} active={location.pathname==='/admin/users'} icon={<RiUser3Fill size={'20'} />} text={'Users'} />
                <SidebarLinks route={'courses'} active={location.pathname==='/admin/courses'} icon={<RiBook2Fill size={'20'} />} text={'Courses'} />
                <SidebarLinks route={'createcourse'} active={location.pathname==='/admin/createcourse'} icon={<RiAddCircleFill size={'20'} />} text={'New Course'} />
            </VStack>
        </>
    )
}

export default Sidebar

function SidebarLinks ({route,icon,text,active}) {
    return (
        <>
            <Link to={`/admin/${route}`} >
                <Button colorScheme={active? 'teal':''} border={active? '1px solid teal': '0px'} gap={'2'} variant={'ghost'}  >{icon}{text}</Button>
            </Link>
        </>
    )
}