'use client'

import { Suspense, useEffect, useState, useRef, useMemo, useCallback } from 'react'
import * as THREE from 'three'

import {
  Canvas,
  useLoader,
} from '@react-three/fiber'

import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  useProgress,
} from '@react-three/drei'

/* =========================
   LOADER
========================= */

function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>

      <div className="flex flex-col items-center gap-4">

        <div className="w-56 h-[6px] bg-white/10 rounded-full overflow-hidden">

          <div
            className="h-full bg-[#c7a57a] transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="text-[#f5efe6] text-sm tracking-[0.2em] uppercase">
          Загрузка {Math.floor(progress)}%
        </p>

      </div>

    </Html>
  )
}

/* =========================
   MODEL
========================= */

function CampModel() {
  const { scene } = useGLTF('/models/camp.glb')

  useEffect(() => {
    return () => {
      scene.traverse((object: any) => {

        if (object.geometry) {
          object.geometry.dispose()
        }

        if (object.material) {

          if (Array.isArray(object.material)) {
            object.material.forEach((material: any) =>
              material.dispose()
            )
          } else {
            object.material.dispose()
          }
        }
      })
    }
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={1.35}
      position={[0, -0.7, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
}

/* =========================
   IMAGE MODE
========================= */

function ImagePlane() {
  const texture = useLoader(
    THREE.TextureLoader,
    '/images/space.png'
  )

  const memoizedTexture = useMemo(
    () => texture,
    [texture]
  )

  return (
    <group rotation={[-Math.PI / 4, 0, 0]}>

      <mesh>

        <planeGeometry args={[8, 4.5]} />

        <meshStandardMaterial map={memoizedTexture} />

      </mesh>

    </group>
  )
}

/* =========================
   PAGE
========================= */

export default function SpacePage() {

  const [mode, setMode] =
    useState<'3d' | 'image'>('3d')

  const [started, setStarted] =
    useState(false)

  const [isMobile, setIsMobile] =
    useState(false)

  const [isClient, setIsClient] =
    useState(false)

  const resizeTimeoutRef =
    useRef<NodeJS.Timeout | null>(null)

  /* =========================
     MOBILE DETECTIONS
  ========================= */

  useEffect(() => {

    setIsClient(true)

    const checkMobile = () => {

      if (typeof window === 'undefined') return

      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    const handleResize = () => {

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }

      resizeTimeoutRef.current = setTimeout(() => {
        checkMobile()
      }, 150)
    }

    window.addEventListener('resize', handleResize)

    window.addEventListener(
      'orientationchange',
      handleResize
    )

    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      )

      window.removeEventListener(
        'orientationchange',
        handleResize
      )

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }

  }, [])

  /* =========================
     MODE SWITCH
  ========================= */

  const handleModeChange = useCallback(
    (newMode: '3d' | 'image') => {
      setMode(newMode)
    },
    []
  )

  /* =========================
     SSR SAFE
  ========================= */

  if (!isClient) {
    return (
      <main className="relative w-full h-screen bg-[#090705] overflow-hidden flex items-center justify-center">

        <div className="text-[#cdbba5]">
          Загрузка...
        </div>

      </main>
    )
  }

  return (
    <main className="relative w-full h-screen bg-[#090705] overflow-hidden">

      {/* LEFT UI */}
      <div className="absolute top-0 left-0 z-30 p-5 md:p-10 max-w-xl">

        <p className="uppercase tracking-[0.3em] text-[#c7a57a] text-[10px] md:text-xs mb-4">
          Immersive masterplan
        </p>

        <h1 className="text-4xl md:text-7xl font-bold text-[#f8f3ec] leading-[0.95] mb-5">

          Пространство

          <br />

          проекта

        </h1>

        <p className="text-[#cdbba5] text-sm md:text-lg leading-relaxed">

          Интерактивная визуализация immersive-пространства проекта
          «Перезагрузка: Истоки».

        </p>

      </div>

      {/* SWITCHER */}
      <div className="absolute top-5 right-5 md:top-10 md:right-10 z-40 flex items-center gap-2 md:gap-3">

        <button
          onClick={() => handleModeChange('3d')}
          aria-label="Переключить на 3D вид"
          className={`px-4 md:px-5 py-2.5 md:py-3 rounded-2xl text-[11px] md:text-sm uppercase tracking-[0.2em] backdrop-blur-md transition ${
            mode === '3d'
              ? 'bg-[#c7a57a] text-black'
              : 'bg-black/30 text-[#d7c5b0] hover:bg-black/50'
          }`}
        >
          3D
        </button>

        <button
          onClick={() => handleModeChange('image')}
          aria-label="Переключить на вид изображения"
          className={`px-4 md:px-5 py-2.5 md:py-3 rounded-2xl text-[11px] md:text-sm uppercase tracking-[0.2em] backdrop-blur-md transition ${
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

      {/* =========================
          3D MODE
      ========================= */}

      {mode === '3d' && (

        <div className="w-full h-screen">

          {!started ? (

            <div className="w-full h-screen flex items-center justify-center">

              <button
                onClick={() => setStarted(true)}
                aria-label="Запустить 3D визуализацию"
                className="px-7 md:px-8 py-4 md:py-5 border border-[#c7a57a] text-[#f5efe6] uppercase tracking-[0.25em] text-xs md:text-sm hover:bg-[#c7a57a] hover:text-black transition"
              >
                Запустить 3D МАКЕТ
              </button>

            </div>

          ) : (

            <Canvas
              dpr={isMobile ? 1 : [1, 2]}
              camera={{
                position: isMobile
                  ? [8, 5, 8]
                  : [10, 7, 10],

                fov: isMobile
                  ? 50
                  : 38,
              }}
              style={{
                width: '100%',
                height: '100%',
              }}
            >

              {/* LIGHT */}
              <ambientLight intensity={0.7} />

              <directionalLight
                position={[10, 15, 10]}
                intensity={1.4}
              />

              <directionalLight
                position={[-10, 10, -10]}
                intensity={0.6}
              />

              {/* ENV */}
              {!isMobile && (
                <Environment preset="sunset" />
              )}

              {/* MODEL */}
              <Suspense fallback={<Loader />}>

                <CampModel />

              </Suspense>

              {/* CONTROLS */}
              <OrbitControls
                enablePan={false}
                minDistance={isMobile ? 5 : 6}
                maxDistance={isMobile ? 12 : 18}
                maxPolarAngle={Math.PI / 2.1}
                autoRotate={!isMobile}
                autoRotateSpeed={0.3}
              />

            </Canvas>

          )}

        </div>

      )}

      {/* =========================
          IMAGE MODE
      ========================= */}

      {mode === 'image' && (

        <div className="w-full h-screen">

          <Canvas
            dpr={isMobile ? 1 : [1, 2]}
            camera={{
              position: isMobile
                ? [0, 3, 8]
                : [0, 3.5, 9],

              fov: isMobile
                ? 40
                : 32,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >

            <ambientLight intensity={1.1} />

            <directionalLight
              position={[5, 10, 5]}
              intensity={1.4}
            />

            {!isMobile && (
              <Environment preset="sunset" />
            )}

            <Suspense fallback={<Loader />}>

              <ImagePlane />

            </Suspense>

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={12}
            />

          </Canvas>

        </div>

      )}

    </main>
  )
}