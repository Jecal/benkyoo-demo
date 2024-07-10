// component imports
import {
    Box,
    Card, CardBody,
    Text,
    Image,
} from '@chakra-ui/react';
import logo from '../images/misc/logo.png';

// theme
import theme from '../theme';

const Landing = () => {
    return(
        <Card
            width={'80vw'}
            height={'80vh'}
            px={'20vw'}
            py={'20vh'}
            my={10}
            variant={'outline'}
        >
            <Box theme={theme}>
                <Image src={logo} alt='logo' width='auto'/>
                <CardBody align={'center'}>
                    <Text fontSize={'xl'} mt={2} as='b'>a platform for note-sharing</Text>
                    <Text fontSize={'l'} mt={2}>make them or take them, learn together</Text>
                </CardBody>
            </Box>
        </Card>
    )
}

export default Landing;