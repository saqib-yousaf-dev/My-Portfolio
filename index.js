// THREE.JS 3D MOUSE-TRACKING NET SYSTEM FOR HERO SECTION
const container = document.getElementById('canvas-container');

if (container) {
    const scene = new THREE.Scene();
    
    // Camera configuration setup
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid Net Size Parameters
    const widthCount = 30;
    const heightCount = 20;
    const spacingX = 2.4;
    const spacingY = 2.4;
    
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const initialPositions = [];

    // Formulate a clean flat grid layout structure
    for (let i = 0; i < widthCount; i++) {
        for (let j = 0; j < heightCount; j++) {
            const x = (i - widthCount / 2) * spacingX;
            const y = (j - heightCount / 2) * spacingY;
            const z = 0;

            positions.push(x, y, z);
            initialPositions.push(x, y, z);
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Construct indexes to interconnect nodes into geometric square net rows/columns
    const indices = [];
    for (let i = 0; i < widthCount; i++) {
        for (let j = 0; j < heightCount; j++) {
            const currentIdx = i * heightCount + j;
            
            // Link horizontals
            if (i < widthCount - 1) {
                indices.push(currentIdx, currentIdx + heightCount);
            }
            // Link verticals
            if (j < heightCount - 1) {
                indices.push(currentIdx, currentIdx + 1);
            }
        }
    }
    geometry.setIndex(indices);

    // Modern Material adjusted to match your exact True Deep Aesthetic Maroon (#4A0404)
    const material = new THREE.LineBasicMaterial({
        color: 0x4A0404, 
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
    });

    const netLineSegments = new THREE.LineSegments(geometry, material);
    scene.add(netLineSegments);

    // Track Cursor Coordinates
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, inside: false };
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Flat ray intersection space

    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        // Convert screen dimensions to normalized device coords (-1 to +1)
        const normalizedX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
        const normalizedY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

        raycaster.setFromCamera(new THREE.Vector2(normalizedX, normalizedY), camera);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane, intersectPoint);

        // Update destinations
        mouse.targetX = intersectPoint.x;
        mouse.targetY = intersectPoint.y;
        mouse.inside = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.inside = false;
    });

    // Real-time animation calculation loop
    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        const posAttribute = geometry.attributes.position;
        
        // Smoothly interpolate current cursor tracking values
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;

        for (let i = 0; i < posAttribute.count; i++) {
            const idx = i * 3;
            let initX = initialPositions[idx];
            let initY = initialPositions[idx + 1];

            // Math rules mapping spatial distance from vertex point to custom cursor coordinates
            const dx = initX - mouse.x;
            const dy = initY - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Base organic idle movement ripple
            let waveZ = Math.sin(initX * 0.2 + elapsedTime * 1.5) * Math.cos(initY * 0.2 + elapsedTime * 1.5) * 0.8;

            if (mouse.inside && distance < 18) {
                // Apply exponential distortion values as vectors gravitate towards cursor center
                const attractionForce = Math.exp(-distance * 0.15) * 4.5;
                
                // Pull net lines towards cursor location point coordinates
                posAttribute.array[idx] = initX - (dx / distance) * attractionForce;
                posAttribute.array[idx + 1] = initY - (dy / distance) * attractionForce;
                
                // Lift structural nodes forward into 3D plane
                posAttribute.array[idx + 2] = waveZ + attractionForce * 1.8;
            } else {
                // Return smoothly to idle state structural blueprint positions
                posAttribute.array[idx] += (initX - posAttribute.array[idx]) * 0.1;
                posAttribute.array[idx + 1] += (initY - posAttribute.array[idx + 1]) * 0.1;
                posAttribute.array[idx + 2] += (waveZ - posAttribute.array[idx + 2]) * 0.1;
            }
        }

        posAttribute.needsUpdate = true;
        renderer.render(scene, camera);
    }

    animate();

    // Responsive Canvas Resizer Engine
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// HANDLE COMPLETED CONTACT FORM SUBMISSIONS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! Saqib will get back to you shortly.');
        contactForm.reset();
    });
}