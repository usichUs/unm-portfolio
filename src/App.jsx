import "@mantine/core/styles.css";
import { Flex, Group, MantineProvider } from "@mantine/core";
import GallerySection from "./sections/GallerySection";
import NavBar from "./components/Tabs/NavBar";

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
      <Flex w="100vw" h="100vh" direction="column">
        <NavBar
          section_1={<GallerySection data={list} />}
          section_2={<GallerySection data={list} />}
          section_3={null}
        />
      </Flex>
    </MantineProvider>
  );
}

export default App;
