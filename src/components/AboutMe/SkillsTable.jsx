import { Badge, Group, Stack, Title } from "@mantine/core";

export default function SkillsTable({ list, title, color }) {
  return (
    <Stack justify="center" align="center">
      <Title>{title}</Title>
      <Group justify="center">
        {list.map((el) => (
          <Badge key={el} variant="dot" color={color}>
            {el}
          </Badge>
        ))}
      </Group>
    </Stack>
  );
}
