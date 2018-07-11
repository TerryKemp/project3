mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja2dyb3NzbWFuIiwiYSI6ImNpbWZqeG1hMjAxcHl2Y202cmhlZGRjYXcifQ.1-so8LElW5dTGT5o941u1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jackgrossman/cjik9ad460fqo2spiry7jczkn",
  zoom: 6.39,
  center: [-72.6280813, 39.333501]
});
// map.addControl(new MapboxDirections({
//     accessToken: mapboxgl.accessToken
// }), 'top-left')
map.on("load", function() {
  map.loadImage(
    "https://cdn0.iconfinder.com/data/icons/hand-conversation/91/Hand_17-512.png",
    function(error, image) {
      if (error) throw error;
      map.addImage("shaka-sign", image);
      // Add a layer showing the state polygons.
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                id: 7297739,
                name: "Ryton",
                country: "GB",
                coord: {
                  lon: -2.35315,
                  lat: 52.624569
                }
              },
              {
                id: 7290656,
                name: "Redditch District",
                country: "GB",
                coord: {
                  lon: -1.94565,
                  lat: 52.279331
                }
              },
              {
                id: 7294048,
                name: "Prestatyn",
                country: "GB",
                coord: {
                  lon: -3.40514,
                  lat: 53.334641
                }
              },
              {
                id: 7294693,
                name: "Peterlee",
                country: "GB",
                coord: {
                  lon: -1.32905,
                  lat: 54.758461
                }
              },
              {
                id: 7301708,
                name: "Penarth",
                country: "GB",
                coord: {
                  lon: -3.18138,
                  lat: 51.43095
                }
              },
              {
                id: 7292284,
                name: "Oswestry",
                country: "GB",
                coord: {
                  lon: -3.05832,
                  lat: 52.857101
                }
              },
              {
                id: 7294581,
                name: "Northwich",
                country: "GB",
                coord: {
                  lon: -2.51575,
                  lat: 53.255798
                }
              },
              {
                id: 2657122,
                name: "Ards District",
                country: "GB",
                coord: {
                  lon: -5.58333,
                  lat: 54.5
                }
              },
              {
                id: 2641519,
                name: "Newtownards",
                country: "GB",
                coord: {
                  lon: -5.69092,
                  lat: 54.592361
                }
              },
              {
                id: 7300025,
                name: "Newquay",
                country: "GB",
                coord: {
                  lon: -5.07426,
                  lat: 50.424091
                }
              },
              {
                id: 7298888,
                name: "Nailsea",
                country: "GB",
                coord: {
                  lon: -2.77756,
                  lat: 51.424
                }
              },
              {
                id: 7293862,
                name: "Morley",
                country: "GB",
                coord: {
                  lon: -1.6034,
                  lat: 53.742901
                }
              },
              {
                id: 7293814,
                name: "Mirfield",
                country: "GB",
                coord: {
                  lon: -1.69404,
                  lat: 53.673901
                }
              },
              {
                id: 7291605,
                name: "Maesteg",
                country: "GB",
                coord: {
                  lon: -3.64713,
                  lat: 51.61528
                }
              },
              {
                id: 7296039,
                name: "Sutton",
                country: "GB",
                coord: {
                  lon: -2.0931,
                  lat: 53.227161
                }
              },
              {
                id: 3333218,
                name: "City of Westminster",
                country: "GB",
                coord: {
                  lon: -0.16667,
                  lat: 51.5
                }
              },
              {
                id: 7295996,
                name: "Sefton",
                country: "GB",
                coord: {
                  lon: -2.97287,
                  lat: 53.50441
                }
              },
              {
                id: 3333227,
                name: "East Dunbartonshire",
                country: "GB",
                coord: {
                  lon: -4.2,
                  lat: 55.933331
                }
              },
              {
                id: 3333226,
                name: "East Ayrshire",
                country: "GB",
                coord: {
                  lon: -4.25,
                  lat: 55.5
                }
              },
              {
                id: 7296076,
                name: "Keynsham",
                country: "GB",
                coord: {
                  lon: -2.49775,
                  lat: 51.41251
                }
              },
              {
                id: 7301693,
                name: "Kempston",
                country: "GB",
                coord: {
                  lon: -0.49955,
                  lat: 52.116791
                }
              },
              {
                id: 7299757,
                name: "Horwich",
                country: "GB",
                coord: {
                  lon: -2.52379,
                  lat: 53.603069
                }
              },
              {
                id: 7290564,
                name: "Dacorum District",
                country: "GB",
                coord: {
                  lon: -0.57377,
                  lat: 51.768509
                }
              },
              {
                id: 7290687,
                name: "Hastings District",
                country: "GB",
                coord: {
                  lon: 0.58145,
                  lat: 50.867279
                }
              },
              {
                id: 7291323,
                name: "Guisborough",
                country: "GB",
                coord: {
                  lon: -1.07738,
                  lat: 54.535629
                }
              },
              {
                id: 7290595,
                name: "Great Yarmouth District",
                country: "GB",
                coord: {
                  lon: 1.6469,
                  lat: 52.633961
                }
              },
              {
                id: 7290630,
                name: "South Staffordshire District",
                country: "GB",
                coord: {
                  lon: -2.15319,
                  lat: 52.604481
                }
              },
              {
                id: 7296623,
                name: "Goole",
                country: "GB",
                coord: {
                  lon: -0.87588,
                  lat: 53.70216
                }
              },
              {
                id: 7290556,
                name: "Fareham District",
                country: "GB",
                coord: {
                  lon: -1.21114,
                  lat: 50.8535
                }
              },
              {
                id: 7290639,
                name: "Epsom and Ewell District",
                country: "GB",
                coord: {
                  lon: -0.26017,
                  lat: 51.335732
                }
              },
              {
                id: 7290641,
                name: "Runnymede District",
                country: "GB",
                coord: {
                  lon: -0.53722,
                  lat: 51.394421
                }
              },
              {
                id: 7300545,
                name: "Ebbw Vale",
                country: "GB",
                coord: {
                  lon: -3.20482,
                  lat: 51.77298
                }
              },
              {
                id: 7290615,
                name: "Broxtowe District",
                country: "GB",
                coord: {
                  lon: -1.25781,
                  lat: 52.973049
                }
              },
              {
                id: 7296192,
                name: "Dunstable",
                country: "GB",
                coord: {
                  lon: -0.5173,
                  lat: 51.884651
                }
              },
              {
                id: 3333142,
                name: "City of Derby",
                country: "GB",
                coord: {
                  lon: -1.47217,
                  lat: 52.9207
                }
              },
              {
                id: 7300542,
                name: "Eccleshill",
                country: "GB",
                coord: {
                  lon: -2.4517,
                  lat: 53.706779
                }
              },
              {
                id: 7291971,
                name: "Cwmbran Central",
                country: "GB",
                coord: {
                  lon: -3.02699,
                  lat: 51.641171
                }
              },
              {
                id: 7300082,
                name: "Healeyfield",
                country: "GB",
                coord: {
                  lon: -1.8608,
                  lat: 54.830681
                }
              },
              {
                id: 7290582,
                name: "Ribble Valley District",
                country: "GB",
                coord: {
                  lon: -2.41624,
                  lat: 53.902439
                }
              },
              {
                id: 7299112,
                name: "Sodbury",
                country: "GB",
                coord: {
                  lon: -2.35653,
                  lat: 51.541489
                }
              },
              {
                id: 7296198,
                name: "Brymbo",
                country: "GB",
                coord: {
                  lon: -3.08351,
                  lat: 53.074551
                }
              },
              {
                id: 7296060,
                name: "Brixham",
                country: "GB",
                coord: {
                  lon: -3.51133,
                  lat: 50.390831
                }
              },
              {
                id: 7296000,
                name: "Bracknell",
                country: "GB",
                coord: {
                  lon: -0.75918,
                  lat: 51.406029
                }
              },
              {
                id: 7291483,
                name: "Blyth",
                country: "GB",
                coord: {
                  lon: -1.53835,
                  lat: 55.117748
                }
              },
              {
                id: 7299866,
                name: "Biggleswade",
                country: "GB",
                coord: {
                  lon: -0.24536,
                  lat: 52.078602
                }
              },
              {
                id: 7298694,
                name: "Berkhamsted",
                country: "GB",
                coord: {
                  lon: -0.5578,
                  lat: 51.755138
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "shaka-sign",
          "icon-size": 0.1,
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
      //   new mapboxgl.Popup()
      //     .setLngLat(e.lngLat)
      //     .setHTML(allConditions)
      //     .addTo(map),
      //     { once: true };
    }
  );
});
