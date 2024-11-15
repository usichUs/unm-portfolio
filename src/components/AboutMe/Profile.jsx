import {
  Group,
  Image,
  Paper,
  Text,
  Box,
  ScrollArea,
  Stack,
} from "@mantine/core";
import SkillsTable from "./SkillsTable";

const hardSkills = [
  "React",
  "Redux",
  "JS",
  "CSS",
  "HTML",
  "Styled-Components",
  "Event-Loop",
];

const softSkills = [
  "Communication",
  "Responsibility",
  "Emotional intelligence",
  "Adaptability",
  "Creativity",
  "Problem Solving",
];

export default function Profile() {
  return (
    <Stack>
      <Group wrap="wrap" justify="center">
        <Box>
          <Image src="/src/assets/me.jpg" maw="100%" mah="20rem" radius="md" />
        </Box>
        <ScrollArea h="320px" w="320px">
          <Paper withBorder shadow="xs" p="xl" radius="md">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              illo voluptatum quidem id, molestiae ex maiores. Quod nobis beatae
              dolores neque? Cum libero, accusamus facere similique quo nisi
              ipsum vitae. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illum illo voluptatum quidem id, molestiae ex maiores. Quod
              nobis Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illum illo voluptatum quidem id, molestiae ex maiores. Quod nobis
              beatae dolores neque? Cum libero, accusamus facere similique quo
              nisi ipsum vitae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum illo voluptatum quidem id, molestiae ex
              maiores. Quod nobis
            </Text>
          </Paper>
        </ScrollArea>
      </Group>
      <SkillsTable list={hardSkills} title={"Hard Skills"} color="green" />
      <SkillsTable list={softSkills} title={"Soft Skills"} color="pink" />
    </Stack>
  );
}
