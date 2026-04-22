import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormulairePublication from "@/components/FormulairePublication";
import BootstrapClient from "@/components/BootstrapClient";

// Page formulaire — reproduit formulaire.html du lab3
export default function FormulairePage() {
  return (
    <>
      <Header />
      <FormulairePublication />
      <Footer />
      <BootstrapClient />
    </>
  );
}
