import pyrepl from "../src/pyrepl"

const pyscript_template = {__html: pyrepl};


export default function Index() {

  return (<div>
    <div className="pyscript" dangerouslySetInnerHTML={pyscript_template} />
    <style jsx>{`
      .pyscript {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    
    `}</style>
  </div>)
}