import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-medium mb-8 text-center">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="bg-[#FDF8F6] rounded-lg border-none">
          <AccordionTrigger className="px-6 hover:no-underline">
            Kan ik mijn product retourneren als ik niet tevreden ben?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            Ja, u heeft 30 dagen retourrecht. Als u niet tevreden bent, kunt u het product kosteloos retourneren.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-[#FDF8F6] rounded-lg border-none">
          <AccordionTrigger className="px-6 hover:no-underline">
            Is de verzending écht gratis?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            Ja, wij bieden gratis verzending aan op al onze producten binnen Nederland.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-[#FDF8F6] rounded-lg border-none">
          <AccordionTrigger className="px-6 hover:no-underline">
            Hoe kan ik veilig betalen?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            U kunt veilig betalen via iDEAL, creditcard, PayPal of Bancontact.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};