import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Hero } from '../components/hero';
import { Box } from '../components/styles/box';


const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
         </Box>
      </Layout>
   );
};

export default Home;
