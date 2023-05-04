import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import './test.css';
const Test = () => {
    return ( 
        <>
            <Tabs variant={'soft-rounded'} size={"lg"} align='end'> 
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    <img src="https://picsum.photos/id/356/600/400" alt=""></img>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
     );
}
 
export default Test;