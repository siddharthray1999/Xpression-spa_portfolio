import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Technologies from "./components/Technologies";

import PhotoCube from "./components/Photocube";
import image1 from "./assets/tech/css.png";
import image2 from "./assets/tech/html.png";
import image3 from "./assets/tech/figma.png";
import image4 from "./assets/tech/javascript.png";
import image5 from "./assets/tech/reactjs.png";
import image6 from "./assets/tech/tailwind.png";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <div style={{ height: "100vh" }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />

            <PhotoCube
              images={[image1, image2, image3, image4, image5, image6]}
            />

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
