/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGSAP } from "@gsap/react";
import {
  Html,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef } from "react";
import {
  CameraHelper,
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Mod = () => {
  const { scene } = useGLTF("/model2.gltf");

  return <primitive object={scene} scale={[20, 20, 20]} />;
};
const SpotlightWithHelper = (props) => {
  const spotlightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (spotlightRef.current) {
      const helper = new SpotLightHelper(spotlightRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return (
    <spotLight
      receiveShadow
      castShadow
      ref={props.help === true ? spotlightRef : null}
      intensity={props.intensity}
      penumbra={0.2}
      position={props.position}
    />
  );
};
const DirectionalLightWithHelper = (props) => {
  const directionallightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (directionallightRef.current) {
      const helper = new DirectionalLightHelper(directionallightRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return (
    <directionalLight
      castShadow
      receiveShadow
      ref={props.help === true ? directionallightRef : null}
      intensity={props.intensity}
      position={props.position}
    />
  );
};
const PointLightWithHelper = (props) => {
  const pointlightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (pointlightRef.current) {
      const helper = new PointLightHelper(pointlightRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return (
    <pointLight
      castShadow
      receiveShadow
      ref={props.help === true ? pointlightRef : null}
      intensity={props.intensity}
      position={props.position}
    />
  );
};

const PerspectiveCameraWithHelper = (props) => {
  const cameraRef = useRef();
  const { scene, set } = useThree();

  useEffect(() => {
    if (cameraRef.current) {
      const helper = new CameraHelper(cameraRef.current);
      scene.add(helper);

      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return <perspectiveCamera ref={cameraRef} position={props.position} />;
};
const useModelLoadingProgress = () => {
  const { progress } = useProgress();
  return progress;
};

const Model = () => {
  const pro = useModelLoadingProgress();
  useGSAP(() => {
    gsap.to("#ModelMain", {
      opacity: 1,
      duration: 2,
    });
  }, []);

  return (
    <Canvas
      id="ModelMain"
      className=" w-full translate-x-12 lg:translate-x-0 opacity-0 rounded-3xl scale-90 lg:scale-100"
    >
      <Suspense fallback={<Html>Loading ...</Html>}>
        <OrbitControls
          enableDamping={true}
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

        <PerspectiveCamera makeDefault position={[0, -2.5, 8]} />

        <SpotlightWithHelper help={false} position={[0, 2, 5]} intensity={15} />
        <PointLightWithHelper
          position={[0, 1, 1]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[0, 1, -1]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[1, 1, 1]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[1, 1, -1]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[-1, 1, 1]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[-1, 1, -1]}
          intensity={0.4}
          help={false}
        />
        {/* Front Lights */}
        <PointLightWithHelper
          position={[1, -2, 1]}
          intensity={0.5}
          help={false}
        />
        <PointLightWithHelper
          position={[-1, -2, 1]}
          intensity={0.5}
          help={false}
        />
        <PointLightWithHelper
          position={[0, -3, 1]}
          intensity={0.5}
          help={false}
        />
        {/* Back lights */}
        <PointLightWithHelper
          position={[1, -2, -1]}
          intensity={0.5}
          help={false}
        />
        <PointLightWithHelper
          position={[-1, -2, -1]}
          intensity={0.5}
          help={false}
        />
        <PointLightWithHelper
          position={[0, -3, -1]}
          intensity={0.5}
          help={false}
        />
        {/* Cloud Lights */}
        {/* Cloud Lights Inside */}
        <PointLightWithHelper
          position={[0, 2.5, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[-1, 2.3, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[1, 2.3, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[0, -0.5, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[2.2, -0.5, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[-2.2, -0.5, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[-2.7, 0.7, 0]}
          intensity={0.4}
          help={false}
        />
        <PointLightWithHelper
          position={[2.7, 0.7, 0]}
          intensity={0.4}
          help={false}
        />
        {/* Outside Lights */}
        <DirectionalLightWithHelper
          help={false}
          intensity={0.6}
          position={[7, 0, 0]}
        />
        <DirectionalLightWithHelper
          help={false}
          intensity={0.6}
          position={[-7, 0, 0]}
        />

        <Mod />
      </Suspense>
    </Canvas>
  );
};

export default Model;
