import React, {Suspense, useEffect, useState, useRef} from "react";
import * as THREE from "three";
import {Note3D} from "./Note3D/Note3D";
import Controls from "./Controls";


export const Scene = ({notesArr, deleteNote}) => {

    const [videoTexture] = useState(() => {
        const video = document.createElement('video');
        video.width = window.innerWidth;
        video.height = window.innerHeight;
        video.loop = true;
        video.muted = true;
        video.src = './assets/video.mp4';
        video.setAttribute('webkit-playsinline', 'webkit-playsinline');
        video.play();

        const texture = new THREE.VideoTexture(video)
        texture.minFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;

        return texture;
    })

    return (
        <Controls>
            <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
                <sphereBufferGeometry args={[500, 60, 40]} scale={[-1, 1, 1]}/>
                <meshBasicMaterial args={[{map: videoTexture}]} side={THREE.BackSide}/>
            </mesh>

            {notesArr.map(noteData => (
                <Note3D
                    crossClickHandler={deleteNote}
                    key={noteData.id}
                    noteData={noteData}
                />
            ))}
        </Controls>
    )
}