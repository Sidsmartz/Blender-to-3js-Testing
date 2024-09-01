import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import Time from "./Utils/Time.js";
import World from "./World/World.js";
import Resources from "./Utils/resources.js";
import assets from "./Utils/assets.js";

export default class Experience {
    static instance;

    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera(); // Pass `canvas` if needed, e.g., `new Camera(this.canvas)`
        this.renderer = new Renderer(); // Pass `canvas` if needed
        this.resources = new Resources(assets); // Pass `assets` to Resources
        this.world = new World();

        // Set up update and resize event listeners
        this.time.on("update", () => {
            this.update();
        });

        this.sizes.on("resize", () => {
            this.resize();
        });
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
}
