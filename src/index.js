import Vmap from './vmap/vmap';
import Vworld from './vmap/basemap/vworld';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom'; {
    const midnightMap = Vworld.getMidnight();
    midnightMap.setVisible(false);
    const satelliteMap = Vworld.getSatellite();
    const hybridMap = Vworld.getHybrid();
    const layers = [midnightMap, satelliteMap, hybridMap];
    const mainMap = new Vmap({
        layers: layers
    });
    const mouseWheelZoom = new MouseWheelZoom({
        duration: 350,
        timeout: 50
    });
    mainMap._map.addInteraction(mouseWheelZoom);
    console.log('안녕하소');
}