import { Suspense } from "react";
import { FormRegister } from "./FormRegister";
import { GridRegister } from "./GridRegister";
import LoadingComponent from "~/components/Loading.component";

export default function registroLayout() {
  return (
    <div >
      <Suspense fallback={<LoadingComponent/>}>
      <FormRegister/>
      <GridRegister/>
      </Suspense>
    </div>
  );
}
