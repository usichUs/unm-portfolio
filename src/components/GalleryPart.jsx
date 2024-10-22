import { Button, Card, Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function GalleryPart({ src_link, title, src_href }) {
  return (
    <Card>
      <Card.Section>
        <Image src={src_link} radius="md" h="200px" w="200px" m="md"></Image>
      </Card.Section>

      <Button rightSection={<IconArrowRight />}>Go to! {title}</Button>
    </Card>
  );
}
