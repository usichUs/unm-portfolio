import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import Gallery from "./components/Gallery";

function App() {
  let list = [
    {
      index: 0,
      src_link: "/src/assets/BullsCows.png",
      title: "Bulls-Cows",
      src_href: "https://usichus.github.io/bulls-cows/",
    },
    {
      index: 1,
      src_link: "/src/assets/FileSystem.png",
      title: "File System",
      src_href: "https://usichus.github.io/courseWork/",
    },
  ];
  return (
    <MantineProvider defaultColorScheme="dark">
      <Container size="xs">
        <Gallery data={list} />
      </Container>
    </MantineProvider>
  );
}

export default App;
