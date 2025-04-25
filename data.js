var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.423934528954362,
          "pitch": 0.22612476710665774,
          "rotation": 12.566370614359176,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4395141292909148,
          "pitch": -0.111924236753282,
          "title": "กระจกนิรภัย",
          "text": "กันกระสุน&nbsp;"
        }
      ]
    },
    {
      "id": "1-bedroom",
      "name": "bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1483,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7886516063126123,
          "pitch": 0.07690422743212899,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -2.549938892003702,
          "pitch": 0.09374473451293142,
          "rotation": 0.7853981633974483,
          "target": "2-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 2.079157996069805,
        "pitch": 0.18192635764228804,
        "fov": 1.4970896812780956
      },
      "linkHotspots": [
        {
          "yaw": 2.211769157263891,
          "pitch": 0.1473433574476566,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "test 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
