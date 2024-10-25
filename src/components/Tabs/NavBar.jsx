import { Box, Tabs } from "@mantine/core";
import { IconBorderAll, IconFaceId, IconLink } from "@tabler/icons-react";

export default function NavBar({ section_1, section_2, section_3 }) {
  return (
    <Box maw="1000px" justify="center" m="auto" w="100%">
      <Tabs defaultValue="1">
        <Tabs.List justify="space-around" grow>
          <Tabs.Tab leftSection={<IconFaceId />} value="1"></Tabs.Tab>
          <Tabs.Tab leftSection={<IconBorderAll />} value="2"></Tabs.Tab>
          <Tabs.Tab leftSection={<IconLink />} value="3"></Tabs.Tab>
        </Tabs.List>
        <Box mt="lg">
          <Tabs.Panel value="1">{section_1}</Tabs.Panel>
          <Tabs.Panel value="2">{section_2}</Tabs.Panel>
          <Tabs.Panel value="3">{section_3}</Tabs.Panel>
        </Box>
      </Tabs>
    </Box>
  );
}
