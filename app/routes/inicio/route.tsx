import { Suspense } from "react";
import Inicio from "./Inicio";
import { Oportunity } from "./Oportunity";
import { Services } from "./Services";
import LoadingComponent from "~/components/Loading.component";

export default function inicioLayout() {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        <Inicio />
        <Oportunity />
        <Services />
      </Suspense>
    </div>
  );
}
