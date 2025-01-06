import React, { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

export const FeatureToggles = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);

  return (
    <section className="relative mx-auto max-w-6xl px-2 md:px-4">
      <SectionHeading>À propos de So&apos;Clean 🫧</SectionHeading>
      <SectionSubheading>
        Un concept novateur pour vos essentiels !
      </SectionSubheading>
      <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700 leading-relaxed">
        Chez <strong>So'Clean</strong>, nous avons pour mission de redonner vie à vos articles préférés : sneakers, sacs, casquettes, et bien plus. 
        Grâce à notre expertise, chaque pièce est traitée avec soin pour garantir une qualité irréprochable. 
        Venez découvrir nos services et laissez-nous prendre soin de vos essentiels !
      </p>
      <div className="w-full">
        <div className="mb-9 grid grid-cols-3 gap-3 sm:grid-cols-3">
          {data.map((d) => (
            <ToggleButton
              key={d.id}
              id={d.id}
              selected={selected}
              setSelected={setSelected}
            >
              {d.title}
            </ToggleButton>
          ))}
        </div>
        <div className="w-full translate-y-2 rounded-xl bg-zinc-900">
          <div className="w-full -translate-y-2 rounded-lg shadow-lg">
            <FeatureDisplay
              selected={selected}
              cardTitle={el!.cardTitle}
              cardSubtitle={el!.cardSubtitle}
              Component={el!.Component}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
