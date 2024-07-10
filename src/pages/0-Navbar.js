// component imports
import {
    Box,
    Flex,
    Image,
    Button
} from '@chakra-ui/react';
import logo from '../images/misc/logo.png';

const Navbar = ({ scrollToSection }) => {

    return(
        <Box
            as='nav'
            position='sticky'
            top='0'
            zIndex={'100'}
            width={'100%'}
            backdropFilter="saturate(180%) blur(10px)"
            backgroundColor="rgba(255, 255, 255, 0.8)"
            boxShadow="0 1px 1px rgba(0, 0, 0, 0.1)"
        >
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                maxWidth='1200px'
                margin='0 auto'
                padding='1rem'
            >
                <Image src={logo} alt='logo' height='40px'/>

                <Button colorScheme='purple' variant={'solid'} onClick={scrollToSection}>
                    Join Waitlist
                </Button>
            </Flex>
        </Box>
    )
}

export default Navbar;