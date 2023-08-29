import * as icon from "../styles/Icons"

import style from "../styles/Export.module.css"

export default function Export(props) {
  const handleExport=async() =>{
    try {
        let action=props.action;
        let colors=props.colors
      const response = await fetch(`http://localhost:3000/${props.destination}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({colors,action})
      });

      if (response.ok) {
        alert("sent succesfully");
        console.log(colors)
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

}


  return (
    <div>
      <button className={style.button}onClick={handleExport}>{icon.upload}Export</button>
    </div>
  )
}
