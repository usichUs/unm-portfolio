import { Center, Container } from "@mantine/core";
import Gallery from "../components/Gallery";

export default function GallerySection({ data }) {
  return (
    <Center w="100vw">
      <Container>
        <Gallery data={data} />
      </Container>
    </Center>
  );
}
