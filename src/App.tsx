import { Box, Container, Divider } from "@mui/material";
import FormikForm from "./forms/formik/FormikForm";
import HookForm from "./forms/hook/HookForm";
import VanillaForm from "./forms/vanilla/VanillaForm";
import CustomMuiTheme from "./theme/CustomMuiTheme";

export default function App() {
  console.log("🚀🚀🚀 App Rendered");

  return (
    <CustomMuiTheme>
      <Container>
        <VanillaForm />
        <Box m={3} />
        <Divider />
        <Box m={3} />
        <HookForm />
        <Box m={3} />
        <Divider />
        <Box m={3} />
        <FormikForm />
      </Container>
    </CustomMuiTheme>
  );
}
