import GalleryPart from "./GalleryPart";
import { Group } from "@mantine/core";

export default function Gallery({ data }) {
  return (
    <Group justify='center'>
      {data.map((el) => (
        <GalleryPart
          src_link={el.src_link}
          title={el.title}
          key={el.index}
          src_href={el.src_href}
        />
      ))}
    </Group>
  );
}
{
  /* <Flex justify="center" align="center" direction="row" wrap="wrap">
</Flex> */
}
