import { Tabs } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export default function NavBar({ section_1, section_2, section_3 }) {
  return (
    <Tabs defaultValue="1">
      <Tabs.List justify="space-around">
        <Tabs.Tab leftSection={<IconHome />} value="1"></Tabs.Tab>
        <Tabs.Tab leftSection={<IconHome />} value="2"></Tabs.Tab>
        <Tabs.Tab leftSection={<IconHome />} value="3"></Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="1">{section_1}</Tabs.Panel>
      <Tabs.Panel value="2">{section_2}</Tabs.Panel>
      <Tabs.Panel value="3">{section_3}</Tabs.Panel>
    </Tabs>
  );
}
