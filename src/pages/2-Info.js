// component imports
import {
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
    Box,
    Card,
    Divider,
    Image,
    Stack, VStack,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Text
} from '@chakra-ui/react';

// images
import landing from '../images/pages/landing.png';
import login from '../images/pages/login.png';
import dash from '../images/pages/dash.png';
import community from '../images/pages/community.png';
import notes from '../images/pages/notes.png';
import noteView from '../images/pages/note-view.png';
import settings from '../images/pages/settings.png';

// theme
import theme from '../theme';

const Info = () => {
    return(
        <Stack direction='row' h='80vh' theme={theme}>
        {/* info accordion */}
        <Card
            width={'20vw'}
            my={10}
            mr={'1vw'}
            variant={'outline'}
        >
            <Accordion>
                {/* what */}
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='b' fontSize='xl'>
                                ok, but what actually is this?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='p' fontSize='xl' mb={'1vh'}>
                                benkyoo is a webapp for students to share notes. that's the concept.
                            </Text>
                            <Divider />
                            <Text as='p' fontSize='xl' mt={'1vh'}>
                                on the left are the initial concept designs for what the app should ideally look like.
                            </Text>  
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                {/* audience */}
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='b' fontSize='xl'>
                                who specifically should be using this?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='p' fontSize='xl' mb={'1vh'}>
                                students in high school to higher education who want to start a "library" of notes for the classes they've taken in their school.
                                doing this allows your notes to serve it's purpose for an indefinite amount of time,
                                instead of being something you might need to throw out or delete from your drive.
                            </Text>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                {/* peers */}
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='b' fontSize='xl'>
                                who will i be working with?
                            </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box p={'1vh'} flex={'1'} textAlign={'left'}>
                            <Text as='p' fontSize='xl' mb={'1vh'}>
                                you get to work with your own classmates.
                                you can start a community for your school and upload your notes.
                                your classmates can then find this community, and also upload their own notes;
                                or use some which were already posted.
                            </Text>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Card>

        {/* carousel */}
        <VStack>
            <Tabs 
                width={'60vw'}
                my={10}
                ml={'1vw'}
                variant={'line'}
                isFitted
            >

                <TabList>
                    <Tab>landing</Tab>
                    <Tab>login</Tab>
                    <Tab>dash</Tab>
                    <Tab>community</Tab>
                    <Tab>notes</Tab>
                    <Tab>note view</Tab>
                    <Tab>settings</Tab>
                </TabList>

                <TabPanels mt='2vh'>
                    <TabPanel>
                        <Image src={landing} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={login} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={dash} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={community} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={notes} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={noteView} borderRadius={'10px'}/>
                    </TabPanel>
                    <TabPanel>
                        <Image src={settings} borderRadius={'10px'}/>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </VStack> 
            
        </Stack>
    )
}

export default Info;