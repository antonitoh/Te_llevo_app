"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1353],{1353:(M,g,i)=>{i.r(g),i.d(g,{ViajesPageModule:()=>P});var m=i(6814),f=i(95),c=i(6728),l=i(6958),t=i(6689);const u=[{path:"",component:(()=>{var o;class a{constructor(n){this.zone=n}ngOnInit(){this.loadMap()}loadMap(){const n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA43NJDRk9YJJp4T6JtfbCO7t9mbQpha-E&callback=initMap",n.async=!0,n.defer=!0;const e=new Promise(r=>{n.onload=r});document.head.appendChild(n),e.then(()=>{this.initMap()})}initMap(){this.map=new google.maps.Map(document.getElementById("map"),{center:{lat:-33.03359023376858,lng:-71.53331285009457},zoom:15}),this.initAutocomplete()}initAutocomplete(){const n=document.getElementById("pac-input");this.searchBox=new google.maps.places.SearchBox(n),this.searchBox.addListener("places_changed",()=>{const e=this.searchBox.getPlaces();0!==e.length&&(this.zone.run(()=>{this.map.setCenter(e[0].geometry.location),this.map.setZoom(15)}),console.log("Ubicaci\xf3n seleccionada:",e[0]))})}buscarUbicacion(n){const e=n.target.value;(new google.maps.Geocoder).geocode({address:e},(p,d)=>{"OK"===d?this.zone.run(()=>{this.map.setCenter(p[0].geometry.location),this.map.setZoom(15)}):console.error("Error al geocodificar la ubicaci\xf3n:",d)})}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(t.R0b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-viajes"]],decls:8,vars:0,consts:[[3,"ionChange"],["id","map",2,"height","500px","width","80%","margin-left","auto","margin-right","auto"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"VIAJES"),t.qZA()(),t.TgZ(4,"ion-toolbar")(5,"ion-searchbar",0),t.NdJ("ionChange",function(p){return e.buscarUbicacion(p)}),t.qZA()()(),t.TgZ(6,"ion-content"),t._UZ(7,"div",1),t.qZA())},dependencies:[c.W2,c.Gu,c.VI,c.wd,c.sr,c.j9],styles:["#map[_ngcontent-%COMP%]{height:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0}#description[_ngcontent-%COMP%]{font-family:Roboto;font-size:15px;font-weight:300}#infowindow-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}#infowindow-content[_ngcontent-%COMP%]{display:none}#map[_ngcontent-%COMP%]   #infowindow-content[_ngcontent-%COMP%]{display:inline}.pac-card[_ngcontent-%COMP%]{background-color:#fff;border:0;border-radius:2px;box-shadow:0 1px 4px -1px #0000004d;margin:10px;font:400 18px Roboto,Arial,sans-serif;overflow:hidden;font-family:Roboto;padding:0}#pac-container[_ngcontent-%COMP%]{padding-bottom:12px;margin-right:12px}.pac-controls[_ngcontent-%COMP%]{display:inline-block;padding:5px 11px}.pac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Roboto;font-size:13px;font-weight:300}#pac-input[_ngcontent-%COMP%]{background-color:#fff;font-family:Roboto;font-size:15px;font-weight:300;margin-left:12px;padding:0 11px 0 13px;text-overflow:ellipsis;width:400px}#pac-input[_ngcontent-%COMP%]:focus{border-color:#4d90fe}#title[_ngcontent-%COMP%]{color:#fff;background-color:#4d90fe;font-size:25px;font-weight:500;padding:6px 12px}ion-content[_ngcontent-%COMP%]{--background: rgb(10, 121, 196)}"]}),a})()}];let h=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(u),l.Bz]}),a})(),P=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,f.u5,c.Pc,h]}),a})()}}]);