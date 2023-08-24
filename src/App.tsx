import { Box, Container, Divider } from "@mui/material";
import FormikForm from "./forms/formik/FormikForm";
import HookForm from "./forms/hook/HookForm";
import VanillaForm from "./forms/vanilla/VanillaForm";
import CustomMuiTheme from "./theme/CustomMuiTheme";
import CreateShipmentDialog from "./shipment/CreateShipmentDialog";

export default function App() {
  console.log("🚀🚀🚀 App Rendered");

  return (
    <CustomMuiTheme>
      <Container>
        <CreateShipmentDialog />
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
