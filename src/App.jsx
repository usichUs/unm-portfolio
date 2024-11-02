import "@mantine/core/styles.css";
import { Alert, Flex, MantineProvider } from "@mantine/core";
import NavBar from "./components/Tabs/NavBar";
import Profile from "./components/AboutMe/Profile";
import useFetch from "./hooks/useFetch";
import { IconAlertCircle, IconLoader } from "@tabler/icons-react";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const { data, error, pending } = useFetch({
    url: "http://localhost:8000/data",
  });
  // npx json-server --watch data/db.json --port 8000
  return (
    <MantineProvider defaultColorScheme="dark">
      <NavBar
        section_1={<Profile />}
        section_2={
          pending ? (
            <Alert
              variant="light"
              color="green"
              title="Alert title"
              icon={<IconLoader />}
            >
              Loading...
            </Alert> // Показать индикатор загрузки, пока данные загружаются
          ) : error ? (
            <Alert
              variant="light"
              color="violet"
              title="Alert title"
              icon={<IconAlertCircle />}
            >
              Error: {error}
            </Alert>
          ) : (
            data && <Gallery data={data} />
          )
        }
        section_3={null}
      />
    </MantineProvider>
  );
}

export default App;
