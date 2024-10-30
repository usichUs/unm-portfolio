import { Container, Flex, Group, Image, Paper, Text } from "@mantine/core";

export default function Profile() {
  return (
    <>
      <Container>
        <Flex direction="row" gap="md">
          <Image src="/src/assets/me.jpg" maw="400px" mah="400px" radius="md" />
          <Paper withBorder shadow="xs" p="xl" radius="md" miw="100px">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              illo voluptatum quidem id, molestiae ex maiores. Quod nobis beatae
              dolores neque? Cum libero, accusamus facere similique quo nisi
              ipsum vitae.
            </Text>
          </Paper>
        </Flex>
      </Container>
    </>
  );
}
