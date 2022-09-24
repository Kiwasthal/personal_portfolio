import { createRef, useEffect, useRef, useState } from 'react';
import mongo from './icons/mongo.svg';
import css3 from './icons/css-3.svg';
import firebase from './icons/firebase.svg';
import redux from './icons/redux.svg';
import html from './icons/html-5.svg';
import javascript from './icons/javascript.svg';
import nextjs from './icons/nextjs-icon.svg';
import tailwind from './icons/tailwindcss-icon.svg';
import typescript from './icons/typescript-icon.svg';
import nodejs from './icons/nodejs.svg';
import jest from './icons/jest.svg';

const defaultStyles = {
  getContainer: (radius, fullWidth, fullHeight) => ({
    position: 'relative',
    width: fullWidth ? '100%' : `${2 * radius}px`,
    maxWidth: '100%',
    minHeight: `${2 * radius}px`,
    height: fullHeight ? '100%' : `${2 * radius}px`,
    touchAction: 'none',
  }),
};

const computeInitialPosition = (index, textsLength, size) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const updateItemPosition = (item, sc, depth) => {
  const newItem = { ...item, scale: '' };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2); // todo
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = newItem.ref.current;

  const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);

  const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
  const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;

  itemEl.style.WebkitTransform = transform;

  itemEl.style.MozTransform = transform;

  itemEl.style.OTransform = transform;

  itemEl.style.transform = transform;

  itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
    (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
  }px)`;
  itemEl.style.zIndex = Math.floor(alpha * 1000);

  itemEl.style.opacity = alpha;

  return newItem;
};

const createItem = (text, index, textsLength, size, itemRef) => {
  const transformOrigin = '50% 50%';
  const transform = 'translate3d(-50%, -50%, 0) scale(1)';
  const itemStyles = {
    willChange: 'transform, opacity, filter',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: index + 1,
    filter: 'alpha(opacity=0)',
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  };

  const itemEl = (
    <span ref={itemRef} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size),
  };
};

const defaultState = {
  texts: [
    <img width={62} src={css3} alt="rotating CSS-3 icon" />,
    <img width={70} src={nextjs} alt="Rotating Next-JS icon" />,
    <img width={42} src={mongo} alt="Rotating mongoDB icon" />,
    <img width={65} src={javascript} alt="Rotating JavaScript icon" />,
    <img width={62} src={html} alt="Rotating HTML-5 icon" />,
    <img width={80} src={tailwind} alt="Rotating TailwindCSS icon" />,
    <img
      width={90}
      src={'https://cdn.svgporn.com/logos/react.svg'}
      alt="Rotating React Icon"
    />,
    <img width={80} src={redux} alt="Rotating Redux icon" />,
    <img width={65} src={typescript} alt="Rotating TypeScript icon" />,
    <img width={60} src={firebase} alt="Rotating Firebase icon" />,
    // <img width={120} src={express} alt="Rotating Expresr icon" />,
    <span className="text-3xl text-white">Express</span>,
    <img width={100} src={nodejs} alt="Rotating NodeJS icon" />,
    <img width={70} src={jest} alt="Rotating NodeJS icon" />,
  ],
  maxSpeed: 7,
  initialSpeed: 32,
  initialDirection: 135,
  keepRollingAfterMouseOut: false,
  useContainerInlineStyles: true,
  fullWidth: true,
  fullHeight: false,
};

const TagSphere = props => {
  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  } = { ...defaultState, ...props };

  let radius = props.radius || texts.length * 30;

  const depth = 2 * radius;
  const size = 1.5 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(() =>
      texts.map((text, index) =>
        createItem(text, index, texts.length, size, itemHooks[index])
      )
    );
  }, [texts]);

  const containerRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = e => {
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = e => {
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (
      touchX > rect.left &&
      touchX < rect.right &&
      touchY < rect.bottom &&
      touchY > rect.top
    ) {
      return true;
    }

    return false;
  };

  const next = () => {
    setItems(items => {
      if (lessSpeed === 0) return items;

      let a, b;
      if (!keepRollingAfterMouseOut && !active && !firstRender) {
        setLessSpeed(lessSpeedCurrent => {
          const lessConstant = lessSpeed * (maxSpeed / 200);

          return lessSpeedCurrent - lessConstant > 0.01
            ? lessSpeedCurrent - lessConstant
            : 0;
        });

        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;
      } else if (!active && !firstRender && keepRollingAfterMouseOut) {
        a =
          -(Math.min(Math.max(-mouseY, -size), size) / radius) *
          (maxSpeed * 0.5);
        b =
          (Math.min(Math.max(-mouseX, -size), size) / radius) *
          (maxSpeed * 0.5);
      } else {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      }

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause

      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      return items.map(item => updateItemPosition(item, sc, depth));
    });
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 =
      -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems(items => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius]);

  return (
    <div
      className={props.className}
      ref={containerRef}
      onMouseOver={() => {
        setActive(() => true);
        setFirstRender(() => false);
        setLessSpeed(() => maxSpeed);
      }}
      onMouseOut={() => {
        setActive(() => false);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(() => maxSpeed);
        setFirstRender(() => false);
      }}
      onTouchMove={e => {
        if (checkTouchCoordinates(e)) {
          handleMouseMove(e.targetTouches[0]);
        } else {
          setActive(false);
        }
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }
    >
      {items.map(item => item.el)}
    </div>
  );
};

export default TagSphere;
