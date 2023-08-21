import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function HookForm(): React.ReactElement {
  console.log("🪝🪝🪝 HookForm Rendered");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Box m={3}>
        <Typography variant="h4" align={"center"}>
          Hook Form
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            required
            label="Name"
            placeholder="Hello World"
            // name="name"
            {...register("example")}
          />
          <TextField
            required
            label="Password"
            type="password"
            placeholder="********"
            // name="password"
            {...register("exampleRequired", { required: true })}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input defaultValue="test" {...register("example")} /> */}

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        {/* <input type="submit" /> */}
      </form>
    </>
  );
}
