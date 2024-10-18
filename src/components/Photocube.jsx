import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const PhotoCube = ({ images }) => {
  const cubeRef = useRef();
  const textures = useTexture(images);

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef} scale={[2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial attach="material-0" map={textures[0]} />
      <meshStandardMaterial attach="material-1" map={textures[1]} />
      <meshStandardMaterial attach="material-2" map={textures[2]} />
      <meshStandardMaterial attach="material-3" map={textures[3]} />
      <meshStandardMaterial attach="material-4" map={textures[4]} />
      <meshStandardMaterial attach="material-5" map={textures[5]} />
    </mesh>
  );
};

export default PhotoCube;
