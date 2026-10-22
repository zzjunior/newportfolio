/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SectionHeader from "@/components/section/section-header";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { DATA } from "@/data/resume";

export default function HackathonsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full overflow-hidden">
      <SectionHeader
        badge="No momento"
        title="Projetos em que estou participando"
        description="Gosto de resolver problemas do dia a dia com projetos simples. Estes são os que estou tocando agora."
      />
      <Timeline>
        {DATA.hackathons.map((project) => (
          <TimelineItem
            key={project.title + project.dates}
            className="w-full flex items-start justify-between gap-10"
          >
            <TimelineConnectItem className="flex items-start justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
              />
            </TimelineConnectItem>
            <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
              <time className="text-xs text-muted-foreground">{project.dates}</time>
              <h3 className="font-semibold leading-none">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
              <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                {project.description}
              </p>
              <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                {project.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                      {link.icon}
                      {link.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
