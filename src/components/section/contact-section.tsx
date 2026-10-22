import Link from "next/link";
import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn, whatsappLink } from "@/lib/utils";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contato</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="#8b5cf6"
          maxOpacity={0.22}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Vamos trabalhar juntos?
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Tem um projeto em mente ou uma vaga para conversar? Me chama no
          WhatsApp, por email ou no LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "bg-violet-600 text-white hover:bg-violet-700")}
          >
            <Icons.whatsapp className="size-4" />
            WhatsApp
          </Link>
          <Link
            href={DATA.contact.social.email.url}
            className={buttonVariants({ variant: "outline" })}
          >
            <Icons.email className="size-4" />
            Email
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <Icons.linkedin className="size-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
