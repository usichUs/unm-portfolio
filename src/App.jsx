import "@mantine/core/styles.css";
import {
  Alert,
  Button,
  createTheme,
  Loader,
  MantineProvider,
} from "@mantine/core";
import NavBar from "./components/Tabs/NavBar";
import Profile from "./components/AboutMe/Profile";
import useFetch from "./hooks/useFetch";
import { IconAlertCircle } from "@tabler/icons-react";
import Gallery from "./components/Gallery/Gallery";

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.55,
  defaultGradient: {
    from: "green",
    to: "teal",
    deg: 45,
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "green",
        variant: "gradient",
      },
    }),
  },
});

function App() {
  const { data, error, pending } = useFetch({
    url: "http://localhost:8000/data",
  });
  // npx json-server --watch data/db.json --port 8000 бабаб
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <NavBar
        section_1={<Profile />}
        section_2={
          pending ? (
            <Alert
              variant="light"
              color="green"
              title="Alert title"
              icon={<Loader color="green" size="xs" type="bars" />}
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
