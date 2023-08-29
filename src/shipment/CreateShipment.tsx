import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { FormEvent, useEffect, useRef } from "react";
import ContainerDetails from "./ContainerDetails";
import DropOffDetails from "./DropOffDetails";
import GoodsDetails from "./GoodsDetails";
import PickupDetails from "./PickupDetails";
import ShipmentDetails from "./ShipmentDetails";
import ShipmentSummary from "./ShipmentSummary";
import SpecialDetails from "./SpecialDetails";
import VehicleDetails from "./VehicleDetails";

export default function CreateShipment({
  submitCounter,
  submitHandler,
}: {
  submitCounter: number;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}): React.ReactElement {
  console.log("🔄 CreateShipment Rendered");

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    /** Mimic method being called by parent component. */
    submitCounter && formRef.current?.requestSubmit();
  }, [submitCounter]);

  return (
    <form
      onSubmit={submitHandler}
      ref={formRef}
      name="shipperForm"
      method="dialog"
    >
      <Grid container spacing={2} margin={1}>
        <Grid container xs={12} md={8}>
          <Grid xs={12}>
            <ShipmentDetails />
          </Grid>
          <Grid xs={12}>
            <VehicleDetails />
          </Grid>
          <Grid xs={6}>
            <PickupDetails />
          </Grid>
          <Grid xs={6}>
            <DropOffDetails />
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
        <Grid xs={12} md={4}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
