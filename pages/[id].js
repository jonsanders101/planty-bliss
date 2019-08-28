import { useRouter } from 'next/router';
import { getPlant } from '../lib/plantData';

export default function Plant() {
    const router = useRouter();

    const plant = getPlant(router.query.id);

    if (!plant) {
        return (<div>Oops, plant not found!</div>);
    }

    return (<div>Plant name: {plant.name}, Plant location: {plant.location}</div>)
}