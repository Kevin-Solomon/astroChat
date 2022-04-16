import { Login, Signup } from './components';
import {
  Box,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

const Auth: React.FC = () => {
  return (
    <Box w="100%" p={4} color="black" h="100vh">
      <Center h="100%" color="black">
        <Tabs bg="off-white" w="70%" align="center">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Box>
  );
};
export { Auth };
