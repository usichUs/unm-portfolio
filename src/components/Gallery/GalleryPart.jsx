import { Anchor, Button, Card, Image, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function GalleryPart({ src_link, title, src_href }) {
  return (
    <Card m="md">
      <Card.Section>
        <Image src={src_link} radius="md" m="md" h="200px" w="200px"></Image>
      </Card.Section>

      <Anchor href={src_href} target="_blank" p="0">
        <Button fullWidth="true" rightSection={<IconArrowRight />}>
          <Text size="md" fw="700">
            Go to! {title}
          </Text>
        </Button>
      </Anchor>
    </Card>
  );
}
