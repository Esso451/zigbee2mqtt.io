"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96534],{95544:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-3e47e29c","path":"/devices/JS-MC-SENSOR-ZB.html","title":"JAVIS JS-MC-SENSOR-ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"JAVIS JS-MC-SENSOR-ZB control via MQTT","description":"Integrate your JAVIS JS-MC-SENSOR-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance_lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Led_enable (binary)","slug":"led-enable-binary","link":"#led-enable-binary","children":[]},{"level":3,"title":"Keep_time (enum)","slug":"keep-time-enum","link":"#keep-time-enum","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Illuminance_calibration (numeric)","slug":"illuminance-calibration-numeric","link":"#illuminance-calibration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688832698000},"filePathRelative":"devices/JS-MC-SENSOR-ZB.md"}')},418254:(e,i,t)=>{t.r(i),t.d(i,{default:()=>p});var a=t(166252);const n=(0,a._)("h1",{id:"javis-js-mc-sensor-zb",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#javis-js-mc-sensor-zb","aria-hidden":"true"},"#"),(0,a.Uk)(" JAVIS JS-MC-SENSOR-ZB")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"JS-MC-SENSOR-ZB")],-1),c=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Microwave sensor")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"occupancy, illuminance_lux, led_enable, keep_time, sensitivity, illuminance_calibration, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/JS-MC-SENSOR-ZB.jpg",alt:"JAVIS JS-MC-SENSOR-ZB"})])],-1),r=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="led-enable-binary" tabindex="-1"><a class="header-anchor" href="#led-enable-binary" aria-hidden="true">#</a> Led_enable (binary)</h3><p>Enabled LED. Value can be found in the published state on the <code>led_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led_enable is ON, if <code>false</code> OFF.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum" aria-hidden="true">#</a> Keep_time (enum)</h3><p>PIR keep time 0:5s|1:30s|2:60s|3:180s|4:300s|5:600s|6:1200s|7:1800s. Value can be found in the published state on the <code>keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>25</code>, <code>50</code>, <code>75</code>, <code>100</code>.</p><h3 id="illuminance-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-calibration-numeric" aria-hidden="true">#</a> Illuminance_calibration (numeric)</h3><p>Illuminance calibration. Value can be found in the published state on the <code>illuminance_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-10000</code> and the maximum value is <code>10000</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),h={},p=(0,t(983744).Z)(h,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),n,(0,a._)("table",null,[l,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=JAVIS"},{default:(0,a.w5)((()=>[(0,a.Uk)("JAVIS")])),_:1})])]),d,s,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),r])}]])}}]);