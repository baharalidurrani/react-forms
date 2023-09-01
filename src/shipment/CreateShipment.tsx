import Grid from '@mui/material/Unstable_Grid2';
import { FormEvent, useEffect, useRef } from 'react';
import ContainerDetails from './ContainerDetails';
import DropOffDetails from './DropOffDetails';
import GoodsDetails from './GoodsDetails';
import PickupDetails from './PickupDetails';
import ShipmentDetails from './ShipmentDetails';
import ShipmentSummary from './ShipmentSummary';
import SpecialDetails from './SpecialDetails';
import VehicleDetails from './VehicleDetails';

export default function CreateShipment({
  submitCounter,
  submitHandler,
}: {
  submitCounter?: number;
  submitHandler?: (event: FormEvent<HTMLFormElement>) => void;
}): React.ReactElement {
  console.log('🔄 CreateShipment Rendered');

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    /** Mimic method being called by parent component. */
    submitCounter && formRef.current?.requestSubmit();
  }, [submitCounter]);

  const localSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const shipperForm = new FormData(event.currentTarget);
    const shipperObject = Object.fromEntries(shipperForm.entries());
    console.log('shipperObject', shipperObject);
  };

  return (
    <form onSubmit={submitHandler || localSubmitHandler} ref={formRef} name="shipperForm" method="dialog">
      <Grid container spacing={2} disableEqualOverflow margin={1}>
        <Grid container xs={12} lg={8}>
          <Grid xs={12}>
            <ShipmentDetails />
          </Grid>
          <Grid xs={12}>
            <VehicleDetails />
          </Grid>
          <Grid xs={12} md={6}>
            <PickupDetails />
          </Grid>
          <Grid xs={12} md={6}>
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
        <Grid xs={12} lg={4}>
          <ShipmentSummary />
        </Grid>
      </Grid>
    </form>
  );
}
