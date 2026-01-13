'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

const Plane = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.3;

    const scene = new THREE.Scene();
    let plane: any;
    let mixer: any;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 4));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(500, 500, 500);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load('/plane.glb', (gltf: any) => {
      plane = gltf.scene;
      scene.add(plane);
      mixer = new THREE.AnimationMixer(plane);
      if (gltf.animations[0]) mixer.clipAction(gltf.animations[0]).play();
    });

    const positions = [
      { id: 'hero', position: { x: 0.075, y: 0, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
      { id: 'clouds', position: { x: -0.2, y: 0, z: -1 }, rotation: { x: 0.5, y: 0.5, z: 0 } },
      { id: 'about', position: { x: 0, y: 0, z: 0 }, rotation: { x: 0.3, y: 0.5, z: 0 } }
    ];

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.01);
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      if (!plane || !containerRef.current) return;
      
      let currentSection = '';
      document.querySelectorAll('.section').forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      const coords = positions.find(p => p.id === currentSection);
      if (coords) {
        gsap.to(plane.position, { ...coords.position, duration: 3, ease: 'power1.out' });
        gsap.to(plane.rotation, { ...coords.rotation, duration: 3, ease: 'power1.out' });
      }

      // Stop the plane at about
      const about = document.getElementById('about');
      if (about) {
        const aboutBottom = about.getBoundingClientRect().bottom + window.scrollY;
        const switchPoint = Math.max(0, aboutBottom - window.innerHeight);

        if (window.scrollY >= switchPoint) {
          containerRef.current.style.position = 'absolute';
          containerRef.current.style.top = `${aboutBottom - window.innerHeight}px`;
        } else {
          containerRef.current.style.position = 'fixed';
          containerRef.current.style.top = '0';
        }
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-30" />;
};

export default Plane;