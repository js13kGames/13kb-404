import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';

const geometry = new THREE.CircleBufferGeometry( 0.2, 5 ).translate( 0, 0, 0.01 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

const amount = 1000;
const mesh = new THREE.InstancedMesh( geometry, material, amount );
mesh.count = 0;

function Splats() {

  let current = 0;

  function add( matrix ) {

    mesh.setMatrixAt( current ++, matrix );
    mesh.instanceMatrix.needsUpdate = true;

    if ( current > amount ) current = 0;
    if ( mesh.count < current ) mesh.count = current;

    if ( current === 0 ) console.log( mesh );

  }

  return {
    mesh: mesh,
    add: add
  };

}

export { Splats };