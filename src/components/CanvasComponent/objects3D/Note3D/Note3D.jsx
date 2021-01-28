import React, {useRef, useEffect, useState, useContext, useMemo} from "react";
import * as THREE from "three";
import {useDrag} from "../../../../hooks/useDrag";
import {Text} from "@react-three/drei/Text";

export const Note3D = (
    {
        crossClickHandler,
        noteData
    }) => {
    const {text, id, centerCoords: position} = noteData;
    const [textPos, setTextPos] = useState(position);

    const planeRef = useRef()

    const bindDrag = useDrag(v => {
        setTextPos(v.toArray())
    })

    const planeConfigs = {
        width: 160,
        height: 160,
        segments: 32
    }

    return (
        <group {...bindDrag}>
            <Text
                color="black"
                anchorX="center"
                anchorY="middle"
                textAlign="justify"
                position={[textPos[0], textPos[1], textPos[2] + 0.5]}
                fontSize={13}
                lineHeight={1}
                maxWidth={150}
                font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"

            >
                {text}
            </Text>
            <Text
                onClick={(e) => {
                    e.stopPropagation();
                    crossClickHandler(id)
                }}
                color="red"
                anchorX="top"
                anchorY="bottom"
                textAlign="right"
                height={21}
                position={[
                    textPos[0] + planeConfigs.width / 2 - 15,
                    textPos[1] + planeConfigs.height / 2 - 15,
                    textPos[2] + 0.5]}
                fontSize={14}
                lineHeight={1}
                maxWidth={150}
                font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            >
                X
            </Text>
            <mesh
                ref={planeRef}
                position={textPos}
            >
                <planeGeometry args={[planeConfigs.width, planeConfigs.height, planeConfigs.segments]}/>
                <meshBasicMaterial color={0xffff00} side={THREE.DoubleSide}/>
            </mesh>
        </group>
    )
}