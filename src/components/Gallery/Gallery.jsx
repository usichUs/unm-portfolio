import GalleryPart from "./GalleryPart";
import { Flex } from "@mantine/core";

export default function Gallery({ data }) {
  return (
    <Flex justify="center" align="center" direction="row" wrap="wrap">
      {data.map((el) => (
        <GalleryPart
          src_link={el.src_link}
          title={el.title}
          key={el.index}
          src_href={el.src_href}
        />
      ))}
    </Flex>
  );
}
