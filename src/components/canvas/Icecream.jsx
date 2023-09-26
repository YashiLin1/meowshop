import React, { Suspense, useEffect, useState  } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Icecream = () => {
  const icecream = useGLTF("./icecream/scene.gltf");
  const [rotationY, setRotationY] = useState(0);
  useFrame(({ clock }) => {
    // Update the Y-axis rotation every frame
    setRotationY(clock.elapsedTime * 0.5); // Change the 0.2 to adjust the rotation speed
  });
  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor='#914983' />
      <spotLight
        color='#fbe7fb'
        position={[30, 80, -10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight color='#f189e1' intensity={1} />
      <primitive 
      rotation-y={rotationY}
      object={icecream.scene} 
      scale={0.1} 
      position={[-0.1, -0.6, 0]}
      rotation={[0.5, 0, 0.3]} 
      />
    </mesh>
  );

};

const IcecreamCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
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
        <Icecream />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default IcecreamCanvas;