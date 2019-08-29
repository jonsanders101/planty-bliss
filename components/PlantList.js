import plantData from '../lib/plantData';
import Link from 'next/link';

const PlantList = () => (
  <ul>
    {plantData.map(plant => (
      <li>
        <Link href="/[id]" as={plant.id}>
          {plant.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default PlantList;
