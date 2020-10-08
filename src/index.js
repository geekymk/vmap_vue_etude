import Vmap from './vmap/vmap';
import Vworld from './vmap/basemap/vworld';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom'; {
    const baseMap = Vworld.getBase();
    const midnightMap = Vworld.getMidnight();
    midnightMap.setVisible(false);
    const satelliteMap = Vworld.getSatellite();
    satelliteMap.setVisible(false);
    const hybridMap = Vworld.getHybrid();
    hybridMap.setVisible(false);
    const layers = [baseMap, midnightMap, satelliteMap, hybridMap];
    const mainMap = new Vmap({
        layers: layers
    });
    const mouseWheelZoom = new MouseWheelZoom({
        // duration: 350,
        duration: 0,
        timeout: 50
    });
    mainMap._map.addInteraction(mouseWheelZoom);
    console.log('안녕하소');
}