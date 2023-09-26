
<div id="header" align="center">
  <img src="https://github.com/YashiLin1/YashiLin1.github.io/blob/cs732-se75-assignment-yilin927-YashiLin/demogif.gif?raw=true"/>
</div>

## :smiley_cat:  MeowShop - A cute website with 3D objects and animation!
Check out the [live website](https://meowshop-yashi.vercel.app/)!
(This is my "Tech Demo" assignment for CS732 at the University of Auckland)

**&nbsp;**

## :tv:  Video Presentation
[View Online](https://drive.google.com/file/d/1VqUWqm-lMS4g613d4eHuUmZn1uJODRXi/view?usp=sharing)

# ⚡ Quick setup
- Install [Node.js](https://nodejs.org/en); install [VS Code](https://code.visualstudio.com/) (or any code-editing tool as you like)
- Clone this repository.
- Open your terminal and run command to install the necessary libraries
```
npm install --legacy-peer-deps
```
- Finally, launch website at your localhost.
```
npm run dev
```
### :warning: Note
It is necessary to set this flag `--legacy-peer-deps` in order to work around mismatches between several libraries I use! If ERROR appears then run `npm install` first and then run `npm install --legacy-peer-deps` again.

&nbsp;

# :hammer_and_wrench: Language & Tools
This website was built with React and several libraries for added functionality and aesthetics, including the use of WebGL for 3D objects.

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/blender/blender-original.svg" title="Blender" alt="Blender" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/threejs/threejs-original-wordmark.svg" title="threejs"  alt="threejs" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg" title="tailwindcss"  alt="tailwindcss" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" title="vscode" **alt="vscode" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" **alt="Git" width="40" height="40"/>
</div>

### :blue_heart: Web Development:
| Tools  | Notes |
| ------------- | ------------- |
| [Tailwind CSS](https://tailwindcss.com/)  | Popular utility-first CSS framework  |
| [ThreeJS](https://threejs.org/)  | An essential tool for any web development project that involves 3D graphics or animations.  |
| [React-tilt](https://www.npmjs.com/package/react-tilt)  | A lightweight library for creating interactive tilt effects.  |
| [React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)  | A React renderer for Three.js. Built specifically for integrating Three.js into React applications.  |
| [React-three/drei](https://github.com/pmndrs/drei) | A collection of helpers to simplify the process of building 3D graphics and animations using the Three.js library  |
| [Framer Motion](https://github.com/framer/motion)  | Animation and motion library for React that allows developers to easily create smooth and fluid animations with a declarative API.  |
| [Maath](https://github.com/pmndrs/maath)  | A collection of useful math helpers, random generators, bits and bobs.  | 
| [React Router DOM](https://reactrouter.com/en/main/start/tutorial)  | Implement dynamic routing in a web app. | 
| [WebGL](https://en.wikipedia.org/wiki/WebGL)  | A JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. | 

### :purple_heart: Web Design:
| Tools  | Notes |
| ------------- | ------------- |
| [Blender](https://www.blender.org/)  | Edit 3D models and export GLTF/GLB file (GL Transmission Format/GL Binary file format) for WebGl |
| [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)  | Web design and svg files |


&nbsp;
# :hammer_and_wrench: JS Libraries

### :leaves: Tailwind CSS
It provides me with a set of pre-built UI components and responsive utility classes to build the site quickly without writing custom CSS. 

### :cat: Framer Motion
I use various properties from Framer Motion to make this site a smooth browsing experience.
- `motion` is the object I mainly use in my website, it create motion-enabled versions of standard HTML elements so that it creates a div element that can be animated using the animate and transition properties from the library.
- `variants` property is used to define a set of animation states for a container element.
- `staggerContainer` function returns an object containing animation variants.
- `whileInView` is set to 'show', which means the element will be animated when it comes into view.

### :lollipop: ThreeJS - 3D Graphics & Animations
<span><img src="https://github.com/YashiLin1/meowshop/blob/main/docs/donut.gif" width="150"/></span> 

My website uses ThreeJS and its related libraries to create and display 3D graphics in a web browser using WebGL. With Three.js, you can make various objects, such as meshes, lights, and cameras, and render them to display in the browser. Check my [Donut.jsx file](https://github.com/YashiLin1/meowshop/blob/main/src/components/canvas/Donut.jsx) file for example:

- To create the illusion of movement, the computer needs to constantly update the position, rotation, and other properties of the donut so you need to create loops that update and render the donut each frame. My code uses `useFrame` hook from `@react-three/fiber` library to create a loop that updates and renders the scene each frame. 
- In the `Donut` component, `useFrame` hook updates the rotation of the donut model based on the elapsed time.
- In the `DonutCanvas` component, the `Canvas` component from `@react-three/fiber` is set up with the `frameloop` prop set to "demand", which creates a loop that updates and renders the scene each frame when needed.


### :deciduous_tree: React-three-fiber <sub>(ThreeJS related library)</sub>
I used this library to add light and camera so that they work together to illuminate the donut. 
- Use `Canvas` and `useFrame` components to produce the 3D canvas and handle rendering. 
-  The `hemisphereLight` component is used to create a light that is positioned directly above the scene and shines down from all directions. 
-  The `spotLight` component is used to create a focused light that shines in a specific direction and casts a shadow. 
-  The `pointLight` component is used to create a point light that illuminates the scene evenly in all directions.

This is what the 3D donut looks like with no light, only hemisphere light and full lights on it.

<span><img src="https://github.com/YashiLin1/meowshop/blob/main/docs/donut3.gif"/></span> 

### :strawberry: React-three/drei <sub>(ThreeJS related library)</sub>
- `useGLTF` hook allows loading 3D models in the glTF format, and accessing them as Three.js objects. It allows you to load this donut!
- `OrbitControls` component provides camera controls for the donut, allowing you to orbit this donut using the mouse!
- `Preload` shows a fallback UI while the donut is being loaded, which can help to avoid rendering delays during the loading process and improve performance!
- `Points` and `PointMaterial` in [Stars.jsx file](https://github.com/YashiLin1/meowshop/blob/main/src/components/canvas/Stars.jsx) are used to create a set of points that represent stars in the background. The background of my website is a 3D scene!
### :candy: React-tilt
This package use older version of React, but it has cool animation features. Therefore when installing packages, you need to add `--legacy-peer-deps` flag just for it.

<span><img src="https://github.com/YashiLin1/meowshop/blob/main/docs/card.gif" width="150"/></span> 

- `Tilt` is used to customize the 3D tilt effect on the card!


### :sparkles: Maath
I use the maath library (maath/random to be specific) for generating a set of random points as stars in the background. 

