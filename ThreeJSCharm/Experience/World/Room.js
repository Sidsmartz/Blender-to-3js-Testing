import Experience from "../Experience";
import * as THREE from "three";

export default class Room {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        console.log(this.actualRoom);

        this.setScene();
    }

    setScene(){
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(.25,.25,.25);
        this.actualRoom.rotation.y = Math.PI*5/4;
    }
    
    resize(){
    }

    update(){
    }
}