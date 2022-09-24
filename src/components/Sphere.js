import '../main.css';

const Sphere = () => {
  const sphere = new Array(12).fill('plane');
  const dots = new Array(36).fill('dot');

  let aDelay = i => {
    switch (i) {
      case 1:
      case 35:
        return 0.05;
      case 2:
      case 34:
        return 1;
      case 3:
      case 33:
        return 0.15;
      case 4:
      case 32:
        return 0.2;
      case 5:
      case 31:
        return 0.25;
      case 6:
      case 30:
        return 0.3;
      case 7:
      case 29:
        return 0.35;
      case 8:
      case 28:
        return 0.4;
      case 9:
      case 27:
        return 0.45;
      case 10:
      case 26:
        return 0.5;
      case 11:
      case 25:
        return 0.55;
      case 12:
      case 24:
        return 0.6;
      case 13:
      case 23:
        return 0.65;
      case 14:
      case 22:
        return 0.7;
      case 15:
      case 21:
        return 0.75;
      case 16:
      case 20:
        return 0.8;
      case 17:
      case 19:
        return 0.85;
      case 18:
        return 0.9;
      case 36:
        return 0;
      default:
        return 1;
    }
  };

  return (
    <div className="main-wrapper bg-slate-900">
      <div className="sphere-wrapper">
        {sphere.map((item, index) => {
          return (
            <div
              key={index}
              className="plane"
              style={{ transform: `rotateY(${index * 15}deg)` }}
            >
              {dots.map((dot, index) => {
                return (
                  <div
                    key={index}
                    className="spoke"
                    style={{ transform: `rotateZ(${index}0deg)` }}
                  >
                    <div
                      className="dot"
                      style={{
                        backgroundColor: `${
                          index % 2 === 0 ? '#be185d' : '#be123c'
                        }`,
                        animation: `pulsate 2s infinite ${aDelay(
                          index
                        )}s alternate both`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sphere;
