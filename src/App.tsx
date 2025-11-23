import { DescriptionProvider } from "@context/DescriptionProvider";
import Home from "@components/pages/Home";
import GlobalStyles from "@components/atoms/GlobalStyles";
import { ThemeProvider } from "@context/ThemeProvider";

const App = () => (
  <ThemeProvider>
    <GlobalStyles />
    <DescriptionProvider>
      <Home />
    </DescriptionProvider>
  </ThemeProvider>
);

export default App;
