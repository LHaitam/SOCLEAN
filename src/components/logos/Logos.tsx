import { motion } from "framer-motion";
import {
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";
import { IoNewspaper } from "react-icons/io5"
import { IconType } from "react-icons";
import { FiStar } from "react-icons/fi";
import { FaExclamationCircle, FaExclamationTriangle } from "react-icons/fa";


export const Logos = () => {
  return (
    <section id="logos" className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-[#47BCFD] md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={IoNewspaper} name="NEW CONCEPT" />
    <LogoItem Icon={FiStar } name="NEW CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NEW CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NEW CONCEPT" />
    <LogoItem Icon={FiStar } name="NEW CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NEW CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NEW CONCEPT" />
    <LogoItem Icon={FiStar } name="NEW CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NEW CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NEW CONCEPT" />
    <LogoItem Icon={FiStar } name="NEW CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NEW CONCEPT" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={IoNewspaper} name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FiStar } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FiStar } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FiStar } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={IoNewspaper} name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FiStar } name="NOUVEAU CONCEPT" />
    <LogoItem Icon={FaExclamationTriangle } name="NOUVEAU CONCEPT" />
  </>
);
