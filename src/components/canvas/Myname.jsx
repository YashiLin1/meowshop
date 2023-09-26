import React, { Suspense, useState  } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Myname = () => {
  const myname = useGLTF("./myname/yashilin.glb");
  const [positionY, setPositionY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useFrame(({ clock }) => {
    // Update the y-axis position every frame
    setPositionY(Math.sin(clock.elapsedTime) * 0.04); // Change the 0.5 to adjust the hovering height
    // Rotate the 3D object back and forth on the x-axis and y-axis
    setRotationX(Math.sin(clock.elapsedTime) * 0.1); // Change the 0.1 to adjust the rotation speed
    setRotationY(Math.sin(clock.elapsedTime) * 0.3); // Change the 0.1 to adjust the rotation speed
  });

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='#ffffff' />
      <spotLight
        color='#ffffff'
        position={[3, 160, 3]}
        angle={1}
        penumbra={1}
        intensity={1}
      />
        <pointLight 
      color='#efbfee' intensity={1} 
      position={[50, 20, 0]}
      />
       <pointLight 
        color='#ffffff' intensity={0.7} 
        position={[80, -150, 60]}
        />
      <primitive
        position-y={positionY}
        object={myname.scene}
        scale={0.1}
        position={[0, 0, 0]}
        rotation={[rotationX, rotationY, 0]}
      />
    
    </mesh>
  );
};
const MynameCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 3,
        position: [1, 1, 5],
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
        <Myname />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MynameCanvas;