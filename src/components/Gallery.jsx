import { useState } from "react";
import GalleryPart from "./GalleryPart";
import { Group } from "@mantine/core";

export default function Gallery({ data }) {
  const [gallery, setGallery] = useState(data);

  return (
    <Group justify="center" align="center">
      {gallery.map((el) => (
        <GalleryPart src_link={el.src_link} title={el.title} key={el.index} />
      ))}
    </Group>
  );
}
