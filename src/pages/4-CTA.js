// component imports
import React from 'react';

import {
    Box,
    Card, CardBody,
    VStack,
    Heading,
    Text,
    Button,
    AbsoluteCenter
} from '@chakra-ui/react';

// theme
import theme from '../theme';

const CTA = () => {

    const handleClick = () => {
        window.location = 'https://app.youform.com/forms/ddahkllh';
    }

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
                <AbsoluteCenter>
                <CardBody align={'center'}>
                    <VStack spacing={'2vh'}>
                        <Heading>so what are you waiting for?</Heading>
                        <Text>enter your email below to join the waitlist and be one of the first users of benkyoo!</Text>
                        <Button onClick={handleClick} colorScheme='purple' px={6}>register</Button>
                        <Text>(*ゝω・)ﾉThanks!</Text>
                    </VStack>
                </CardBody>
                </AbsoluteCenter>
            </Box>
        </Card>
    )
}

export default CTA;