"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import MarcoAvatar from "./marco-avatar.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { useMotionValue } from "framer-motion";

function Model({ path, globalMouse }) {
	const { scene, animations } = useLoader(GLTFLoader, path);
	const modelRef = useRef();
	const { camera } = useThree();
	const [mixer] = useState(() => new THREE.AnimationMixer(scene));
	const [action, setAction] = useState(null);

	useEffect(() => {
		if (animations && animations.length > 0) {
			const newAction = mixer.clipAction(animations[0]);
			newAction.setLoop(THREE.LoopRepeat, 2);
			newAction.play();
			newAction.play();
			setAction(newAction);
		}

		return () => {
			if (mixer) mixer.stopAllAction();
		};
	}, [animations, mixer]);

	useEffect(() => {
		if (action) {
			const loopAnimation = setInterval(() => {
				action.setLoop(THREE.LoopRepeat, Math.floor(Math.random() * 2 + 1));
				action.reset().play();
			}, 3000);

			return () => clearInterval(loopAnimation);
		}
	}, [action]);

	useFrame((state, delta) => {
		if (mixer) mixer.update(delta);

		if (!modelRef.current) return;

		// Make the object face the mouse position
		const lookAtVector = new THREE.Vector3(
			globalMouse.x.get() * camera.aspect * camera.fov * 0.15,
			globalMouse.y.get() * camera.fov * 0.05,
			camera.position.z
		);
		modelRef.current.lookAt(lookAtVector);
	});

	return <primitive object={scene} ref={modelRef} />;
}

export default function Avatar() {
	const [isReady, setIsReady] = useState(false);
	const globalMouseX = useMotionValue(0);
	const globalMouseY = useMotionValue(0);

	const ref = useRef(null);

	useEffect(() => {
		const updateMousePosition = (e) => {
			const x =
				((e.clientX -
					ref.current.getBoundingClientRect().left -
					ref.current.getBoundingClientRect().width / 2) /
					window.innerWidth) *
				2;
			const y =
				-(
					(e.clientY -
						ref.current.getBoundingClientRect().top -
						ref.current.getBoundingClientRect().height / 2) /
					window.innerHeight
				) * 2;
			globalMouseX.set(x);
			globalMouseY.set(y);
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, [globalMouseX, globalMouseY]);

	return (
		<div className="h-full w-full" ref={ref}>
			<Canvas
				style={{ background: "transparent" }}
				onCreated={({ gl, camera }) => {
					gl.setClearColor(0x000000, 0);
					camera.position.z = 4.5;
					camera.position.y = -0.2;
					camera.fov = 50;
					setIsReady(true);
				}}
			>
				{isReady && (
					<>
						<ambientLight intensity={0.4} />
						<directionalLight
							position={[1, 1, 1]}
							intensity={0.5}
							castShadow
							shadow-mapSize-width={1024}
							shadow-mapSize-height={1024}
							shadow-camera-far={50}
							shadow-camera-left={-10}
							shadow-camera-right={10}
							shadow-camera-top={10}
							shadow-camera-bottom={-10}
						/>
						<Model
							path="./bio/marco-avatar.glb"
							globalMouse={{ x: globalMouseX, y: globalMouseY }}
						/>
						{/* <OrbitControls /> */}
					</>
				)}
			</Canvas>
		</div>
	);
}
