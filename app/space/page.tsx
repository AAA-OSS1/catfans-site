'use client'

import { useState } from 'react'
import * as THREE from 'three'

import {
  Canvas,
  useLoader,
} from '@react-three/fiber'

import {
  OrbitControls,
  Environment,
  useGLTF,
} from '@react-three/drei'

function CampModel() {
  const { scene } = useGLTF('/models/camp.glb')

  return (
    <primitive
      object={scene}
      scale={1.45}
      position={[0, -0.7, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
}

function ImagePlane() {
  const texture = useLoader(
    THREE.TextureLoader,
    '/images/space.png'
  )

  return (
    <group rotation={[-0.805, 0, 0]}>

      <mesh>

        <planeGeometry args={[8, 4.5]} />

        <meshStandardMaterial map={texture} />

      </mesh>

    </group>
  )
}

export default function SpacePage() {
  const [mode, setMode] = useState<'3d' | 'image'>('3d')

  return (
    <main className="relative w-full h-screen bg-[#090705] overflow-hidden">

      {/* LEFT UI */}
      <div className="absolute top-0 left-0 z-30 p-6 md:p-10">

        <p className="uppercase tracking-[0.3em] text-[#c7a57a] text-xs mb-4">
          Immersive masterplan
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#f8f3ec] leading-[0.95] mb-6">
          Пространство
          <br />
          проекта
        </h1>

        <p className="text-[#cdbba5] text-base md:text-lg leading-relaxed max-w-xl">
          Интерактивная визуализация immersive-пространства проекта
          «Перезагрузка: Истоки».
        </p>

      </div>

      {/* SWITCHER */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-40 flex items-center gap-3">

        <button
          onClick={() => setMode('3d')}
          className={`px-5 py-3 rounded-2xl text-sm uppercase tracking-[0.2em] backdrop-blur-md transition ${
            mode === '3d'
              ? 'bg-[#c7a57a] text-black'
              : 'bg-black/30 text-[#d7c5b0] hover:bg-black/50'
          }`}
        >
          3D
        </button>

        <button
          onClick={() => setMode('image')}
          className={`px-5 py-3 rounded-2xl text-sm uppercase tracking-[0.2em] backdrop-blur-md transition ${
            mode === 'image'
              ? 'bg-[#c7a57a] text-black'
              : 'bg-black/30 text-[#d7c5b0] hover:bg-black/50'
          }`}
        >
          Изображение
        </button>

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      {/* 3D MODE */}
      {mode === '3d' && (
        <div className="w-full h-screen">

          <Canvas
            camera={{
              position: [10, 7, 10],
              fov: 38,
            }}
          >

            <ambientLight intensity={1.1} />

            <directionalLight
              position={[10, 15, 10]}
              intensity={2.5}
            />

            <directionalLight
              position={[-10, 10, -10]}
              intensity={1}
            />

            <Environment preset="sunset" />

            <CampModel />

            <OrbitControls
              enablePan={false}
              minDistance={6}
              maxDistance={18}
              maxPolarAngle={Math.PI / 2.1}
              autoRotate
              autoRotateSpeed={0.7}
            />

          </Canvas>

        </div>
      )}

      {/* IMAGE MODE */}
      {mode === 'image' && (
        <div className="w-full h-screen">

          <Canvas
            camera={{
              position: [0, 3.5, 9],
              fov: 32,
            }}
          >

            <ambientLight intensity={1.4} />

            <directionalLight
              position={[5, 10, 5]}
              intensity={2}
            />

            <Environment preset="sunset" />

            <ImagePlane />

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={6}
              maxDistance={12}
            />

          </Canvas>

        </div>
      )}

    </main>
  )
}