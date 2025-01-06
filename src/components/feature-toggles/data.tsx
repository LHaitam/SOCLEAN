import React from "react";
import { FiCheck, FiEdit, FiEye } from "react-icons/fi";

const ShoesComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">SO&apos;CLEAN SERVICE</span>
        <div className="flex items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-blue-900">
          <FiCheck />
          <span>CHAUSSURES</span>
        </div>
      </div>
      <div className="mb-1 text-xl font-medium">Nettoyage et soin des chaussures</div>
      <p className="text-sm leading-relaxed text-zinc-600">
        Nous restaurons et nettoyons vos chaussures préférées en utilisant des produits spécialisés et des techniques
        professionnelles pour redonner à vos sneakers leur éclat d'origine.
      </p>
    </div>
  );
};

const CapsComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">SO&apos;CLEAN SERVICE</span>
        <div className="flex items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-green-900">
          <FiCheck />
          <span>CASQUETTES</span>
        </div>
      </div>
      <div className="mb-1 text-xl font-medium">Entretien des casquettes</div>
      <p className="text-sm leading-relaxed text-zinc-600">
        Qu'il s'agisse de casquettes de sport ou de pièces de collection, nous nettoyons et restaurons vos casquettes
        avec soin, en préservant leur forme et leur couleur.
      </p>
    </div>
  );
};

const BagsComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">SO&apos;CLEAN SERVICE</span>
        <div className="flex items-center gap-1 rounded bg-purple-100 px-1.5 py-0.5 text-purple-900">
          <FiCheck />
          <span>SACS à MAIN</span>
        </div>
      </div>
      <div className="mb-1 text-xl font-medium">Nettoyage des sacs</div>
      <p className="text-sm leading-relaxed text-zinc-600">
        Nous prenons soin de vos sacs, en éliminant les taches et les salissures, tout en préservant leur matériau et
        leur design. Donnez une seconde vie à vos sacs préférés !
      </p>
    </div>
  );
};

export const data = [
  {
    id: 1,
    title: "CHAUSSURES 👟",
    Component: ShoesComponent,
    cardTitle: "Nettoyage et soin des chaussures",
    cardSubtitle:
      "Redonnez vie à vos sneakers avec nos services de nettoyage et de restauration haut de gamme.",
  },
  {
    id: 2,
    title: "CASQUETTES 🧢",
    Component: CapsComponent,
    cardTitle: "Entretien des casquettes",
    cardSubtitle:
      "Nous nettoyons et restaurons vos casquettes en préservant leur forme et leur couleur.",
  },
  {
    id: 3,
    title: "SACS à MAIN 👜",
    Component: BagsComponent,
    cardTitle: "Nettoyage des sacs",
    cardSubtitle:
      "Redonnez un éclat à vos sacs avec notre service spécialisé de nettoyage et d'entretien.",
  },
];
