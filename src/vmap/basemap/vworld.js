import Tile from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
export default class VWorld {

    static getBase() {
        return new Tile({
            preload: Infinity,
            source: new XYZ({
                transition: 250,
                url: '//api.vworld.kr/req/wmts/1.0.0/3250440C-0812-3D80-BA2E-51B5768636B4/Base/{z}/{y}/{x}.png'
            })
        });
    }

    static getGray() {
        return new Tile({
            source: new XYZ({
                transition: 500,
                url: '//api.vworld.kr/req/wmts/1.0.0/3250440C-0812-3D80-BA2E-51B5768636B4/gray/{z}/{y}/{x}.png'
            })
        });
    }

    static getSatellite() {
        return new Tile({
            source: new XYZ({
                transition: 500,
                url: '//api.vworld.kr/req/wmts/1.0.0/3250440C-0812-3D80-BA2E-51B5768636B4/Satellite/{z}/{y}/{x}.jpeg'
            })
        });
    }

    static getMidnight() {
        return new Tile({
            source: new XYZ({
                transition: 500,
                url: '//api.vworld.kr/req/wmts/1.0.0/3250440C-0812-3D80-BA2E-51B5768636B4/midnight/{z}/{y}/{x}.png'
            })
        });
    }

    static getHybrid() {
        return new Tile({
            source: new XYZ({
                transition: 500,
                url: '//api.vworld.kr/req/wmts/1.0.0/3250440C-0812-3D80-BA2E-51B5768636B4/Hybrid/{z}/{y}/{x}.png'
            })
        });
    }

}