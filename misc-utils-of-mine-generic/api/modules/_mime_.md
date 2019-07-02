[misc-utils-of-mine-generic](../README.md) > ["mime"](../modules/_mime_.md)

# External module: "mime"

## Index

### Functions

* [getExtensionsForMimeType](_mime_.md#getextensionsformimetype)
* [getMimeTypeForExtension](_mime_.md#getmimetypeforextension)

### Object literals

* [commonExtensionMimeTypeMap](_mime_.md#commonextensionmimetypemap)

---

## Functions

<a id="getextensionsformimetype"></a>

###  getExtensionsForMimeType

▸ **getExtensionsForMimeType**(mimeType: *`string`*): `undefined` \| `""` \| `string`[]

*Defined in [mime.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L13)*

Returns known extensions for given MimeType or undefined if none is found. This only considers nginx mime type list form [https://github.com/jshttp/mime-db](https://github.com/jshttp/mime-db)

**Parameters:**

| Name | Type |
| ------ | ------ |
| mimeType | `string` |

**Returns:** `undefined` \| `""` \| `string`[]

___
<a id="getmimetypeforextension"></a>

###  getMimeTypeForExtension

▸ **getMimeTypeForExtension**(extension: *`string`*): `undefined` \| `string`

*Defined in [mime.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L5)*

Returns mimetype associated to given extension or undefined if none is found. This only considers nginx mime type list form [https://github.com/jshttp/mime-db](https://github.com/jshttp/mime-db)

**Parameters:**

| Name | Type |
| ------ | ------ |
| extension | `string` |

**Returns:** `undefined` \| `string`

___

## Object literals

<a id="commonextensionmimetypemap"></a>

### `<Const>` commonExtensionMimeTypeMap

**commonExtensionMimeTypeMap**: *`object`*

*Defined in [mime.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L19)*

<a id="commonextensionmimetypemap.application_atom_xml"></a>

####  application/atom+xml

**application/atom+xml**: *`object`*

*Defined in [mime.ts:20](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L20)*

<a id="commonextensionmimetypemap.application_atom_xml.extensions"></a>

####  extensions

**● extensions**: *`string`[]* =  ['atom']

*Defined in [mime.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L21)*

___

___
<a id="commonextensionmimetypemap.application_java_archive"></a>

####  application/java-archive

**application/java-archive**: *`object`*

*Defined in [mime.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L23)*

<a id="commonextensionmimetypemap.application_java_archive.extensions-1"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jar', 'war', 'ear']

*Defined in [mime.ts:24](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L24)*

___

___
<a id="commonextensionmimetypemap.application_javascript"></a>

####  application/javascript

**application/javascript**: *`object`*

*Defined in [mime.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L26)*

<a id="commonextensionmimetypemap.application_javascript.extensions-2"></a>

####  extensions

**● extensions**: *`string`[]* =  ['js']

*Defined in [mime.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L27)*

___

___
<a id="commonextensionmimetypemap.application_json"></a>

####  application/json

**application/json**: *`object`*

*Defined in [mime.ts:29](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L29)*

<a id="commonextensionmimetypemap.application_json.extensions-3"></a>

####  extensions

**● extensions**: *`string`[]* =  ['json']

*Defined in [mime.ts:30](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L30)*

___

___
<a id="commonextensionmimetypemap.application_mac_binhex40"></a>

####  application/mac-binhex40

**application/mac-binhex40**: *`object`*

*Defined in [mime.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L32)*

<a id="commonextensionmimetypemap.application_mac_binhex40.extensions-4"></a>

####  extensions

**● extensions**: *`string`[]* =  ['hqx']

*Defined in [mime.ts:33](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L33)*

___

___
<a id="commonextensionmimetypemap.application_msword"></a>

####  application/msword

**application/msword**: *`object`*

*Defined in [mime.ts:35](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L35)*

<a id="commonextensionmimetypemap.application_msword.extensions-5"></a>

####  extensions

**● extensions**: *`string`[]* =  ['doc']

*Defined in [mime.ts:36](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L36)*

___

___
<a id="commonextensionmimetypemap.application_octet_stream"></a>

####  application/octet-stream

**application/octet-stream**: *`object`*

*Defined in [mime.ts:38](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L38)*

<a id="commonextensionmimetypemap.application_octet_stream.extensions-6"></a>

####  extensions

**● extensions**: *`string`[]* =  ['bin', 'exe', 'dll', 'deb', 'dmg', 'iso', 'img', 'msi', 'msp', 'msm']

*Defined in [mime.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L39)*

___

___
<a id="commonextensionmimetypemap.application_pdf"></a>

####  application/pdf

**application/pdf**: *`object`*

*Defined in [mime.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L41)*

<a id="commonextensionmimetypemap.application_pdf.extensions-7"></a>

####  extensions

**● extensions**: *`string`[]* =  ['pdf']

*Defined in [mime.ts:42](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L42)*

___

___
<a id="commonextensionmimetypemap.application_postscript"></a>

####  application/postscript

**application/postscript**: *`object`*

*Defined in [mime.ts:44](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L44)*

<a id="commonextensionmimetypemap.application_postscript.extensions-8"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ps', 'eps', 'ai']

*Defined in [mime.ts:45](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L45)*

___

___
<a id="commonextensionmimetypemap.application_rss_xml"></a>

####  application/rss+xml

**application/rss+xml**: *`object`*

*Defined in [mime.ts:47](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L47)*

<a id="commonextensionmimetypemap.application_rss_xml.extensions-9"></a>

####  extensions

**● extensions**: *`string`[]* =  ['rss']

*Defined in [mime.ts:48](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L48)*

___

___
<a id="commonextensionmimetypemap.application_rtf"></a>

####  application/rtf

**application/rtf**: *`object`*

*Defined in [mime.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L50)*

<a id="commonextensionmimetypemap.application_rtf.extensions-10"></a>

####  extensions

**● extensions**: *`string`[]* =  ['rtf']

*Defined in [mime.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L51)*

___

___
<a id="commonextensionmimetypemap.application_vnd_apple_mpegurl"></a>

####  application/vnd.apple.mpegurl

**application/vnd.apple.mpegurl**: *`object`*

*Defined in [mime.ts:53](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L53)*

<a id="commonextensionmimetypemap.application_vnd_apple_mpegurl.extensions-11"></a>

####  extensions

**● extensions**: *`string`[]* =  ['m3u8']

*Defined in [mime.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L54)*

___

___
<a id="commonextensionmimetypemap.application_vnd_google_earth_kml_xml"></a>

####  application/vnd.google-earth.kml+xml

**application/vnd.google-earth.kml+xml**: *`object`*

*Defined in [mime.ts:56](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L56)*

<a id="commonextensionmimetypemap.application_vnd_google_earth_kml_xml.extensions-12"></a>

####  extensions

**● extensions**: *`string`[]* =  ['kml']

*Defined in [mime.ts:57](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L57)*

___

___
<a id="commonextensionmimetypemap.application_vnd_google_earth_kmz"></a>

####  application/vnd.google-earth.kmz

**application/vnd.google-earth.kmz**: *`object`*

*Defined in [mime.ts:59](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L59)*

<a id="commonextensionmimetypemap.application_vnd_google_earth_kmz.extensions-13"></a>

####  extensions

**● extensions**: *`string`[]* =  ['kmz']

*Defined in [mime.ts:60](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L60)*

___

___
<a id="commonextensionmimetypemap.application_vnd_ms_excel"></a>

####  application/vnd.ms-excel

**application/vnd.ms-excel**: *`object`*

*Defined in [mime.ts:62](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L62)*

<a id="commonextensionmimetypemap.application_vnd_ms_excel.extensions-14"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xls']

*Defined in [mime.ts:63](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L63)*

___

___
<a id="commonextensionmimetypemap.application_vnd_ms_fontobject"></a>

####  application/vnd.ms-fontobject

**application/vnd.ms-fontobject**: *`object`*

*Defined in [mime.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L65)*

<a id="commonextensionmimetypemap.application_vnd_ms_fontobject.extensions-15"></a>

####  extensions

**● extensions**: *`string`[]* =  ['eot']

*Defined in [mime.ts:66](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L66)*

___

___
<a id="commonextensionmimetypemap.application_vnd_ms_powerpoint"></a>

####  application/vnd.ms-powerpoint

**application/vnd.ms-powerpoint**: *`object`*

*Defined in [mime.ts:68](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L68)*

<a id="commonextensionmimetypemap.application_vnd_ms_powerpoint.extensions-16"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ppt']

*Defined in [mime.ts:69](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L69)*

___

___
<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_graphics"></a>

####  application/vnd.oasis.opendocument.graphics

**application/vnd.oasis.opendocument.graphics**: *`object`*

*Defined in [mime.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L71)*

<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_graphics.extensions-17"></a>

####  extensions

**● extensions**: *`string`[]* =  ['odg']

*Defined in [mime.ts:72](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L72)*

___

___
<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_presentation"></a>

####  application/vnd.oasis.opendocument.presentation

**application/vnd.oasis.opendocument.presentation**: *`object`*

*Defined in [mime.ts:74](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L74)*

<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_presentation.extensions-18"></a>

####  extensions

**● extensions**: *`string`[]* =  ['odp']

*Defined in [mime.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L75)*

___

___
<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_spreadsheet"></a>

####  application/vnd.oasis.opendocument.spreadsheet

**application/vnd.oasis.opendocument.spreadsheet**: *`object`*

*Defined in [mime.ts:77](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L77)*

<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_spreadsheet.extensions-19"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ods']

*Defined in [mime.ts:78](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L78)*

___

___
<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_text"></a>

####  application/vnd.oasis.opendocument.text

**application/vnd.oasis.opendocument.text**: *`object`*

*Defined in [mime.ts:80](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L80)*

<a id="commonextensionmimetypemap.application_vnd_oasis_opendocument_text.extensions-20"></a>

####  extensions

**● extensions**: *`string`[]* =  ['odt']

*Defined in [mime.ts:81](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L81)*

___

___
<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_presentationml_presentation"></a>

####  application/vnd.openxmlformats-officedocument.presentationml.presentation

**application/vnd.openxmlformats-officedocument.presentationml.presentation**: *`object`*

*Defined in [mime.ts:83](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L83)*

<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_presentationml_presentation.extensions-21"></a>

####  extensions

**● extensions**: *`string`[]* =  ['pptx']

*Defined in [mime.ts:84](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L84)*

___

___
<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_spreadsheetml_sheet"></a>

####  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

**application/vnd.openxmlformats-officedocument.spreadsheetml.sheet**: *`object`*

*Defined in [mime.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L86)*

<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_spreadsheetml_sheet.extensions-22"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xlsx']

*Defined in [mime.ts:87](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L87)*

___

___
<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_wordprocessingml_document"></a>

####  application/vnd.openxmlformats-officedocument.wordprocessingml.document

**application/vnd.openxmlformats-officedocument.wordprocessingml.document**: *`object`*

*Defined in [mime.ts:89](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L89)*

<a id="commonextensionmimetypemap.application_vnd_openxmlformats_officedocument_wordprocessingml_document.extensions-23"></a>

####  extensions

**● extensions**: *`string`[]* =  ['docx']

*Defined in [mime.ts:90](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L90)*

___

___
<a id="commonextensionmimetypemap.application_vnd_wap_wmlc"></a>

####  application/vnd.wap.wmlc

**application/vnd.wap.wmlc**: *`object`*

*Defined in [mime.ts:92](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L92)*

<a id="commonextensionmimetypemap.application_vnd_wap_wmlc.extensions-24"></a>

####  extensions

**● extensions**: *`string`[]* =  ['wmlc']

*Defined in [mime.ts:93](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L93)*

___

___
<a id="commonextensionmimetypemap.application_x_7z_compressed"></a>

####  application/x-7z-compressed

**application/x-7z-compressed**: *`object`*

*Defined in [mime.ts:95](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L95)*

<a id="commonextensionmimetypemap.application_x_7z_compressed.extensions-25"></a>

####  extensions

**● extensions**: *`string`[]* =  ['7z']

*Defined in [mime.ts:96](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L96)*

___

___
<a id="commonextensionmimetypemap.application_x_cocoa"></a>

####  application/x-cocoa

**application/x-cocoa**: *`object`*

*Defined in [mime.ts:98](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L98)*

<a id="commonextensionmimetypemap.application_x_cocoa.extensions-26"></a>

####  extensions

**● extensions**: *`string`[]* =  ['cco']

*Defined in [mime.ts:99](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L99)*

___

___
<a id="commonextensionmimetypemap.application_x_java_archive_diff"></a>

####  application/x-java-archive-diff

**application/x-java-archive-diff**: *`object`*

*Defined in [mime.ts:101](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L101)*

<a id="commonextensionmimetypemap.application_x_java_archive_diff.extensions-27"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jardiff']

*Defined in [mime.ts:102](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L102)*

___

___
<a id="commonextensionmimetypemap.application_x_java_jnlp_file"></a>

####  application/x-java-jnlp-file

**application/x-java-jnlp-file**: *`object`*

*Defined in [mime.ts:104](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L104)*

<a id="commonextensionmimetypemap.application_x_java_jnlp_file.extensions-28"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jnlp']

*Defined in [mime.ts:105](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L105)*

___

___
<a id="commonextensionmimetypemap.application_x_makeself"></a>

####  application/x-makeself

**application/x-makeself**: *`object`*

*Defined in [mime.ts:107](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L107)*

<a id="commonextensionmimetypemap.application_x_makeself.extensions-29"></a>

####  extensions

**● extensions**: *`string`[]* =  ['run']

*Defined in [mime.ts:108](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L108)*

___

___
<a id="commonextensionmimetypemap.application_x_perl"></a>

####  application/x-perl

**application/x-perl**: *`object`*

*Defined in [mime.ts:110](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L110)*

<a id="commonextensionmimetypemap.application_x_perl.extensions-30"></a>

####  extensions

**● extensions**: *`string`[]* =  ['pl', 'pm']

*Defined in [mime.ts:111](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L111)*

___

___
<a id="commonextensionmimetypemap.application_x_pilot"></a>

####  application/x-pilot

**application/x-pilot**: *`object`*

*Defined in [mime.ts:113](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L113)*

<a id="commonextensionmimetypemap.application_x_pilot.extensions-31"></a>

####  extensions

**● extensions**: *`string`[]* =  ['prc', 'pdb']

*Defined in [mime.ts:114](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L114)*

___

___
<a id="commonextensionmimetypemap.application_x_rar_compressed"></a>

####  application/x-rar-compressed

**application/x-rar-compressed**: *`object`*

*Defined in [mime.ts:116](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L116)*

<a id="commonextensionmimetypemap.application_x_rar_compressed.extensions-32"></a>

####  extensions

**● extensions**: *`string`[]* =  ['rar']

*Defined in [mime.ts:117](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L117)*

___

___
<a id="commonextensionmimetypemap.application_x_redhat_package_manager"></a>

####  application/x-redhat-package-manager

**application/x-redhat-package-manager**: *`object`*

*Defined in [mime.ts:119](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L119)*

<a id="commonextensionmimetypemap.application_x_redhat_package_manager.extensions-33"></a>

####  extensions

**● extensions**: *`string`[]* =  ['rpm']

*Defined in [mime.ts:120](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L120)*

___

___
<a id="commonextensionmimetypemap.application_x_sea"></a>

####  application/x-sea

**application/x-sea**: *`object`*

*Defined in [mime.ts:122](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L122)*

<a id="commonextensionmimetypemap.application_x_sea.extensions-34"></a>

####  extensions

**● extensions**: *`string`[]* =  ['sea']

*Defined in [mime.ts:123](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L123)*

___

___
<a id="commonextensionmimetypemap.application_x_shockwave_flash"></a>

####  application/x-shockwave-flash

**application/x-shockwave-flash**: *`object`*

*Defined in [mime.ts:125](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L125)*

<a id="commonextensionmimetypemap.application_x_shockwave_flash.extensions-35"></a>

####  extensions

**● extensions**: *`string`[]* =  ['swf']

*Defined in [mime.ts:126](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L126)*

___

___
<a id="commonextensionmimetypemap.application_x_stuffit"></a>

####  application/x-stuffit

**application/x-stuffit**: *`object`*

*Defined in [mime.ts:128](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L128)*

<a id="commonextensionmimetypemap.application_x_stuffit.extensions-36"></a>

####  extensions

**● extensions**: *`string`[]* =  ['sit']

*Defined in [mime.ts:129](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L129)*

___

___
<a id="commonextensionmimetypemap.application_x_tcl"></a>

####  application/x-tcl

**application/x-tcl**: *`object`*

*Defined in [mime.ts:131](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L131)*

<a id="commonextensionmimetypemap.application_x_tcl.extensions-37"></a>

####  extensions

**● extensions**: *`string`[]* =  ['tcl', 'tk']

*Defined in [mime.ts:132](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L132)*

___

___
<a id="commonextensionmimetypemap.application_x_x509_ca_cert"></a>

####  application/x-x509-ca-cert

**application/x-x509-ca-cert**: *`object`*

*Defined in [mime.ts:134](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L134)*

<a id="commonextensionmimetypemap.application_x_x509_ca_cert.extensions-38"></a>

####  extensions

**● extensions**: *`string`[]* =  ['der', 'pem', 'crt']

*Defined in [mime.ts:135](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L135)*

___

___
<a id="commonextensionmimetypemap.application_x_xpinstall"></a>

####  application/x-xpinstall

**application/x-xpinstall**: *`object`*

*Defined in [mime.ts:137](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L137)*

<a id="commonextensionmimetypemap.application_x_xpinstall.extensions-39"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xpi']

*Defined in [mime.ts:138](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L138)*

___

___
<a id="commonextensionmimetypemap.application_xhtml_xml"></a>

####  application/xhtml+xml

**application/xhtml+xml**: *`object`*

*Defined in [mime.ts:140](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L140)*

<a id="commonextensionmimetypemap.application_xhtml_xml.extensions-40"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xhtml']

*Defined in [mime.ts:141](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L141)*

___

___
<a id="commonextensionmimetypemap.application_xspf_xml"></a>

####  application/xspf+xml

**application/xspf+xml**: *`object`*

*Defined in [mime.ts:143](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L143)*

<a id="commonextensionmimetypemap.application_xspf_xml.extensions-41"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xspf']

*Defined in [mime.ts:144](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L144)*

___

___
<a id="commonextensionmimetypemap.application_zip"></a>

####  application/zip

**application/zip**: *`object`*

*Defined in [mime.ts:146](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L146)*

<a id="commonextensionmimetypemap.application_zip.extensions-42"></a>

####  extensions

**● extensions**: *`string`[]* =  ['zip']

*Defined in [mime.ts:147](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L147)*

___

___
<a id="commonextensionmimetypemap.audio_midi"></a>

####  audio/midi

**audio/midi**: *`object`*

*Defined in [mime.ts:149](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L149)*

<a id="commonextensionmimetypemap.audio_midi.extensions-43"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mid', 'midi', 'kar']

*Defined in [mime.ts:150](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L150)*

___

___
<a id="commonextensionmimetypemap.audio_mpeg"></a>

####  audio/mpeg

**audio/mpeg**: *`object`*

*Defined in [mime.ts:152](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L152)*

<a id="commonextensionmimetypemap.audio_mpeg.extensions-44"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mp3']

*Defined in [mime.ts:153](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L153)*

___

___
<a id="commonextensionmimetypemap.audio_ogg"></a>

####  audio/ogg

**audio/ogg**: *`object`*

*Defined in [mime.ts:155](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L155)*

<a id="commonextensionmimetypemap.audio_ogg.extensions-45"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ogg']

*Defined in [mime.ts:156](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L156)*

___

___
<a id="commonextensionmimetypemap.audio_x_m4a"></a>

####  audio/x-m4a

**audio/x-m4a**: *`object`*

*Defined in [mime.ts:158](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L158)*

<a id="commonextensionmimetypemap.audio_x_m4a.extensions-46"></a>

####  extensions

**● extensions**: *`string`[]* =  ['m4a']

*Defined in [mime.ts:159](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L159)*

___

___
<a id="commonextensionmimetypemap.audio_x_realaudio"></a>

####  audio/x-realaudio

**audio/x-realaudio**: *`object`*

*Defined in [mime.ts:161](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L161)*

<a id="commonextensionmimetypemap.audio_x_realaudio.extensions-47"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ra']

*Defined in [mime.ts:162](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L162)*

___

___
<a id="commonextensionmimetypemap.font_woff"></a>

####  font/woff

**font/woff**: *`object`*

*Defined in [mime.ts:164](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L164)*

<a id="commonextensionmimetypemap.font_woff.extensions-48"></a>

####  extensions

**● extensions**: *`string`[]* =  ['woff']

*Defined in [mime.ts:165](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L165)*

___

___
<a id="commonextensionmimetypemap.font_woff2"></a>

####  font/woff2

**font/woff2**: *`object`*

*Defined in [mime.ts:167](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L167)*

<a id="commonextensionmimetypemap.font_woff2.extensions-49"></a>

####  extensions

**● extensions**: *`string`[]* =  ['woff2']

*Defined in [mime.ts:168](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L168)*

___

___
<a id="commonextensionmimetypemap.image_gif"></a>

####  image/gif

**image/gif**: *`object`*

*Defined in [mime.ts:170](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L170)*

<a id="commonextensionmimetypemap.image_gif.extensions-50"></a>

####  extensions

**● extensions**: *`string`[]* =  ['gif']

*Defined in [mime.ts:171](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L171)*

___

___
<a id="commonextensionmimetypemap.image_jpeg"></a>

####  image/jpeg

**image/jpeg**: *`object`*

*Defined in [mime.ts:173](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L173)*

<a id="commonextensionmimetypemap.image_jpeg.extensions-51"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jpeg', 'jpg']

*Defined in [mime.ts:174](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L174)*

___

___
<a id="commonextensionmimetypemap.image_png"></a>

####  image/png

**image/png**: *`object`*

*Defined in [mime.ts:176](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L176)*

<a id="commonextensionmimetypemap.image_png.extensions-52"></a>

####  extensions

**● extensions**: *`string`[]* =  ['png']

*Defined in [mime.ts:177](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L177)*

___

___
<a id="commonextensionmimetypemap.image_svg_xml"></a>

####  image/svg+xml

**image/svg+xml**: *`object`*

*Defined in [mime.ts:179](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L179)*

<a id="commonextensionmimetypemap.image_svg_xml.extensions-53"></a>

####  extensions

**● extensions**: *`string`[]* =  ['svg', 'svgz']

*Defined in [mime.ts:180](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L180)*

___

___
<a id="commonextensionmimetypemap.image_tiff"></a>

####  image/tiff

**image/tiff**: *`object`*

*Defined in [mime.ts:182](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L182)*

<a id="commonextensionmimetypemap.image_tiff.extensions-54"></a>

####  extensions

**● extensions**: *`string`[]* =  ['tif', 'tiff']

*Defined in [mime.ts:183](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L183)*

___

___
<a id="commonextensionmimetypemap.image_vnd_wap_wbmp"></a>

####  image/vnd.wap.wbmp

**image/vnd.wap.wbmp**: *`object`*

*Defined in [mime.ts:185](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L185)*

<a id="commonextensionmimetypemap.image_vnd_wap_wbmp.extensions-55"></a>

####  extensions

**● extensions**: *`string`[]* =  ['wbmp']

*Defined in [mime.ts:186](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L186)*

___

___
<a id="commonextensionmimetypemap.image_webp"></a>

####  image/webp

**image/webp**: *`object`*

*Defined in [mime.ts:188](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L188)*

<a id="commonextensionmimetypemap.image_webp.extensions-56"></a>

####  extensions

**● extensions**: *`string`[]* =  ['webp']

*Defined in [mime.ts:189](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L189)*

___

___
<a id="commonextensionmimetypemap.image_x_icon"></a>

####  image/x-icon

**image/x-icon**: *`object`*

*Defined in [mime.ts:191](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L191)*

<a id="commonextensionmimetypemap.image_x_icon.extensions-57"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ico']

*Defined in [mime.ts:192](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L192)*

___

___
<a id="commonextensionmimetypemap.image_x_jng"></a>

####  image/x-jng

**image/x-jng**: *`object`*

*Defined in [mime.ts:194](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L194)*

<a id="commonextensionmimetypemap.image_x_jng.extensions-58"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jng']

*Defined in [mime.ts:195](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L195)*

___

___
<a id="commonextensionmimetypemap.image_x_ms_bmp"></a>

####  image/x-ms-bmp

**image/x-ms-bmp**: *`object`*

*Defined in [mime.ts:197](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L197)*

<a id="commonextensionmimetypemap.image_x_ms_bmp.extensions-59"></a>

####  extensions

**● extensions**: *`string`[]* =  ['bmp']

*Defined in [mime.ts:198](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L198)*

___

___
<a id="commonextensionmimetypemap.text_css"></a>

####  text/css

**text/css**: *`object`*

*Defined in [mime.ts:200](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L200)*

<a id="commonextensionmimetypemap.text_css.extensions-60"></a>

####  extensions

**● extensions**: *`string`[]* =  ['css']

*Defined in [mime.ts:201](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L201)*

___

___
<a id="commonextensionmimetypemap.text_html"></a>

####  text/html

**text/html**: *`object`*

*Defined in [mime.ts:203](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L203)*

<a id="commonextensionmimetypemap.text_html.extensions-61"></a>

####  extensions

**● extensions**: *`string`[]* =  ['html', 'htm', 'shtml']

*Defined in [mime.ts:204](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L204)*

___

___
<a id="commonextensionmimetypemap.text_mathml"></a>

####  text/mathml

**text/mathml**: *`object`*

*Defined in [mime.ts:206](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L206)*

<a id="commonextensionmimetypemap.text_mathml.extensions-62"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mml']

*Defined in [mime.ts:207](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L207)*

___

___
<a id="commonextensionmimetypemap.text_plain"></a>

####  text/plain

**text/plain**: *`object`*

*Defined in [mime.ts:209](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L209)*

<a id="commonextensionmimetypemap.text_plain.extensions-63"></a>

####  extensions

**● extensions**: *`string`[]* =  ['txt']

*Defined in [mime.ts:210](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L210)*

___

___
<a id="commonextensionmimetypemap.text_vnd_sun_j2me_app_descriptor"></a>

####  text/vnd.sun.j2me.app-descriptor

**text/vnd.sun.j2me.app-descriptor**: *`object`*

*Defined in [mime.ts:212](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L212)*

<a id="commonextensionmimetypemap.text_vnd_sun_j2me_app_descriptor.extensions-64"></a>

####  extensions

**● extensions**: *`string`[]* =  ['jad']

*Defined in [mime.ts:213](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L213)*

___

___
<a id="commonextensionmimetypemap.text_vnd_wap_wml"></a>

####  text/vnd.wap.wml

**text/vnd.wap.wml**: *`object`*

*Defined in [mime.ts:215](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L215)*

<a id="commonextensionmimetypemap.text_vnd_wap_wml.extensions-65"></a>

####  extensions

**● extensions**: *`string`[]* =  ['wml']

*Defined in [mime.ts:216](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L216)*

___

___
<a id="commonextensionmimetypemap.text_x_component"></a>

####  text/x-component

**text/x-component**: *`object`*

*Defined in [mime.ts:218](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L218)*

<a id="commonextensionmimetypemap.text_x_component.extensions-66"></a>

####  extensions

**● extensions**: *`string`[]* =  ['htc']

*Defined in [mime.ts:219](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L219)*

___

___
<a id="commonextensionmimetypemap.text_xml"></a>

####  text/xml

**text/xml**: *`object`*

*Defined in [mime.ts:221](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L221)*

<a id="commonextensionmimetypemap.text_xml.extensions-67"></a>

####  extensions

**● extensions**: *`string`[]* =  ['xml']

*Defined in [mime.ts:222](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L222)*

___

___
<a id="commonextensionmimetypemap.video_3gpp"></a>

####  video/3gpp

**video/3gpp**: *`object`*

*Defined in [mime.ts:224](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L224)*

<a id="commonextensionmimetypemap.video_3gpp.extensions-68"></a>

####  extensions

**● extensions**: *`string`[]* =  ['3gpp', '3gp']

*Defined in [mime.ts:225](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L225)*

___

___
<a id="commonextensionmimetypemap.video_mp2t"></a>

####  video/mp2t

**video/mp2t**: *`object`*

*Defined in [mime.ts:227](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L227)*

<a id="commonextensionmimetypemap.video_mp2t.extensions-69"></a>

####  extensions

**● extensions**: *`string`[]* =  ['ts']

*Defined in [mime.ts:228](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L228)*

___

___
<a id="commonextensionmimetypemap.video_mp4"></a>

####  video/mp4

**video/mp4**: *`object`*

*Defined in [mime.ts:230](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L230)*

<a id="commonextensionmimetypemap.video_mp4.extensions-70"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mp4']

*Defined in [mime.ts:231](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L231)*

___

___
<a id="commonextensionmimetypemap.video_mpeg"></a>

####  video/mpeg

**video/mpeg**: *`object`*

*Defined in [mime.ts:233](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L233)*

<a id="commonextensionmimetypemap.video_mpeg.extensions-71"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mpeg', 'mpg']

*Defined in [mime.ts:234](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L234)*

___

___
<a id="commonextensionmimetypemap.video_quicktime"></a>

####  video/quicktime

**video/quicktime**: *`object`*

*Defined in [mime.ts:236](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L236)*

<a id="commonextensionmimetypemap.video_quicktime.extensions-72"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mov']

*Defined in [mime.ts:237](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L237)*

___

___
<a id="commonextensionmimetypemap.video_webm"></a>

####  video/webm

**video/webm**: *`object`*

*Defined in [mime.ts:239](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L239)*

<a id="commonextensionmimetypemap.video_webm.extensions-73"></a>

####  extensions

**● extensions**: *`string`[]* =  ['webm']

*Defined in [mime.ts:240](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L240)*

___

___
<a id="commonextensionmimetypemap.video_x_flv"></a>

####  video/x-flv

**video/x-flv**: *`object`*

*Defined in [mime.ts:242](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L242)*

<a id="commonextensionmimetypemap.video_x_flv.extensions-74"></a>

####  extensions

**● extensions**: *`string`[]* =  ['flv']

*Defined in [mime.ts:243](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L243)*

___

___
<a id="commonextensionmimetypemap.video_x_m4v"></a>

####  video/x-m4v

**video/x-m4v**: *`object`*

*Defined in [mime.ts:245](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L245)*

<a id="commonextensionmimetypemap.video_x_m4v.extensions-75"></a>

####  extensions

**● extensions**: *`string`[]* =  ['m4v']

*Defined in [mime.ts:246](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L246)*

___

___
<a id="commonextensionmimetypemap.video_x_mng"></a>

####  video/x-mng

**video/x-mng**: *`object`*

*Defined in [mime.ts:248](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L248)*

<a id="commonextensionmimetypemap.video_x_mng.extensions-76"></a>

####  extensions

**● extensions**: *`string`[]* =  ['mng']

*Defined in [mime.ts:249](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L249)*

___

___
<a id="commonextensionmimetypemap.video_x_ms_asf"></a>

####  video/x-ms-asf

**video/x-ms-asf**: *`object`*

*Defined in [mime.ts:251](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L251)*

<a id="commonextensionmimetypemap.video_x_ms_asf.extensions-77"></a>

####  extensions

**● extensions**: *`string`[]* =  ['asx', 'asf']

*Defined in [mime.ts:252](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L252)*

___

___
<a id="commonextensionmimetypemap.video_x_ms_wmv"></a>

####  video/x-ms-wmv

**video/x-ms-wmv**: *`object`*

*Defined in [mime.ts:254](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L254)*

<a id="commonextensionmimetypemap.video_x_ms_wmv.extensions-78"></a>

####  extensions

**● extensions**: *`string`[]* =  ['wmv']

*Defined in [mime.ts:255](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L255)*

___

___
<a id="commonextensionmimetypemap.video_x_msvideo"></a>

####  video/x-msvideo

**video/x-msvideo**: *`object`*

*Defined in [mime.ts:257](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L257)*

<a id="commonextensionmimetypemap.video_x_msvideo.extensions-79"></a>

####  extensions

**● extensions**: *`string`[]* =  ['avi']

*Defined in [mime.ts:258](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/mime.ts#L258)*

___

___

___

