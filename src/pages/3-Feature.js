// component imports
import {
    Box,
    Card, CardBody,
    Heading,
    VStack,
    Text,
    Button,
    Image
} from '@chakra-ui/react';
import bchatPoster from '../images/misc/bchat-poster.png';

// theme
import theme from '../theme';

const handleClick = () => {
    window.location = 'https://bchat-v2.netlify.app/';
}

const Feature = () => {
    return(
        <Card
            height={'80vh'}
            width={'80vw'}
            px={'0vw'}
            py={'5vh'}
            my={10}
            variant={'outline'}
        >
            <Box theme={theme}>
                <CardBody align={'center'}>
                    <VStack spacing={'6vh'}>
                        <VStack spacing={'2vh'}>
                            <Heading>wanna try out a feature of benkyoo?</Heading>
                            <Text>
                                click the button below to try out <Text as='b'>bchat</Text>, 
                                a live chat app whose features will be utilized in the full launch of benkyoo
                            </Text>
                            <Button onClick={handleClick} colorScheme='purple' size='lg'>
                                bchat
                            </Button>

                        </VStack>
                        {/* video demo */}
                        <Image src={bchatPoster} alt='logo' width='50vw' borderRadius={'10px'}/>
                    </VStack>
                </CardBody>
            </Box>
        </Card>
    )
}

export default Feature;