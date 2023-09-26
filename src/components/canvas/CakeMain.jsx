import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cakemain = ({ isMobile, scale }) => {
  const Cakemain = useGLTF("./cake_main/scene.gltf");
  const [rotationY, setRotationY] = useState(0);
  useFrame(({ clock }) => {
    // Update the Y-axis rotation every frame
    setRotationY(clock.elapsedTime * 0.4); // Change the 0.2 to adjust the rotation speed
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor='#914983' />
      {/* add light */}
      <spotLight
        color='#fbe7fb'
        position={[500, 30, 10]}
        angle={1}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight color='#e7a3e6' intensity={1} />
      <primitive
        rotation-y={rotationY}
        object={Cakemain.scene}
        scale={scale}
        position={[0, -0.06, 0]}
        rotation={[0.02, 0, 0.08]}
      />
    </mesh>
  );
};

//create 3D models
const CakemainCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Add a listener for the scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScale(1 - scrollTop / 1000); // Change the 1000 to adjust the shrinking speed
    };
    window.addEventListener("scroll", handleScroll);
    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [8, 4, 0], fov: 1.3 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
        />
        <Cakemain isMobile={isMobile} scale={scale} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CakemainCanvas;