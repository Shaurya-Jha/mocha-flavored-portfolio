import { Component } from "solid-js";
import { Container } from "./Container";
import { WORK_EXPERIENCES } from "../../lib/data";
import { calculateDuration } from "../../lib/utils";

export const Work: Component = () => {
  return (
    <Container>
      <div class="flex flex-col h-full w-full gap-4">
        {WORK_EXPERIENCES.map((exp) => {
          const totalMonths = calculateDuration(exp.startDate, exp.endDate);

          let durationString = "";
          if (totalMonths >= 12) {
            const years = Math.floor(totalMonths / 12);
            const remainingMonths = totalMonths % 12;
            durationString =
              remainingMonths > 0
                ? `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
                : `${years} year${years !== 1 ? "s" : ""}`;
          } else {
            durationString = `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;
          }

          return (
            <div class="flex flex-col">
              <div class="my-4">
                <p class="text-lg font-medium">{exp.role}</p>

                <p class="text-sm mt-1.5">
                  @{exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      class="underline underline-offset-2"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}{" "}
                  • {durationString}
                </p>

                <div class="flex flex-row items-stretch gap-3 my-4">
                  {/*<div class="w-0.5 bg-[#664343] rounded-full shrink-0" />*/}
                  <p>{exp.briefSummary}</p>
                </div>

                {/*{exp.highlights && exp.highlights.length > 0 && (
                  <ul class="mt-2 list-disc text-md ml-5">
                    {exp.highlights.map((highlight) => (
                      <li>{highlight}</li>
                    ))}
                  </ul>
                )}*/}

                <div class="flex flex-wrap items-center gap-2 my-2">
                  <span class="font-medium">Tech:</span>
                  {exp.keyTechnologies.map((tech, index) => (
                    <span class="flex items-center gap-2">
                      {tech}
                      {index < exp.keyTechnologies.length - 1 && (
                        <span class="inline-block w-1 h-1 rounded-full bg-[#664343]" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  )
}