import Vmap from './vmap/vmap';
import OverviewMap from 'ol/control/OverviewMap';
import ScaleLine from 'ol/control/ScaleLine';
import MousePosition from 'ol/control/MousePosition';;
import Zoom from 'ol/control/Zoom'; {
    const mainMap = new Vmap();
    const overviewMap = new OverviewMap({
        tipLabel: '미니맵',
        collapsed: false,
        className: 'ol-zoom'
    });
    const scaleLine = new ScaleLine({

    });
    const mousePosition = new MousePosition({

    });
    const zoom = new Zoom({

    });
    mainMap._map.addControl(overviewMap);
    mainMap._map.addControl(scaleLine);
    mainMap._map.addControl(mousePosition);
    mainMap._map.addControl(zoom);
    console.log('안녕하소');
}