import { Affix, Box, Container, Tabs } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBorderAll, IconFaceId, IconLink } from "@tabler/icons-react";

export default function NavBar({ section_1, section_2, section_3 }) {
  const tabs = [
    { index: "1", value: "1", icon: <IconFaceId />, title: "Profile" },
    { index: "2", value: "2", icon: <IconBorderAll />, title: "PET Projects" },
    { index: "3", value: "3", icon: <IconLink />, title: "Links" },
  ];
  const panels = [
    { index: "1", value: "1", section: section_1 },
    { index: "2", value: "2", section: section_2 },
    { index: "3", value: "3", section: section_3 },
  ];

  const matches = useMediaQuery("(min-width: 400px)");

  return (
    <Tabs defaultValue="1">
      {/* Tabs */}
      <Affix position={{ top: 0, left: 0 }} w="100%">
        <Container>
          <Tabs.List grow>
            {tabs.map((el) => (
              <Tabs.Tab key={el.index} leftSection={el.icon} value={el.value}>
                {matches && el.title}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Container>
      </Affix>
      {/* Tabs Content */}
      {panels.map((el) => (
        <Tabs.Panel key={el.index} value={el.value}>
          <Box w="100vw" mt="lg">
            <Container>{el.section}</Container>
          </Box>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
