# Google Maps Polygon Rotate Utilities ![GitHub version][github-image]

[![Bower version][bower-image][bower-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Total views][sourcegraph-image]][sourcegraph-url]

Rotate a `google.maps.Polygon` on Google Maps V3 relative to a `google.maps.LatLng`

## Table of contents

- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Compiling](#compiling-)
- [Contributing](#contributing)
- [Contribute and Earn](#contribute-and-earn)
- [Donating](#donating)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/ahmadnassri/google-maps-polygon-rotate/releases).
- Clone the repo: 
  ```bash
git clone git@github.com:ahmadnassri/google-maps-polygon-rotate.js.git
```

- Install with [Bower](http://bower.io) [![Bower version][bower-image]][bower-url]
  ```bash
bower install google-maps-polygon-rotate
```

### What's included

Within the download you'll find the following files, providing both compiled and minified variations:

```
google-maps-polygon-rotate/
├── dist
│   └── google.maps.Polygon.rotate.min.js
└── src
    ├── google.maps.LatLng.distanceTo.js
    ├── google.maps.LatLng.rotate.js
    ├── google.maps.Polygon.getCenter.js
    └── google.maps.Polygon.rotate.js

### Sample Usage

start by creating a new log instance:

```javascript
function initialize() {
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(24.886436490787712, -70.2685546875),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var bermudaTriangle;

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Define the LatLng coordinates for the polygon's path.
  var triangleCoords = [
    new google.maps.LatLng(25.774252, -80.190262),
    new google.maps.LatLng(18.466465, -66.118292),
    new google.maps.LatLng(32.321384, -64.75737),
    new google.maps.LatLng(25.774252, -80.190262)
  ];

  // Construct the polygon.
  bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  bermudaTriangle.setMap(map);

  google.maps.event.addListener(bermudaTriangle, 'click', function rotate () {
    var origin = bermudaTriangle.getCenter();

    bermudaTriangle.rotate(90, origin);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
```

## Documentation

Refer to the [Wiki](https://github.com/ahmadnassri/google-maps-polygon-rotate/wiki) for detailed API documentation.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/ahmadnassri/google-maps-polygon-rotate/issues).

## Compiling [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

This project uses [Grunt](http://gruntjs.com/). If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests.

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

### Contribute and Earn

Donate bitcoins to this project or make commits and get tips for it. If your commit is accepted by project maintainer and there are bitcoins on its balance, you will get a tip!

[![tip for next commit][tip4commit-image]][tip4commit-url]

## Donating

Donations are welcome to help support the continuous development of this project.

[![GitTip][gittip-image]][gittip-url]
[![PayPal][paypal-image]][paypal-url]

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this project is maintained under the Semantic Versioning guidelines. Sometimes we screw up, but we'll adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Authors

**Ahmad Nassri**

- Twitter: [@AhmadNassri](http://twitter.com/ahmadnassri)
- Website: [ahmadnassri.com](http://ahmadnassri.com)

## License

Licensed under [the MIT license](LICENSE).

[github-image]: https://badge.fury.io/gh/ahmadnassri%2Fgoogle-maps-polygon-rotate.js.png
[bower-url]: http://badge.fury.io/bo/google-maps-polygon-rotate.js
[bower-image]: https://badge.fury.io/bo/google-maps-polygon-rotate.js.png
[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/google-maps-polygon-rotate.js
[codeclimate-image]: https://codeclimate.com/github/ahmadnassri/google-maps-polygon-rotate.js.png
[coveralls-url]: https://coveralls.io/r/ahmadnassri/google-maps-polygon-rotate.js
[coveralls-image]: https://coveralls.io/repos/ahmadnassri/google-maps-polygon-rotate.js/badge.png
[sourcegraph-url]: https://sourcegraph.com/github.com/ahmadnassri/google-maps-polygon-rotate.js
[sourcegraph-image]: https://sourcegraph.com/api/repos/github.com/ahmadnassri/google-maps-polygon-rotate.js/counters/views.png
[gittip-url]: https://www.gittip.com/ahmadnassri/
[gittip-image]: http://img.shields.io/gittip/ahmadnassri.svg
[paypal-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UJ2B2BTK9VLRS&on0=project&os0=google-maps-polygon-rotate.js
[paypal-image]: http://img.shields.io/badge/PayPal-Donate-green.svg
[tip4commit-url]: http://tip4commit.com/projects/640
[tip4commit-image]: http://tip4commit.com/projects/640.svg
