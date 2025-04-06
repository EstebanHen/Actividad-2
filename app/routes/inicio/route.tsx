import { Suspense } from "react";
import Inicio from "./Inicio";
import { Oportunity } from "./Oportunity";
import { Services } from "./Services";
import LoadingComponent from "~/components/Loading.component";
import DonationPage from './DonationPage';
import WhatsAppSupport from 'app/components/WhatsAppSupport';


export default function inicioLayout() {
  return (
    <div>
      <Suspense fallback={<LoadingComponent />}>
        
        <Inicio />
        <Oportunity />
        <Services />
        <WhatsAppSupport />
        <DonationPage />
      </Suspense>
    </div>
  );
}
