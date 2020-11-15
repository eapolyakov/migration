import React from "react";
import {Map, YMaps, Placemark, ZoomControl} from 'react-yandex-maps';

const mapState = {
    center: [55.723891, 37.688557],
    zoom: 16
};

export default function YMap() {
    return <div>
        <YMaps>
            <Map state={mapState} width='100%'>
                <Placemark
                    modules={["geoObject.addon.balloon"]}
                    geometry={[55.723891, 37.688557]}
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