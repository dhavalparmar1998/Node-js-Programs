var convertapi = require('convertapi')('Aonk9okrlMhGR4w6');

var convertapi = require('convertapi')('Aonk9okrlMhGR4w6');
convertapi.convert('xlsx', {
    File: 'home.html'
}, 'html').then(function(result) {
    result.saveFiles('home.xlsx');
});