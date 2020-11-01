import React from "react";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';

const mapState = {
    center: [55.753700, 37.621704],
    zoom: 13
};

export default function YMap() {
    return <div>
        <YMaps>
            <Map state={mapState} width='100%'>
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    geometry={[55.753700, 37.621704]}
                    properties={{
                        balloonContentHeader: "ПроГражданство.РФ",
                    }}
                />
                <ZoomControl
                    defaultOptions
                />
            </Map>
        </YMaps>
    </div>
}