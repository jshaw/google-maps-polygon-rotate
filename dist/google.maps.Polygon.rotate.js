google.maps.LatLng.prototype.distanceTo=function(a){var b=Math.pow(this.lat()-a.lat(),2),c=Math.pow(this.lng()-a.lng(),2);return Math.sqrt(b+c)},google.maps.LatLng.prototype.rotate=function(a,b){var c=a*(Math.PI/180),d=this.distanceTo(b),e=c+Math.atan2(this.lng()-b.lng(),this.lat()-b.lat()),f=b.lat()+d*Math.cos(e),g=b.lng()+d*Math.sin(e);return new google.maps.LatLng(f,g)},google.maps.Polygon.prototype.getCenter=function(){var a=this.getPath().getArray(),b=new google.maps.LatLngBounds;return a.forEach(function(c,d){b.extend(a[d])}),b.getCenter()},google.maps.Polygon.prototype.rotate=function(a,b){var c=this.getPath().getArray();c.forEach(function(d,e){c[e]=d.rotate(a,b)}),gaza.setPaths(c)};