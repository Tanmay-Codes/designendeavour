import React from "react";
import "./services.css";
import Card from "./card/Card"
import stb from "../statics/services_imgs/stb.jpg"
import archi from "../statics/services_imgs/archi.png"
import precast from "../statics/services_imgs/precast.jpg"
function Services() {
  return (
    <div class="service-container">
      <div class="card-container">
        <Card heading = {"Scan To BIM"} desc = {"We provide Scan To BIM work using softwares Allplan Architecture, Revit, AutoCAD and Revit"} image = {stb}/>
        <Card heading = {"Precast Structural"} desc = {"High detail Precast drawings as per the required standards of the clients, Plan layouts and production drawings on demand"} image = {precast}/>
        <Card heading = {"Architectural Model"} desc = {"Providing extreme detailed architectural models, plan layouts, section and elevations as per architects demand and LOD 100 to 500"} image = {archi}/>
        <Card heading = {"Scan To BIM"} desc = {"We provide Scan To BIM work using softwares Allplan Architecture, Revit, AutoCAD and Revit"} image = {stb}/>
      </div>
    </div>
  );
}

export default Services;
