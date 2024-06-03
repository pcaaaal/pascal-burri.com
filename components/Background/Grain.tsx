export default function Grain() {
	return (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<filter id="noiseFilter">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="6"
					numOctaves="3"
					stitchTiles="stitch"
				/>
			</filter>
      
			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	);
}
