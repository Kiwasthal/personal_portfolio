import SphereGenerator from './SphereTemplate';

import { topspheresConfig } from './SphereConfigs';

const SwiperContent = () => {
  console.log(topspheresConfig);
  return topspheresConfig.map((sphere, index) => (
    <SphereGenerator key={index} sphere={sphere}></SphereGenerator>
  ));
};

export default SwiperContent;
