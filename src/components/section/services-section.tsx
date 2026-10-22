import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section/section-header";
import { DATA } from "@/data/resume";
import { whatsappLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ServicesSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <SectionHeader
        badge="Serviços"
        title="Como posso ajudar seu negócio"
        description="Pela TJ Agência, desenvolvo soluções sob medida para tirar a sua ideia do papel."
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {DATA.services.map((service, id) => (
          <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-3 rounded-xl border border-border p-5 transition-colors duration-200 hover:border-violet-500/60">
              <service.icon className="size-6 text-violet-500" aria-hidden />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold leading-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              <Link
                href={whatsappLink(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-violet-500 transition-colors"
              >
                Solicitar orçamento
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
