import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Donut = () => {
  const donut = useGLTF("./donut/scene.gltf");
  const [rotationX, setRotationX] = useState(0);

  useFrame(({ clock }) => {
    // Update the Y-axis rotation every frame
    setRotationX(clock.elapsedTime * 0.5); // Change the 0.2 to adjust the rotation speed
  });



  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="#914983" />
      <spotLight
        color="#fbe7fb"
        position={[30, 80, -10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight color="#f189e1" intensity={1} />
      <primitive
        rotation-x={rotationX}
        object={donut.scene}
        scale={6}
        position={[0, 0, 0]}
        rotation={[0.54, 0, 0.5]}
      />
    </mesh>
  );
};

const DonutCanvas = () => {


  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 12,
        position: [-4, 3, 6],
      }}
    >
      {/* Suspense is for something to show when loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* move around the 3d object using pointer */}
        <Donut/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default DonutCanvas;