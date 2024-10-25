import { Anchor, Button, Card, Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function GalleryPart({ src_link, title, src_href }) {
  return (
    <Card>
      <Card.Section>
        <Image src={src_link} radius="md" h="200px" w="200px" m="md"></Image>
      </Card.Section>

      <Anchor href={src_href} target="_blank" p="0">
        <Button fullWidth="true" rightSection={<IconArrowRight />}>
          Go to! {title}
        </Button>
      </Anchor>
    </Card>
  );
}
