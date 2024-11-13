"use client";

import { createContext, useContext, useState } from "react";
import clsx from "clsx";

const AccordionContext = createContext();

function AccordionProvider({ children, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onOpen = (index) => {
    setActiveIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

function Panel({ title, children, index }) {
  const { activeIndex, onOpen } = useContext(AccordionContext);

  const isOpen = activeIndex === index;
  const toggle = () => onOpen(index);

  return (
    <div
      className={
        "p-2 border-t border-t-black flex flex-col justify-center items-center"
      }
    >
      <h2 className={"text-xl font-bold"}>{title}</h2>
      <div className={clsx({ hidden: !isOpen })}>{children}</div>
      {!isOpen && (
        <button
          className={"border border-blue-500 rounded text-blue-500"}
          onClick={toggle}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion({ onChange }) {
  return (
    <AccordionProvider onChange={onChange}>
      <div className={"flex flex-col border border-black rounded"}>
        <Panel title={"Section 1"} index={1}>
          Content 1
        </Panel>
        <Panel title={"Section 2"} index={2}>
          Content 2
        </Panel>
        <Panel title={"Section 3"} index={3}>
          Content 3
        </Panel>
      </div>
    </AccordionProvider>
  );
}
