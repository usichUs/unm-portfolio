import { Group, Image, Paper, Text, Box } from "@mantine/core";

export default function Profile() {
  return (
    <>
      <Group wrap="wrap" justify="center">
        <Box>
          <Image src="/src/assets/me.jpg" maw="100%" mah="20rem" radius="md" />
        </Box>
        <Paper withBorder shadow="xs" p="xl" radius="md">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo
            voluptatum quidem id, molestiae ex maiores. Quod nobis beatae
            dolores neque? Cum libero, accusamus facere similique quo nisi ipsum
            vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum illo voluptatum quidem id, molestiae ex maiores. Quod nobis
          </Text>
        </Paper>
      </Group>
    </>
  );
}
