// component imports
import {
    Card,
    IconButton,
    Stack,
    Link,
    VStack,
    Text,
    AbsoluteCenter
} from '@chakra-ui/react';

// react-icons import
import { FaGithubAlt, FaXTwitter, FaInstagram } from 'react-icons/fa6';

// use array to store links
const accounts = [
    {
        url: 'https://github.com/Jecal',
        label: 'git acc',
        type: 'gray',
        icon: <FaGithubAlt />
    },
    {
        url: 'https://x.com/jecalll',
        label: 'twitter acc',
        type: 'gray',
        icon: <FaXTwitter />
    },
    {
        url: 'https://www.instagram.com/jecalll/',
        label: 'insta acc',
        type: 'gray',
        icon: <FaInstagram />
    }
]

const Footer = () => {
    return(
        <Card
        width={'80vw'}
        height={'80vh'}
        px={'20vw'}
        py={'20vh'}
        my={10}
        variant={'outline'}
        as={'footer'}
        alignItems={'center'}
        >
            <AbsoluteCenter>

            <VStack spacing={'2vh'}>
            {/* header */}
            <Text fontSize='2xl' as='b'>follow my socials to see updates</Text>

            {/* icon links */}
            <Stack direction='row' spacing={5} alignItems='center'>
                {accounts.map((sc, index) => (
                    <IconButton 
                        key={index}
                        as={Link}
                        isExternal
                        href={sc.url}
                        aria-label={sc.label}
                        colorScheme={sc.type}
                        icon={sc.icon}
                        rounded='md'
                        size='lg'
                    />
                ))}
            </Stack>
            </VStack>

            </AbsoluteCenter>
        </Card>
    )
}

export default Footer;