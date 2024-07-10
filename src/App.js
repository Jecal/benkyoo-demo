import './App.css';
import React, { useRef } from 'react';

// custom imports
import Navbar from './pages/0-Navbar';
import Landing from './pages/1-Landing';
import Info from './pages/2-Info';
import Feature from './pages/3-Feature';
import CTA from './pages/4-CTA';
import Footer from './pages/5-Footer';

// chakra ui styling imports
import { 
  ChakraProvider,
  Container,
  Stack,
} from '@chakra-ui/react';

// theme
import theme from './theme';

function App() {
  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ block: 'start', behavior: 'smooth'});
  }

  return (
    <ChakraProvider theme={theme}>
      <Navbar scrollToSection={scrollToSection}/>
      <div className='container'>
      <Container maxWidth={'100vw'} centerContent>

        <Stack spacing='1vh' align={'center'}>

            <Landing />
            <Info />
            <Feature />
            <div ref={sectionRef}>
              <CTA />
            </div>
            <Footer />

        </Stack>
        
      </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;