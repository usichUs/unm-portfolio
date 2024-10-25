import { Center, Container } from "@mantine/core";
import Gallery from "../components/Gallery/Gallery";

export default function GallerySection({ data }) {
  return (
    <Center miw="100%">
      <Container>
        <Gallery data={data} />
      </Container>
    </Center>
  );
}
