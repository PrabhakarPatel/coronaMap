function updateMap() {
    console.log("updating map with rrealtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "#660066";
                }else{
                    color = `rgb(${cases},0,0)`;
                }
                //mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color:  color
                }).setLngLat([longitude, latitude])
                .addTo(map);
            });
        })
}
let interval = 20000;
setInterval( updateMap, interval);
