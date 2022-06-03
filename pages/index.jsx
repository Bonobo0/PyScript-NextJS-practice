import { useEffect } from "react";
import pyscript from "../src/pyscript";

const pyscript_template = { __html: pyscript };

export default function Index() {
  useEffect(() => {
    const refferer = localStorage.getItem("refferer");
    if (refferer == `${location.protocol}//${location.host}/pythonRepl`) {
      localStorage.setItem("refferer", "");
      location.reload();
    }
  }, []);

  return (
    <div>
      <div className="pyscript" dangerouslySetInnerHTML={pyscript_template} />

      <style jsx>{`
        .pyscript {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
