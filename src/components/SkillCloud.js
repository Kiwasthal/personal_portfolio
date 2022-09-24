import { useEffect, useRef, useState } from 'react';

const SkillCloud = ({ skills }) => {
  const config = {
    radius: 100,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
    useContainerInlineStyles: true,
    containerClass: 'tagcloud',
    itemClass: 'tagcloud--item',
  };
  const containerRef = useRef();
  const radius = config.radius;
  const depth = 2 * radius;
  const size = 1.5 * radius;

  const getMaxSpeed = name => ({ slow: 0.5, normal: 1, fase: 2 }[name] || 1);
  const getInitSpeed = name => ({ slow: 16, normal: 32, fast: 80 }[name] || 32);
  const maxSpeed = getMaxSpeed(config.initSpeed);
  const initSpeed = getInitSpeed(config.initSpeed);

  const direction = config.direction;
  const keep = config.keep;
  const [texts, setTexts] = useState(skills);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);

  const [mouseX0, setMouseX0] = useState(
    initSpeed * Math.sin(direction * (Math.PI / 180))
  );
  const [mouseY0, setMouseYO] = useState(
    initSpeed * Math.cos(direction * (Math.PI / 180))
  );

  const [mouseX, setMouseX] = useState(mouseX0);
  const [mouseY, setMouseY] = useState(mouseY0);

  const [items, setItems] = useState([]);

  const computePosition = (index, random = false) => {
    const textsLength = texts.length;
    if (random) index = Math.floor(Math.random() * (textsLength + 1));
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
      x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (size * Math.cos(phi)) / 2,
    };
  };

  const requestInterval = (fn, delay) => {
    const requestAnimFrame = (
      (() => window.requestAnimationFrame) ||
      ((callback, element) => {
        window.setTimeout(callback, 1000 / 60);
      })
    )();
    let start = new Date().getTime();
    const handle = {};
    function loop() {
      handle.value = requestAnimFrame(loop);
      const current = new Date().getTime(),
        delta = current - start;
      if (delta <= delay) {
        fn.call();
        start = new Date().getTime();
      }
    }
    handle.value = requestAnimFrame(loop);
    return handle;
  };

  useEffect(() => {
    if (paused) return;

    if (!keep && active) {
      setMouseX(
        Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2
      );
      setMouseY(
        Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2
      );
    }

    const a = -(Math.min(Math.max(mouseY, -size), size) / radius) * maxSpeed;
    const b = (Math.min(Math.max(mouseX, -size), size) / radius) * maxSpeed;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return;

    const l = Math.PI / 180;

    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l),
    ];

    for (let i = 0; i < items.length; i++) {
      let newItem = items[i];

      const rx1 = newItem.x;
      const ry1 = newItem.y * sc[1] + newItem.z * -sc[0];
      const rz1 = newItem.y * sc[0] + newItem.z * sc[1];

      const rx2 = rx1 * sc[3] + rz1 * sc[2];
      const ry2 = ry1;
      const rz2 = rz1 * sc[3] - rx1 * sc[2];

      const per = (2 * depth) / (2 * depth + rz2); // todo

      newItem.x = rx2;
      newItem.y = ry2;
      newItem.z = rz2;
      newItem.scale = per.toFixed(3);
      let alpha = per * per - 0.25;
      alpha = (alpha > 1 ? 1 : alpha).toFixed(3);

      // const left = (newItem.x - newItem.offsetWidth / 2).toFixed(2);
      // const top = (newItem.y - newItem.offsetHeight / 2).toFixed(2);
      // const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;
      // console.log(transform);
      // newItem.style.WebkitTransform = transform;
      // newItem.style.MozTransform = transform;
      // newItem.style.OTransform = transform;
      // newItem.style.transform = transform;
      // newItem.style.filter = `alpha(opacity=${100 * alpha})`;
      // newItem.style.opacity = alpha;

      const newItems = [...items];
      newItems[0] = newItem;
      setItems(newItems);
    }
    setMouseX(initSpeed * Math.sin(direction * (Math.PI / 180)));
    setMouseY(initSpeed * Math.cos(direction * (Math.PI / 180)));

    let interval = requestInterval(() => {}, 10);
    console.log('X');
  });

  const CreateTextItems = (text, index = 0) => {
    const transformOrigin = '50% 50%';
    const transform = 'translate3d(-50%, -50%, 0) scale(1)';
    const item = {};
    if (config.useContainerInlineStyles) {
      item.style = {
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
        // WebkitTransform: transform,
        MozTransform: transform,
        OTransform: transform,
        transform: transform,
      };
      console.log('here', item);
      item.text = text;
      setItems([
        ...items,
        {
          el: item,
          ...computePosition(index),
        },
      ]);
    }
  };

  useEffect(() => {
    texts.forEach((text, index) => {
      CreateTextItems(text, index);
    });
  });
  console.log(items);

  return (
    <div
      className={config.useContainerInlineStyles ? 'relative' : ''}
      style={
        config.useContainerInlineStyles
          ? { width: `${radius * 2}px`, height: `${radius * 2}px` }
          : {}
      }
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseOut={() => {
        setActive(false);
      }}
      onMouseMove={e => {
        e = e || window.event;
        // const rect = containerRef.getBoundingErrors();
        // setMouseX((e.clientX - (rect.left + rect.width / 2)) / 5);
        // setMouseY((e.clientY - (rect.top + rect.height / 2)) / 5);
      }}
      ref={containerRef}
    >
      {items &&
        items.map((item, index) => {
          return <span key={index} style={item.style}></span>;
        })}
    </div>
  );
};

export default SkillCloud;
