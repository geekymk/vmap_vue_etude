import Map from 'ol/Map';
import View from 'ol/View';
import Vworld from './basemap/vworld'
export default class Vmap {

    constructor(opt) {
        const defaultLayer = Vworld.getBase();
        opt = opt || {};
        opt.controls = opt.controls || [];
        opt.target = opt.target || 'map';
        opt.layers = opt.layers || [defaultLayer];
        opt.view = opt.view || new View({
            enableRotation: false,
            extent: [12523442.714243278, 3130860.6785608195, 15654303.392804097, 5635549.221409474],
            center: [14135167.490159886, 4518386.171644602],
            zoom: 16,
            minZoom: 6,
            maxZoom: 19
        });
        opt.loadTilesWhileAnimating = true;
        opt.loadTilesWhileInteracting = true;
        this._map = new Map(opt);
    }

}