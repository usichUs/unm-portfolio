import {
  Affix,
  Box,
  Center,
  Container,
  Group,
  Stack,
  Tabs,
} from "@mantine/core";
import { IconBorderAll, IconFaceId, IconLink } from "@tabler/icons-react";

export default function NavBar({ section_1, section_2, section_3 }) {
  const tabs = [
    { index: "1", value: "1", icon: <IconFaceId /> },
    { index: "2", value: "2", icon: <IconBorderAll /> },
    { index: "3", value: "3", icon: <IconLink /> },
  ];
  const panels = [
    { index: "1", value: "1", section: section_1 },
    { index: "2", value: "2", section: section_2 },
    { index: "3", value: "3", section: section_3 },
  ];
  return (
    <Tabs defaultValue="1">
      {/* Tabs */}
      <Affix position={{ top: 0, left: 0 }} w="100%">
        <Container>
          <Tabs.List grow>
            <Group justify="space-around" w="100%" gap="0">
              {tabs.map((el) => (
                <Tabs.Tab
                  key={el.index}
                  leftSection={el.icon}
                  value={el.value}
                ></Tabs.Tab>
              ))}
            </Group>
          </Tabs.List>
        </Container>
      </Affix>
      {/* Tabs Content */}
      {panels.map((el) => (
        <Tabs.Panel key={el.index} value={el.value}>
          <Center>
            <Container>{el.section}</Container>
          </Center>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
