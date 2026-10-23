import {
  TbMeteor, TbSailboat, TbPlane, TbGauge, TbDrone, TbLungs, TbPlant2, TbFirstAidKit, TbMoon,
  TbMotorbike, TbSteeringWheel,
} from 'react-icons/tb'
import img from '../img'

// Every detail page is generated from this file. Hub pages pick cards from it by slug.
// Fields: card (hub card), stats, challenge (intro tile), specs (spec tiles), contributions,
// decisions (chose / rejected cards), figures (captioned images, click to enlarge), context (program note).

const industry = { backTo: '/industry', backLabel: 'Industry Experience' }
const rocketry = { backTo: '/rocketry', backLabel: 'Longhorn Rocketry' }
const research = { backTo: '/research', backLabel: 'Research' }
const team = { backTo: '/team', backLabel: 'Team Projects' }

export const projects = {
  // ─── Industry: Guinn Partners / Ascendant AI ────────────────────────────────
  impress: {
    ...industry,
    tag: 'Guinn Partners · Austin, TX · Jan 2026 – Present',
    title: 'IMPRESS Mars Penetrator Program',
    award: 'NASA TechLeap 2026 Winner',
    heroCover: TbMeteor,
    heroCoverCode: 'IMPRESS · Mars Penetrator',
    software: ['Release Mechanism Design', 'Drop Testing', 'Test Article Assembly', 'UHF Antenna & Coax Integration'],
    roles: ['Mechanical Engineering Intern'],
    card: {
      cover: TbMeteor,
      coverCode: 'IMPRESS',
      description: 'Designed the drone-mounted drop-test release for Mars penetrators, then scaled it to a 6-penetrator carriage, cutting sorties per data set 6:1.',
    },
    stats: [
      { value: '6×', label: 'Penetrator Carriage' },
      { value: '6:1', label: 'Fewer Sorties per Data Set' },
      { value: '~1,300–1,600 ft', label: 'Test Drop Altitude' },
      { value: '2026 Winner', label: 'NASA TechLeap Prize' },
    ],
    challenge: {
      title: 'The Program',
      text: "IMPRESS, the Iterative Mars Penetrator for Subsurface Science, is Guinn Partners' entry addressing NASA's \"Navigation Sensors for Precision Landing\" shortfall, and a 2026 winner of NASA's TechLeap Prize Space Technology Payload Challenge. The technology supports low-cost, swarm-deployable penetrator networks for Mars subsurface science and astrobiology.",
    },
    contributions: [
      'Designed the drone-mounted drop-test release used to free-fall test penetrator aerodynamic stability, and assembled the penetrator test articles ahead of each drop.',
      "Scaled the release from a single penetrator to a 6-penetrator carriage, cutting sorties per data set 6:1 and supporting IMPRESS's swarm-deployment mission architecture.",
      "Hardened antenna and coax terminations, lengthening the penetrators' UHF beacon antennas and reinforcing coax-cable retention, so penetrator instrumentation survives impact shock.",
    ],
    context: {
      tag: 'Published Research',
      title: 'Peer-Reviewed Foundation',
      text: "The IMPRESS approach is described in a peer-reviewed astrobiology paper co-authored by Guinn Partners' Head of Engineering, Mitchell Richburg.",
    },
  },

  wavedrone: {
    ...industry,
    tag: 'Guinn Partners · Ascendant AI · Jan 2026 – Present',
    title: 'WaveDrone Autonomous Maritime Platform',
    heroCover: TbSailboat,
    heroCoverCode: 'WaveDrone · Maritime',
    software: ['Mechanical Design', 'Prototyping', 'Testing', 'Manufacturing Drawings'],
    roles: ['Engineering Intern'],
    card: {
      cover: TbSailboat,
      coverCode: 'WaveDrone',
      description: 'Own design, prototype build, and validation testing of 5 subassemblies on an autonomous maritime vessel, turning test data into released fabrication drawings.',
    },
    challenge: {
      title: 'The Program',
      text: 'WaveDrone is an autonomous maritime vessel program run through Ascendant AI. I own five of its subassemblies from design through prototype build, validation testing, and released fabrication drawings.',
    },
    stats: [
      { value: '5', label: 'Subassemblies Owned' },
    ],
    contributions: [
      'Own the design of 5 subassemblies on the autonomous maritime vessel platform.',
      'Build the prototypes and run validation testing on each subassembly.',
      'Turn test data into released fabrication drawings for platform components.',
    ],
    context: {
      tag: 'About',
      title: 'Ascendant AI',
      text: 'Guinn Partners operates as part of Ascendant AI, an Austin-based drone engineering, manufacturing, and NDAA-focused product platform.',
    },
  },

  'dzyne-uav': {
    ...industry,
    tag: 'Guinn Partners · Ascendant AI · 2026',
    title: 'UAV Assembly Fixturing, DZYNE Technologies',
    heroCover: TbPlane,
    heroCoverCode: 'DZYNE · DfM & LRIP',
    software: ['Assembly Fixturing', 'Tolerance Stack-Up', 'Flex-Cable Routing', 'Manufacturing Drawings', 'Design for Manufacturing'],
    roles: ['Engineering Intern'],
    card: {
      cover: TbPlane,
      coverCode: 'DZYNE · DfM / LRIP',
      description: 'Assembly fixturing that holds wing/fuselage tolerance stack-up, flex-cable harnesses through 5 structural interfaces, and 100+ released manufacturing drawings.',
    },
    challenge: {
      title: 'The Program',
      text: 'A design-for-manufacturing and low-rate-initial-production (DfM & LRIP) support program for an unmanned aircraft: getting the vehicle from prototype toward repeatable production.',
    },
    stats: [
      { value: '100+', label: 'Manufacturing Drawings Released' },
      { value: '5', label: 'Structural Interfaces Routed' },
    ],
    contributions: [
      'Designed assembly fixturing to hold wing/fuselage tolerance stack-up, and took part in its buildout and prototyping.',
      'Routed flex-cable harnesses through 5 structural interfaces to keep system integration clean and reliable.',
      "Released 100+ manufacturing drawings to the shop floor for the program's DFM and low-rate initial production builds.",
    ],
    context: {
      tag: 'Client Work',
      title: 'DZYNE Technologies',
      text: "Part of Guinn Partners' design-for-manufacturing and low-rate-initial-production support engagement with DZYNE Technologies. The aircraft, production, and outcome are DZYNE's; published with DZYNE's approval via Ascendant AI.",
    },
  },

  'moontower-daq': {
    ...industry,
    tag: 'Guinn Partners · Ascendant AI · Jan 2026 – Present',
    title: 'MoonTower DAQ Qualification',
    inProgress: true,
    heroCover: TbGauge,
    heroCoverCode: 'MoonTower · DAQ',
    software: ['Test Stand Design', 'Pressure Transducers', 'Thermocouples', 'Strain Gauges', 'Flow Measurement', 'Valve Control', 'Safety Interlocks'],
    roles: ['Engineering Intern'],
    card: {
      cover: TbGauge,
      coverCode: 'MoonTower · DAQ',
      description: 'Water-flow stand that qualifies pressure, temperature, strain, and flow sensors on 50 DAQ channels in repeatable runs, with hardware-level safety interlocks.',
    },
    challenge: {
      title: 'Engineering Challenge',
      text: 'Qualify a custom data-acquisition board for MoonTower Fleet Intelligence before deployment by running it against real sensor and actuation signals, with safety that does not depend on the DAQ software being right.',
    },
    stats: [
      { value: '50', label: 'DAQ Channels' },
      { value: '4', label: 'Sensor Types' },
    ],
    specs: [
      {
        title: 'Sensor Channels',
        specs: [
          ['Pressure Transducers', 'Redundant'],
          ['Thermocouples', 'Dual pair'],
          ['Strain Gauges', 'Hoop + axial'],
          ['Flow Meter', 'Turbine'],
        ],
      },
      {
        title: 'Actuation & Safety',
        specs: [
          ['Valve Control', 'Solenoid / pneumatic'],
          ['Arming', 'Key-switch'],
          ['Shutdown', 'E-stop'],
          ['Overpressure', 'Redundant protection'],
        ],
      },
    ],
    contributions: [
      'Designing a water-flow stand that qualifies pressure, temperature, strain, and flow sensors on 50 DAQ channels in repeatable runs, using pressure transducers, thermocouples, strain gauges, a turbine flow meter, and solenoid/pneumatic valve control.',
      'Implementing hardware-level safety interlocks (key-switch arming, E-stop, redundant overpressure protection) that function independently of the DAQ software.',
      'Cross-validating sensor channels against each other (redundant pressure transducers, a dual-thermocouple pair, and a hoop/axial strain-gauge pair) to characterize DAQ accuracy before deployment.',
    ],
  },

  'modular-fpv-uas': {
    ...industry,
    tag: 'Ascendant AI for 526 Solutions · Jan 2026 – Present',
    title: 'Modular FPV UAS',
    inProgress: true,
    heroCover: TbDrone,
    heroCoverCode: '526 Solutions · FPV UAS',
    software: ['Design for Manufacturing', 'CNC Machining', 'Carbon-Fiber Sheet', '3D Printing', 'Payload Mount Design', 'Production Planning'],
    roles: ['Mechanical Engineering Intern'],
    card: {
      cover: TbDrone,
      coverCode: '526 · FPV UAS',
      description: 'FPV frames redesigned for manufacturability and cut from carbon-fiber sheet on CNC, plus 3D-printed payload mounts for a training-effects suite.',
    },
    challenge: {
      title: 'The Program',
      text: 'Ascendant AI is developing the Modular FPV UAS (requirement, design, and build plan) for 526 Solutions, a U.S. Special Operations-focused training and equipment provider. Program status: in development.',
    },
    contributions: [
      'Redesigns third-party FPV frame geometry for manufacturability, then produces frames from carbon-fiber sheet stock on CNC equipment.',
      "Designs and 3D-prints payload-mount hardware for the platform's training-effects payload suite (flashbang and inert training-grenade props), used in simulated-adversary red-cell training exercises.",
      'Took in incoming CAD and print files for a multi-material frame/component production run, then split the remaining production work with a colleague to manage the workload.',
    ],
  },

  'endotracheal-tube': {
    ...industry,
    tag: 'Guinn Partners · Austin, TX · Jan 2026 – Present',
    title: 'Endotracheal Tube',
    heroCover: TbLungs,
    heroCoverCode: 'Medical Device',
    software: ['Mechanical Design', 'Resin 3D Printing', 'Material Evaluation', 'Manufacturing Drawings'],
    roles: ['Mechanical Engineering Intern'],
    card: {
      cover: TbLungs,
      coverCode: 'Medical Device',
      description: 'Resin-printed 30 design variants to characterize material elasticity, then drew the manufacturing package for the final design.',
    },
    challenge: {
      title: 'The Engagement',
      text: "A client engagement running from concept to final design: helping take the client's initial endotracheal tube concept toward a finalized, manufacturable design.",
    },
    stats: [
      { value: '30', label: 'Resin-Printed Variants' },
    ],
    contributions: [
      "Contributes to mechanical design work, helping take the client's initial concept toward a finalized design.",
      'Resin-printed 30 design variants to characterize material elasticity and how different resins hold it.',
      'Drew the manufacturing package for the final design.',
    ],
  },

  // ─── Longhorn Rocketry Association ─────────────────────────────────────────
  'rocket-v9': {
    ...rocketry,
    tag: 'Longhorn Rocketry Association · Vehicle Design · 2026',
    title: 'Rocket Version 9: Active-Control Airframe',
    heroImage: img('/images/rocket-v9.webp'),
    heroStyle: { backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'brightness(0.75)' },
    software: ['Fusion 360'],
    roles: ['Vehicle Design'],
    card: {
      image: img('/images/rocket-v9.webp'),
      imageStyle: { objectFit: 'contain', padding: '0 12px', background: '#101014' },
      description: 'Full 3 in active-control vehicle assembly in Fusion 360, with four servo-actuated forward canards modeled in place.',
    },
    stats: [
      { value: '3 in', label: 'Body Diameter' },
      { value: '≈ 32 in', label: 'Overall Length' },
      { value: '4', label: 'Active Canards' },
    ],
    specs: [
      {
        title: 'Vehicle',
        specs: [
          ['Airframe', '3 in dia. · ≈ 32 in'],
          ['Control', '4 servo canards'],
          ['Tools', 'Fusion 360'],
          ['Date', '2026'],
        ],
      },
    ],
    contributions: [
      'Modeled the full vehicle assembly in Fusion 360: ogive nose cone, body tube, motor tube with centering rings and motor retainer, bulkhead, thread-insert ring, rail buttons, and four tail fins.',
      'Integrated four forward canards on servo-driven mounts, with the servos, servo casings, horns and canard plates modeled in place for active flight control.',
      'Sized the airframe at 3 in diameter, the envelope the LRA TVC V5 flight computer was compacted to fit on its avionics sled.',
    ],
    related: { to: '/rocketry/tvc-flight-computer', label: 'See the TVC flight computer built for this airframe →' },
    figures: [
      { src: img('/images/rocket-v9.webp'), alt: 'Three-quarter render of the Rocket Version 9 assembly showing the ogive nose cone, forward servo-actuated canards and four tail fins', caption: 'Rocket Version 9: full Fusion 360 assembly, rendered from the STEP export.', wide: true },
      { src: img('/images/rocket-v9-side.webp'), alt: 'Side profile of Rocket Version 9 showing canard placement relative to the tail fins', caption: 'Side profile: forward canards and aft tail fins on the 3 in body tube.', wide: true },
    ],
  },

  'tvc-flight-computer': {
    ...rocketry,
    tag: 'Longhorn Rocketry Association · Avionics',
    title: 'TVC Flight Computer: LRA TVC V5',
    inProgress: true,
    heroImage: img('/images/tvc-pcb-iso.webp'),
    heroStyle: { backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: '80% center', filter: 'brightness(0.7)' },
    software: ['KiCad 10', 'EasyEDA', 'ESP32-WROOM-32E', 'BMI088 IMU', 'BMP388 Barometer', '4-Layer PCB Layout'],
    roles: ['Avionics / PCB Design'],
    card: {
      image: img('/images/tvc-pcb-iso.webp'),
      imageStyle: { objectFit: 'contain', padding: 16, background: '#101014' },
      description: 'Flight computer ported to KiCad and reworked for active control: eight actuator outputs, two pyro channels, compacted to 50 × 76 mm for a 3 in airframe.',
    },
    stats: [
      { value: '50 × 76 mm', label: 'Board Size' },
      { value: '4', label: 'Copper Layers' },
      { value: '8 + 2', label: 'Actuator + Pyro Channels' },
      { value: '0 Errors', label: 'KiCad DRC' },
    ],
    specs: [
      {
        title: 'Board',
        specs: [
          ['Board', '50 × 76 mm · 4-layer'],
          ['Processor', 'ESP32-WROOM-32E'],
          ['Sensors', 'BMI088 IMU · BMP388 baro'],
          ['Tools', 'KiCad 10'],
        ],
      },
    ],
    contributions: [
      "Ported the team's flight-computer design from EasyEDA into a hierarchical KiCad project (Power, USB/Reset, Processor, Sensors and Pyro sheets), cross-checking every net against the original schematic and board files.",
      'Reworked the outputs for active control: eight actuator headers (TVC pitch and yaw, four fins, airbrake and reaction wheel) fed from a dedicated servo battery bus kept separate from logic power, plus two pyro channels with continuity check.',
      'Compacted the board from 65 × 80 mm to 50 × 76 mm on four layers with a solid ground plane so it mounts lengthwise in a 3 in airframe; the IMU sits at the board centre and the ESP32 antenna at the edge over a copper keep-out.',
      'Replaced the power stage with a 2 A synchronous buck (AP63205), moved the shift registers to 74HCT595 to fix a 3.3 V-to-5 V logic-level problem on the pyro gates, and added an external arming switch.',
      'Fully routed with zero unconnected nets and zero copper-clearance errors in KiCad DRC; design complete, ahead of fabrication.',
    ],
    decisions: [
      {
        title: 'Board Envelope, Fit a 3 in Airframe',
        chose: '50 × 76 mm on four layers with a solid ground plane.',
        rejected: 'the original 65 × 80 mm layout.',
        body: 'The smaller board mounts lengthwise in a 3 in airframe. The IMU sits at the board centre and the ESP32 antenna at the edge over a copper keep-out.',
      },
      {
        title: 'Logic Levels on the Pyro Gates',
        chose: '74HCT595 shift registers.',
        body: 'Moving the shift registers to the HCT family fixed a 3.3 V-to-5 V logic-level problem between the ESP32 and the pyro gates.',
      },
      {
        title: 'Power Architecture',
        chose: '2 A synchronous buck (AP63205) and a dedicated servo battery bus.',
        body: 'The eight actuator headers run from their own servo battery bus, kept separate from logic power, so actuator current does not load the processor and sensor supply.',
      },
      {
        title: 'Safe Pyro Handling',
        chose: 'External arming switch and continuity check on both pyro channels.',
        body: 'Pyro events need the board armed from outside the airframe, and each channel can be verified before flight.',
      },
    ],
    related: { to: '/rocketry/rocket-v9', label: 'See the Rocket Version 9 airframe it was sized for →' },
    context: {
      tag: 'Next Revision · Aug 2024 – Present',
      title: 'V7 Flight Computer',
      text: 'Designing a 4-layer, dual-MCU board in KiCad that runs TVC, canards, flywheel, and airbrakes, with a safety co-processor. I am integrating encoder-feedback flywheel and servo airbrake drives; the next revision is set to fly at Spaceport America Cup.',
    },
    figures: [
      { src: img('/images/tvc-pcb-iso.webp'), alt: 'Angled 3D render of the LRA TVC V5 flight computer board', caption: 'KiCad 3D render: the eight actuator headers run along the bottom edge next to the servo battery input.' },
      { src: img('/images/tvc-pcb-top.webp'), alt: 'Top-down render of the LRA TVC V5 board showing the ESP32 module, power stage, pyro drivers and shift registers', caption: 'Top view: switching supply top-left, ESP32 and USB-UART top-right, pyro drivers left, shift registers and servo power along the bottom.' },
    ],
  },

  airbrakes: {
    ...rocketry,
    tag: 'IREC / Spaceport America Cup · Aug 2025 – Present',
    title: 'Active Airbrakes Subsystem',
    inProgress: true,
    heroImage: img('/images/fig-02.png'),
    heroStyle: { backgroundPosition: 'center 45%' },
    software: ['ANSYS Fluent (CFD)', 'Transient CFD', 'ANSYS Static Structural (FEA)', 'Weighted Trade Studies'],
    roles: ['Design Engineer'],
    card: {
      image: img('/images/fig-02.png'),
      description: 'Cam-slot airbrake that sheds ~2,500 ft of apogee to hold a 10,000 ft target, sized with steady and transient CFD plus structural FEA.',
    },
    stats: [
      { value: '10,000 ft', label: 'Target Apogee' },
      { value: '2,500 ft', label: 'Apogee Reduction' },
      { value: 'SF > 2', label: 'Structural Margin' },
      { value: 'Mach 0.6–0.9', label: 'Transient CFD Sweep' },
    ],
    challenge: {
      title: 'Engineering Challenge',
      text: "Hold the IREC competition rocket to a 10,000 ft target altitude by shedding roughly 2,500 ft of apogee in flight, with a mechanism that survives near-Mach aerodynamic loads.",
    },
    specs: [
      {
        title: 'Subsystem',
        specs: [
          ['System', 'Airbrakes'],
          ['Team', 'LRA'],
          ['Target Apogee', '10,000 ft'],
          ['Date', '2025 – Now'],
        ],
      },
    ],
    contributions: [
      'Designed an active airbrake system to shed roughly 2,500 ft of apogee and hold a 10,000 ft target altitude.',
      'Selected cam-slot actuation through a weighted trade study on simplicity, mass, and flight heritage.',
      'Ran ANSYS Fluent CFD and Static Structural FEA to size aerodynamic loads, closing the structure at a safety factor above 2.',
      'Ran transient CFD to capture oscillating vortex shedding on the airbrake bluff plate near Mach 1, extracting drag coefficient and drag force time histories across Mach 0.6–0.9 to validate the design.',
      'Supported prototyping and test planning, refining tolerances, materials, and system integration.',
    ],
    decisions: [
      {
        title: 'Actuation Mechanism, Cam-Slot',
        chose: 'Cam-slot actuation driven from a center-mounted servo.',
        body: 'Selected through a weighted trade study scoring simplicity, mass, and flight heritage.',
      },
      {
        title: 'Validation, Transient CFD',
        chose: 'Transient CFD across Mach 0.6–0.9.',
        body: 'The bluff plate sheds oscillating vortices near Mach 1, so transient runs captured drag coefficient and drag force as time histories to validate the design.',
      },
    ],
    figures: [
      { src: img('/images/fig-01.png'), alt: 'Time history plots of drag coefficient at Mach 0.6, 0.7, 0.8, and 0.9 showing oscillating vortex shedding on the airbrake bluff plate', caption: 'Transient CFD: drag coefficient time history across Mach 0.6–0.9, capturing vortex-shedding oscillation on the airbrake bluff plate.' },
      { src: img('/images/fig-02.png'), alt: 'Physical prototype of the four-petal airbrake mechanism with a center-mounted servo actuator', caption: 'Prototype of the four-petal airbrake mechanism, servo-actuated from the center hub.' },
    ],
  },

  'fin-tabs': {
    ...rocketry,
    tag: 'IREC / Spaceport America Cup · Aug 2025 – Present',
    title: 'Actuating Fin Tabs: Roll Control',
    inProgress: true,
    heroImage: img('/images/fig-03.png'),
    software: ['Onshape', 'ANSYS Fluent (CFD)', 'ANSYS Static Structural (FEA)', 'Trade Studies', 'Bench Testing'],
    roles: ['Subsystem Lead'],
    card: {
      image: img('/images/fig-03.png'),
      imageStyle: { background: '#f4f5f7', objectFit: 'contain' },
      description: 'Tab-based roll control for a 3 in airframe: CFD worst-case loads fed into FEA (FOS > 6) and a bench test confirming the servo will not back-drive.',
    },
    stats: [
      { value: 'FOS > 6', label: 'Dowel Rod Margin' },
      { value: '2.6 N', label: 'Drag Force' },
      { value: '5,500 Pa', label: 'Static Pressure' },
      { value: '~36×', label: 'Servo Torque vs. Hinge Load' },
    ],
    challenge: {
      title: 'Engineering Challenge',
      text: 'Given three months to design an actuating fin system compact enough for a 3" body diameter, robust enough for high-speed aerodynamic loads, and light enough to protect the altitude target, on an IREC rocket with a 2,000 ft target apogee and 110 m/s max velocity.',
    },
    specs: [
      {
        title: 'Mission',
        specs: [
          ['Target Apogee', '2,000 ft'],
          ['Max Velocity', '110 m/s'],
          ['Body Diameter', '3 in'],
          ['Actuator', 'MKS HV6160'],
        ],
      },
      {
        title: 'Validation',
        specs: [
          ['Worst-Case Tab Angle', '45°'],
          ['Dowel Rod Load', '5 N'],
          ['Servo Torque from Drag', '30 N·mm'],
          ['Back-Drive Threshold', '1,000 N·mm'],
          ['Measured Max Torque', '1.08 N·m'],
          ['Stated Max Torque', '1.82 N·m'],
          ['Drag Coefficient', '1.25'],
        ],
      },
    ],
    contributions: [
      'Led a 3-month tab-vs-linkage trade study for a 2,000 ft / 110 m/s vehicle, selecting the tab design.',
      'Built and maintained the CAD model in Onshape: a 14 mm-thick fin tab with an embedded slim servo, epoxied servo horn, and a dowel rod supporting rotation on the opposite side.',
      'Used ANSYS CFD to find worst-case loading (tab actuated to 45°, 10x normal deflection): 5,500 Pa static pressure, 2.6 N drag force, 1.25 drag coefficient.',
      'Fed those loads into an FEA study confirming the dowel rod would see only 5 N under load, for a factor of safety greater than 6.',
      'Calculated 30 N·mm of hinge load from drag against a rated 1,000 N·mm back-drive threshold, then bench-tested the servo: it delivers 1.08 N·m, 41% under its 1.82 N·m rating but ~36× the hinge load, ruling out in-flight back-driving.',
    ],
    decisions: [
      {
        title: 'Mechanism, Tab vs. Linkage',
        chose: 'Tab-based design with an embedded slim servo.',
        rejected: 'a linkage-based mechanism.',
        body: 'The tab design fits the servo inside a 14 mm fin tab on the 3 in airframe, with fewer failure points and less actuated mass. It also scored better on control integration and scalability.',
      },
    ],
    figures: [
      { src: img('/images/fig-03.png'), alt: 'CAD assembly render of the three-fin actuating tab system with embedded servo motors', caption: 'Onshape assembly: three-fin actuating tab system with embedded servo motors and dowel-supported rotation.' },
      { src: img('/images/fig-04.png'), alt: 'ANSYS CFD static pressure contour on the fin tab and FEA structural results for the dowel rod', caption: 'ANSYS CFD static pressure on the tab (top) feeding an FEA structural study of the dowel rod: deformation and safety factor (bottom).' },
      { src: img('/images/fig-05.png'), alt: 'Bench test of the servo motor using a crane scale, comparing stated max torque to measured max torque', caption: 'Bench validation: measured servo torque (1.08 N·m) against the stated max (1.82 N·m), confirming margin against back-driving.', wide: true },
    ],
  },

  'thrust-vector-control': {
    ...rocketry,
    tag: 'LRA Advanced Research · Aug 2024 – Present',
    title: 'Experimental Thrust Vector Control',
    inProgress: true,
    heroImage: img('/images/fig-07.png'),
    software: ['SolidWorks', 'OpenRocket', 'ANSYS Static Structural (FEA)'],
    roles: ['Mechanical & Avionics'],
    card: {
      image: img('/images/fig-07.png'),
      description: '2-axis gimbal TVC assembly in SolidWorks, simulated in OpenRocket and iterated with ANSYS FEA, with fail-safes so the rocket cannot aim at the ground.',
    },
    stats: [
      { value: '2-Axis', label: 'Gimbal' },
      { value: '~2.43 MPa', label: 'Peak von Mises (FEA)' },
      { value: 'Fail-Safe', label: 'Ground-Aim Protection' },
    ],
    challenge: {
      title: 'Engineering Challenge',
      text: 'Control an aerodynamically unstable rocket by directing engine thrust, without letting an actuator or linkage failure vector thrust toward the ground.',
    },
    contributions: [
      'Works on the mechanical subteam to control an aerodynamically unstable rocket by directing engine thrust.',
      'Designed and modeled a 2-axis gimbal TVC assembly in SolidWorks, simulated in OpenRocket for active thrust steering and in-flight attitude correction.',
      'Ran ANSYS Static Structural FEA (equivalent von Mises stress) on the gimbal ring, iterating the design to stay within material stress limits.',
      'Designed fail-safes that keep thrust from vectoring toward the ground if an actuator or linkage fails.',
    ],
    figures: [
      { src: img('/images/fig-07.png'), alt: 'ANSYS static structural FEA showing equivalent von Mises stress on the gimbal ring, peaking around 2.43 MPa', caption: 'ANSYS FEA: equivalent von Mises stress on the gimbal ring under load, peaking around 2.43 MPa near the mount points.', wide: true },
    ],
  },

  'motor-test-stand': {
    ...rocketry,
    tag: 'Propulsion Testing · Longhorn Rocketry · Aug 2025 – Present',
    title: 'Rocket Motor Test Stand',
    heroImage: img('/images/fig-08.png'),
    software: ['SolidWorks', 'KiCad', 'Steel Fabrication', 'Ignition Electronics'],
    roles: ['Design & Assembly'],
    card: {
      image: img('/images/fig-08.png'),
      imageStyle: { background: '#f4f5f7', objectFit: 'contain' },
      description: 'Welded steel static-fire stand rated for H-class thrust (~150 lbf), with KiCad-designed remote ignition electronics.',
    },
    stats: [
      { value: '~150 lbf', label: 'Rated Thrust' },
      { value: 'H-Class', label: 'Motor Class' },
      { value: 'Steel', label: 'Frame' },
      { value: 'Remote', label: 'Ignition' },
    ],
    contributions: [
      'Designed and built a welded steel static-fire test stand for solid rocket motors, engineered to withstand H-class thrust levels (~150 lbf).',
      'Designed the ignition and control electronics in KiCad for safe, remote motor ignition.',
    ],
    figures: [
      { src: img('/images/fig-08.png'), alt: 'SolidWorks render of the steel rocket motor static-fire test stand, front three-quarter view', caption: 'SolidWorks model of the static-fire test stand: steel frame sized for H-class motor thrust.' },
      { src: img('/images/fig-09.png'), alt: 'SolidWorks render of the steel rocket motor static-fire test stand, isometric angle', caption: 'Isometric view showing the motor mount and base-plate bracing.' },
    ],
  },

  // ─── Research ──────────────────────────────────────────────────────────────
  'atomic-strain': {
    ...research,
    tag: 'Chandra Dept. of ECE · Prof. Michael Becker · Aug 2024 – Aug 2025',
    title: 'Additive Manufacturing: Atomic Strain Analysis',
    heroImage: img('/images/fig-06.png'),
    software: ['OVITO', 'MATLAB', 'LAMMPS', 'Supercomputer Simulation Data'],
    roles: ['Undergraduate Research Assistant'],
    card: {
      image: img('/images/fig-06.png'),
      description: 'A MATLAB pipeline across 150+ LAMMPS runs showing how impact velocity and crystal orientation drive shear strain in Al₂O₃ particles.',
    },
    stats: [
      { value: '150+', label: 'LAMMPS Runs Analyzed' },
      { value: 'Al₂O₃', label: 'Particle Material' },
      { value: 'Atomic', label: 'Length Scale' },
    ],
    challenge: {
      title: 'Research Question',
      text: 'Characterize deformation in Al₂O₃ particles at the atomic scale, and examine how impact velocity and crystal orientation change the resulting shear-strain distributions.',
    },
    specs: [
      {
        title: 'Project',
        specs: [
          ['System', 'Strain Analysis'],
          ['Team', 'M. Hernandez, S. Pinapati'],
          ['Tools', 'OVITO / MATLAB / LAMMPS'],
          ['Date', 'Aug 2024 – Aug 2025'],
        ],
      },
    ],
    contributions: [
      'Built a MATLAB pipeline across 150+ LAMMPS runs showing how impact velocity and crystal orientation drive shear strain in Al₂O₃.',
      'Wrote code to parse and analyze large molecular-dynamics configuration files (.cfg) from LAMMPS simulations, working from supercomputer simulation data.',
      'Generated strain density functions to characterize deformation in Al₂O₃ particles at the atomic scale.',
      'Mapped deformation fields in OVITO to flag the crystal orientations most prone to fracture during particle deposition.',
    ],
    figures: [
      { src: img('/images/fig-06.png'), alt: 'Shear strain density visualizations across three impact simulation cases in an alumina particle', caption: 'Shear strain density across three simulated impact cases: the banded high-strain regions (yellow) trace deformation paths through the particle.', wide: true },
    ],
  },

  'hunch-medical-devices': {
    ...research,
    tag: 'NASA HUNCH · Houston, TX · 2023 – 2024',
    title: '3D-Printed Medical Devices',
    heroCover: TbFirstAidKit,
    heroCoverCode: 'NASA HUNCH · Biomedical',
    software: ['3D Printing', 'Sanitization Methods', 'Material Recycling'],
    roles: ['Engineering Intern'],
    card: {
      cover: TbFirstAidKit,
      coverCode: 'NASA HUNCH · Biomedical',
      description: 'A closed-loop process recycling used 3D-printed medical instruments into new stock, cutting waste and launch mass, plus sanitizing them after use.',
    },
    challenge: {
      title: 'Engineering Challenge',
      text: 'Make 3D-printed medical instruments practical for spaceflight: keep them sanitary after use, and reduce the waste and raw material that has to be carried to orbit.',
    },
    contributions: [
      'Studied how to sanitize 3D-printed medical instruments after use in flight-relevant conditions.',
      'Built a closed-loop process recycling used 3D-printed medical instruments into new stock, cutting waste and launch mass.',
    ],
  },

  'hunch-lunar-wheels': {
    ...research,
    tag: 'NASA HUNCH · Houston, TX · 2022 – 2023',
    title: 'Lunar Scooter Wheels',
    heroCover: TbMoon,
    heroCoverCode: 'NASA HUNCH · Prototype',
    software: ['Wheel Design', 'Tread Geometry', 'Prototyping'],
    roles: ['Engineering Intern'],
    card: {
      cover: TbMoon,
      coverCode: 'NASA HUNCH · Prototype',
      description: 'Lunar scooter wheels and tread geometry for ~1 m/s astronaut transit, trading contact area against regolith traction and mass.',
    },
    stats: [
      { value: '~1 m/s', label: 'Design Travel Speed' },
      { value: 'Front + Rear', label: 'Wheels Developed' },
    ],
    challenge: {
      title: 'Engineering Challenge',
      text: 'Lunar rover wheels are built for slow travel. An electric scooter carrying an astronaut needs wheels and tread suited to speeds near 1 m/s.',
    },
    contributions: [
      'Developed front and rear wheels for an electric lunar scooter, tuned for astronaut travel speeds near 1 m/s, far faster than typical rover wheels.',
      'Designed tread geometry for higher-speed lunar surface travel, trading contact area against regolith traction and mass.',
    ],
  },

  // ─── Team Projects ─────────────────────────────────────────────────────────
  'texas-moto-racing': {
    ...team,
    tag: 'MotoStudent International Competition · Sep 2026 – Present',
    title: 'Texas Moto Racing',
    inProgress: true,
    heroCover: TbMotorbike,
    heroCoverCode: 'TMR · MotoStudent eFuel',
    software: ['Fusion 360', 'Vehicle Dynamics', 'Chassis & Suspension Geometry', 'MotoStudent Rules (MS2627)', 'TIG-Welded 4130 Steel', 'Composite Bodywork'],
    roles: ['Founder', 'Vehicle Dynamics Lead'],
    card: {
      cover: TbMotorbike,
      coverCode: 'TMR · MotoStudent',
      description: "Founded UT Austin's first motorcycle engineering team for the 2026–27 MotoStudent eFuel class, and lead its Vehicle Dynamics subteam.",
    },
    stats: [
      { value: '1300 mm', label: 'Wheelbase' },
      { value: '23°', label: 'Rake' },
      { value: '43 mm', label: 'USD Forks' },
      { value: '10', label: 'Member Roster' },
    ],
    challenge: {
      title: 'The Team',
      text: 'Texas Moto Racing is the first motorcycle engineering team at The University of Texas at Austin, founded to compete in the 2026–27 MotoStudent International Competition eFuel class. Building it meant standing up the organization and designing a prototype motorcycle at the same time.',
    },
    specs: [
      {
        title: 'Prototype',
        specs: [
          ['Benchmark', 'Moto3'],
          ['Rear Suspension', 'Linkage rear shock'],
          ['Frame', 'TIG-welded 4130 steel'],
          ['Bodywork', 'Composite'],
          ['CAD', 'Fusion 360'],
        ],
      },
      {
        title: 'Competition',
        specs: [
          ['Event', 'MotoStudent International'],
          ['Class', 'eFuel'],
          ['Season', '2026–27'],
          ['Rules', 'MS2627'],
        ],
      },
    ],
    contributions: [
      'Founded the first motorcycle engineering team at The University of Texas at Austin for the 2026–27 MotoStudent eFuel class.',
      'Led org registration, recruited a 10-member roster, and pitched faculty advisors and sponsors.',
      'Leading the Vehicle Dynamics subteam: Moto3-benchmarked 1300 mm wheelbase and 23° rake, 43 mm USD forks, and a linkage rear shock.',
      'Modeling the prototype in Fusion 360 to MS2627 rules: TIG-welded 4130 steel frame and composite bodywork for in-house builds.',
    ],
  },

  'longhorn-baja': {
    ...team,
    tag: 'Baja SAE Collegiate Design Series · Oct 2026 – Present',
    title: 'Longhorn Baja Racing',
    inProgress: true,
    heroCover: TbSteeringWheel,
    heroCoverCode: 'Baja SAE · Ergonomics',
    software: ['Driver-Fit Testing', 'T-Slot Fixturing', 'Brake System Components'],
    roles: ['Ergonomics Subteam'],
    card: {
      cover: TbSteeringWheel,
      coverCode: 'Baja SAE',
      description: 'Ergonomics subteam: evaluating a T-slot jig for adjustable driver-fit testing, and researching master cylinders for next season\'s brakes.',
    },
    challenge: {
      title: 'The Subteam',
      text: "Longhorn Baja Racing builds an off-road car for the Baja SAE Collegiate Design Series. The Ergonomics subteam is responsible for how the driver fits the car: where the seat, steering wheel, and pedal box sit.",
    },
    contributions: [
      'Evaluating a T-slot jig that integrates the seat, steering wheel, and pedal box for adjustable driver-fit testing.',
      "Researching master cylinder options with a teammate for next season's brake system.",
    ],
  },
}

// Card-only entry (no detail page)
export const okrabot = {
  title: 'Okrabot',
  tag: 'Guinn Partners · Jan 2026 – Present',
  cover: TbPlant2,
  coverCode: 'Okrabot',
  description: 'Automated okra-harvesting robot: assembled the chassis frame that the robotic picking arm traverses along while harvesting okra.',
}

// Build a hub-page card from a project slug
export function cardFor(slug, extra = {}) {
  const p = projects[slug]
  const to = `${p.backTo}/${slug}`
  return {
    title: p.title,
    tag: p.tag,
    award: p.award,
    inProgress: p.inProgress,
    to,
    ...p.card,
    ...extra,
  }
}
