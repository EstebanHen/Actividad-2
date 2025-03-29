import { Suspense } from "react";
import FormLogin from "./formLogin";
import LoadingComponent from "~/components/Loading.component";

export default function ingresoLayout() {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        <FormLogin />
      </Suspense>
    </div>
  );
}
