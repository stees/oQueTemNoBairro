var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_0SPRMSPbaseSubprefeituras_1 = new ol.format.GeoJSON();
var features_0SPRMSPbaseSubprefeituras_1 = format_0SPRMSPbaseSubprefeituras_1.readFeatures(json_0SPRMSPbaseSubprefeituras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0SPRMSPbaseSubprefeituras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0SPRMSPbaseSubprefeituras_1.addFeatures(features_0SPRMSPbaseSubprefeituras_1);
var lyr_0SPRMSPbaseSubprefeituras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_0SPRMSPbaseSubprefeituras_1, 
                style: style_0SPRMSPbaseSubprefeituras_1,
                interactive: true,
                title: '<img src="styles/legend/0SPRMSPbaseSubprefeituras_1.png" /> 0 - SP-RMSP-base Subprefeituras'
            });
var format_0SPRMSPbaseRMSP_2 = new ol.format.GeoJSON();
var features_0SPRMSPbaseRMSP_2 = format_0SPRMSPbaseRMSP_2.readFeatures(json_0SPRMSPbaseRMSP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0SPRMSPbaseRMSP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0SPRMSPbaseRMSP_2.addFeatures(features_0SPRMSPbaseRMSP_2);
var lyr_0SPRMSPbaseRMSP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_0SPRMSPbaseRMSP_2, 
                style: style_0SPRMSPbaseRMSP_2,
                interactive: true,
                title: '<img src="styles/legend/0SPRMSPbaseRMSP_2.png" /> 0 - SP-RMSP-base RMSP'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_0SPRMSPbaseSubprefeituras_1.setVisible(true);lyr_0SPRMSPbaseRMSP_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_0SPRMSPbaseSubprefeituras_1,lyr_0SPRMSPbaseRMSP_2];
lyr_0SPRMSPbaseSubprefeituras_1.set('fieldAliases', {'fid': 'fid', 'sp_codigo': 'sp_codigo', 'sp_nome': 'sp_nome', });
lyr_0SPRMSPbaseRMSP_2.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Lei': 'Lei', });
lyr_0SPRMSPbaseSubprefeituras_1.set('fieldImages', {'fid': 'TextEdit', 'sp_codigo': 'TextEdit', 'sp_nome': 'TextEdit', });
lyr_0SPRMSPbaseRMSP_2.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Lei': 'TextEdit', });
lyr_0SPRMSPbaseSubprefeituras_1.set('fieldLabels', {'fid': 'no label', 'sp_codigo': 'no label', 'sp_nome': 'inline label', });
lyr_0SPRMSPbaseRMSP_2.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Lei': 'no label', });
lyr_0SPRMSPbaseRMSP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});