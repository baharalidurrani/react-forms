import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ContainerDetails from "./ContainerDetails";
import DropOffDetails from "./DropOffDetails";
import GoodsDetails from "./GoodsDetails";
import PickupDetails from "./PickupDetails";
import ShipmentDetails from "./ShipmentDetails";
import ShipmentSummary from "./ShipmentSummary";
import SpecialDetails from "./SpecialDetails";
import VehicleDetails from "./VehicleDetails";

export default function CreateShipment(): React.ReactElement {
  console.log("🔄 CreateShipment Rendered");
  return (
    <Grid container spacing={2} margin={1}>
      <Grid container xs={12} md={8}>
        <Grid xs={6}>
          <PickupDetails />
        </Grid>
        <Grid xs={6}>
          <DropOffDetails />
        </Grid>
        <Grid xs={12}>
          <ShipmentDetails />
        </Grid>
        <Grid xs={12}>
          <VehicleDetails />
        </Grid>
        <Grid xs={12}>
          <GoodsDetails />
        </Grid>
        <Grid xs={12}>
          <ContainerDetails />
        </Grid>
        <Grid xs={12}>
          <SpecialDetails />
        </Grid>
      </Grid>
      <Grid xs={12} md={4}>
        <ShipmentSummary />
      </Grid>
    </Grid>
  );
}
