import Window from "@components/molecules/Window";
import { DescriptionProvider } from "@context/DescriptionProvider";
import MainWindowToolbar from "./MainWindowToolbar";
import MainWindowContent from "./MainWindowContent";

const MainWindow = () => {
  const [description] = DescriptionProvider.useDescription();

  return (
    <Window
      title="md4.exe"
      footerContent={description}
      toolbarContent={<MainWindowToolbar />}
    >
      <MainWindowContent />
    </Window>
  );
};

export default MainWindow;
