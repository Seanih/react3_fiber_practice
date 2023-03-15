import { RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function App() {
	const test = useRef();

	// animations
	useFrame((state, delta) => {
		// console.log(test);

		test.current.rotation.y += delta;
	});

	return (
		<>
			<color attach={'background'} args={['#333333']} />
			<ambientLight intensity={0.1} />
			<RoundedBox
				args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
				radius={0.05} // Radius of the rounded corners. Default is 0.05
				smoothness={4} // The number of curve segments. Default is 4
				ref={test}
			>
				<meshPhongMaterial color='blue' wireframe/>
			</RoundedBox>
		</>
	);
}

export default App;
