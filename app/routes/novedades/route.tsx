import { Suspense } from "react";
import LoadingComponent from "~/components/Loading.component";
import { Carousel } from "./Carousel";
import { SearchAdvanced } from "./SearchAdvanced";
import { OportunityNews } from "./OportunityNews";

export default function novedadesLayout(){
  return (
    <div>
      <Suspense fallback={<LoadingComponent/>}>
          <Carousel/>
          <SearchAdvanced/>
          <OportunityNews/>
      </Suspense>
    </div>
  )
}