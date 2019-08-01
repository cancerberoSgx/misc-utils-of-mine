> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["mime"](_mime_.md) /

# External module: "mime"

## Index

### Functions

* [getExtensionsForMimeType](_mime_.md#getextensionsformimetype)
* [getMimeTypeForExtension](_mime_.md#getmimetypeforextension)

### Object literals

* [commonExtensionMimeTypeMap](_mime_.md#const-commonextensionmimetypemap)

## Functions

###  getExtensionsForMimeType

▸ **getExtensionsForMimeType**(`mimeType`: string): *undefined | `""` | string[]*

*Defined in [mime.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L16)*

Returns known extensions for given MimeType or undefined if none is found. This only considers nginx mime
type list form https://github.com/jshttp/mime-db

**Parameters:**

Name | Type |
------ | ------ |
`mimeType` | string |

**Returns:** *undefined | `""` | string[]*

___

###  getMimeTypeForExtension

▸ **getMimeTypeForExtension**(`extension`: string): *undefined | string*

*Defined in [mime.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L7)*

Returns mimetype associated to given extension or undefined if none is found. This only considers nginx
mime type list form https://github.com/jshttp/mime-db

**Parameters:**

Name | Type |
------ | ------ |
`extension` | string |

**Returns:** *undefined | string*

## Object literals

### `Const` commonExtensionMimeTypeMap

### ▪ **commonExtensionMimeTypeMap**: *object*

*Defined in [mime.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L22)*

▪ **application/atom+xml**: *object*

*Defined in [mime.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L23)*

* **extensions**: *string[]* =  ['atom']

▪ **application/java-archive**: *object*

*Defined in [mime.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L26)*

* **extensions**: *string[]* =  ['jar', 'war', 'ear']

▪ **application/javascript**: *object*

*Defined in [mime.ts:29](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L29)*

* **extensions**: *string[]* =  ['js']

▪ **application/json**: *object*

*Defined in [mime.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L32)*

* **extensions**: *string[]* =  ['json']

▪ **application/mac-binhex40**: *object*

*Defined in [mime.ts:35](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L35)*

* **extensions**: *string[]* =  ['hqx']

▪ **application/msword**: *object*

*Defined in [mime.ts:38](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L38)*

* **extensions**: *string[]* =  ['doc']

▪ **application/octet-stream**: *object*

*Defined in [mime.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L41)*

* **extensions**: *string[]* =  ['bin', 'exe', 'dll', 'deb', 'dmg', 'iso', 'img', 'msi', 'msp', 'msm']

▪ **application/pdf**: *object*

*Defined in [mime.ts:44](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L44)*

* **extensions**: *string[]* =  ['pdf']

▪ **application/postscript**: *object*

*Defined in [mime.ts:47](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L47)*

* **extensions**: *string[]* =  ['ps', 'eps', 'ai']

▪ **application/rss+xml**: *object*

*Defined in [mime.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L50)*

* **extensions**: *string[]* =  ['rss']

▪ **application/rtf**: *object*

*Defined in [mime.ts:53](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L53)*

* **extensions**: *string[]* =  ['rtf']

▪ **application/vnd.apple.mpegurl**: *object*

*Defined in [mime.ts:56](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L56)*

* **extensions**: *string[]* =  ['m3u8']

▪ **application/vnd.google-earth.kml+xml**: *object*

*Defined in [mime.ts:59](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L59)*

* **extensions**: *string[]* =  ['kml']

▪ **application/vnd.google-earth.kmz**: *object*

*Defined in [mime.ts:62](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L62)*

* **extensions**: *string[]* =  ['kmz']

▪ **application/vnd.ms-excel**: *object*

*Defined in [mime.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L65)*

* **extensions**: *string[]* =  ['xls']

▪ **application/vnd.ms-fontobject**: *object*

*Defined in [mime.ts:68](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L68)*

* **extensions**: *string[]* =  ['eot']

▪ **application/vnd.ms-powerpoint**: *object*

*Defined in [mime.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L71)*

* **extensions**: *string[]* =  ['ppt']

▪ **application/vnd.oasis.opendocument.graphics**: *object*

*Defined in [mime.ts:74](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L74)*

* **extensions**: *string[]* =  ['odg']

▪ **application/vnd.oasis.opendocument.presentation**: *object*

*Defined in [mime.ts:77](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L77)*

* **extensions**: *string[]* =  ['odp']

▪ **application/vnd.oasis.opendocument.spreadsheet**: *object*

*Defined in [mime.ts:80](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L80)*

* **extensions**: *string[]* =  ['ods']

▪ **application/vnd.oasis.opendocument.text**: *object*

*Defined in [mime.ts:83](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L83)*

* **extensions**: *string[]* =  ['odt']

▪ **application/vnd.openxmlformats-officedocument.presentationml.presentation**: *object*

*Defined in [mime.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L86)*

* **extensions**: *string[]* =  ['pptx']

▪ **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet**: *object*

*Defined in [mime.ts:89](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L89)*

* **extensions**: *string[]* =  ['xlsx']

▪ **application/vnd.openxmlformats-officedocument.wordprocessingml.document**: *object*

*Defined in [mime.ts:92](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L92)*

* **extensions**: *string[]* =  ['docx']

▪ **application/vnd.wap.wmlc**: *object*

*Defined in [mime.ts:95](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L95)*

* **extensions**: *string[]* =  ['wmlc']

▪ **application/x-7z-compressed**: *object*

*Defined in [mime.ts:98](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L98)*

* **extensions**: *string[]* =  ['7z']

▪ **application/x-cocoa**: *object*

*Defined in [mime.ts:101](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L101)*

* **extensions**: *string[]* =  ['cco']

▪ **application/x-java-archive-diff**: *object*

*Defined in [mime.ts:104](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L104)*

* **extensions**: *string[]* =  ['jardiff']

▪ **application/x-java-jnlp-file**: *object*

*Defined in [mime.ts:107](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L107)*

* **extensions**: *string[]* =  ['jnlp']

▪ **application/x-makeself**: *object*

*Defined in [mime.ts:110](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L110)*

* **extensions**: *string[]* =  ['run']

▪ **application/x-perl**: *object*

*Defined in [mime.ts:113](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L113)*

* **extensions**: *string[]* =  ['pl', 'pm']

▪ **application/x-pilot**: *object*

*Defined in [mime.ts:116](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L116)*

* **extensions**: *string[]* =  ['prc', 'pdb']

▪ **application/x-rar-compressed**: *object*

*Defined in [mime.ts:119](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L119)*

* **extensions**: *string[]* =  ['rar']

▪ **application/x-redhat-package-manager**: *object*

*Defined in [mime.ts:122](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L122)*

* **extensions**: *string[]* =  ['rpm']

▪ **application/x-sea**: *object*

*Defined in [mime.ts:125](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L125)*

* **extensions**: *string[]* =  ['sea']

▪ **application/x-shockwave-flash**: *object*

*Defined in [mime.ts:128](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L128)*

* **extensions**: *string[]* =  ['swf']

▪ **application/x-stuffit**: *object*

*Defined in [mime.ts:131](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L131)*

* **extensions**: *string[]* =  ['sit']

▪ **application/x-tcl**: *object*

*Defined in [mime.ts:134](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L134)*

* **extensions**: *string[]* =  ['tcl', 'tk']

▪ **application/x-x509-ca-cert**: *object*

*Defined in [mime.ts:137](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L137)*

* **extensions**: *string[]* =  ['der', 'pem', 'crt']

▪ **application/x-xpinstall**: *object*

*Defined in [mime.ts:140](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L140)*

* **extensions**: *string[]* =  ['xpi']

▪ **application/xhtml+xml**: *object*

*Defined in [mime.ts:143](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L143)*

* **extensions**: *string[]* =  ['xhtml']

▪ **application/xspf+xml**: *object*

*Defined in [mime.ts:146](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L146)*

* **extensions**: *string[]* =  ['xspf']

▪ **application/zip**: *object*

*Defined in [mime.ts:149](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L149)*

* **extensions**: *string[]* =  ['zip']

▪ **audio/midi**: *object*

*Defined in [mime.ts:152](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L152)*

* **extensions**: *string[]* =  ['mid', 'midi', 'kar']

▪ **audio/mpeg**: *object*

*Defined in [mime.ts:155](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L155)*

* **extensions**: *string[]* =  ['mp3']

▪ **audio/ogg**: *object*

*Defined in [mime.ts:158](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L158)*

* **extensions**: *string[]* =  ['ogg']

▪ **audio/x-m4a**: *object*

*Defined in [mime.ts:161](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L161)*

* **extensions**: *string[]* =  ['m4a']

▪ **audio/x-realaudio**: *object*

*Defined in [mime.ts:164](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L164)*

* **extensions**: *string[]* =  ['ra']

▪ **font/woff**: *object*

*Defined in [mime.ts:167](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L167)*

* **extensions**: *string[]* =  ['woff']

▪ **font/woff2**: *object*

*Defined in [mime.ts:170](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L170)*

* **extensions**: *string[]* =  ['woff2']

▪ **image/gif**: *object*

*Defined in [mime.ts:173](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L173)*

* **extensions**: *string[]* =  ['gif']

▪ **image/jpeg**: *object*

*Defined in [mime.ts:176](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L176)*

* **extensions**: *string[]* =  ['jpeg', 'jpg']

▪ **image/png**: *object*

*Defined in [mime.ts:179](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L179)*

* **extensions**: *string[]* =  ['png']

▪ **image/svg+xml**: *object*

*Defined in [mime.ts:182](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L182)*

* **extensions**: *string[]* =  ['svg', 'svgz']

▪ **image/tiff**: *object*

*Defined in [mime.ts:185](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L185)*

* **extensions**: *string[]* =  ['tif', 'tiff']

▪ **image/vnd.wap.wbmp**: *object*

*Defined in [mime.ts:188](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L188)*

* **extensions**: *string[]* =  ['wbmp']

▪ **image/webp**: *object*

*Defined in [mime.ts:191](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L191)*

* **extensions**: *string[]* =  ['webp']

▪ **image/x-icon**: *object*

*Defined in [mime.ts:194](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L194)*

* **extensions**: *string[]* =  ['ico']

▪ **image/x-jng**: *object*

*Defined in [mime.ts:197](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L197)*

* **extensions**: *string[]* =  ['jng']

▪ **image/x-ms-bmp**: *object*

*Defined in [mime.ts:200](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L200)*

* **extensions**: *string[]* =  ['bmp']

▪ **text/css**: *object*

*Defined in [mime.ts:203](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L203)*

* **extensions**: *string[]* =  ['css']

▪ **text/html**: *object*

*Defined in [mime.ts:206](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L206)*

* **extensions**: *string[]* =  ['html', 'htm', 'shtml']

▪ **text/mathml**: *object*

*Defined in [mime.ts:209](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L209)*

* **extensions**: *string[]* =  ['mml']

▪ **text/plain**: *object*

*Defined in [mime.ts:212](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L212)*

* **extensions**: *string[]* =  ['txt']

▪ **text/vnd.sun.j2me.app-descriptor**: *object*

*Defined in [mime.ts:215](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L215)*

* **extensions**: *string[]* =  ['jad']

▪ **text/vnd.wap.wml**: *object*

*Defined in [mime.ts:218](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L218)*

* **extensions**: *string[]* =  ['wml']

▪ **text/x-component**: *object*

*Defined in [mime.ts:221](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L221)*

* **extensions**: *string[]* =  ['htc']

▪ **text/xml**: *object*

*Defined in [mime.ts:224](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L224)*

* **extensions**: *string[]* =  ['xml']

▪ **video/3gpp**: *object*

*Defined in [mime.ts:227](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L227)*

* **extensions**: *string[]* =  ['3gpp', '3gp']

▪ **video/mp2t**: *object*

*Defined in [mime.ts:230](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L230)*

* **extensions**: *string[]* =  ['ts']

▪ **video/mp4**: *object*

*Defined in [mime.ts:233](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L233)*

* **extensions**: *string[]* =  ['mp4']

▪ **video/mpeg**: *object*

*Defined in [mime.ts:236](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L236)*

* **extensions**: *string[]* =  ['mpeg', 'mpg']

▪ **video/quicktime**: *object*

*Defined in [mime.ts:239](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L239)*

* **extensions**: *string[]* =  ['mov']

▪ **video/webm**: *object*

*Defined in [mime.ts:242](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L242)*

* **extensions**: *string[]* =  ['webm']

▪ **video/x-flv**: *object*

*Defined in [mime.ts:245](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L245)*

* **extensions**: *string[]* =  ['flv']

▪ **video/x-m4v**: *object*

*Defined in [mime.ts:248](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L248)*

* **extensions**: *string[]* =  ['m4v']

▪ **video/x-mng**: *object*

*Defined in [mime.ts:251](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L251)*

* **extensions**: *string[]* =  ['mng']

▪ **video/x-ms-asf**: *object*

*Defined in [mime.ts:254](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L254)*

* **extensions**: *string[]* =  ['asx', 'asf']

▪ **video/x-ms-wmv**: *object*

*Defined in [mime.ts:257](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L257)*

* **extensions**: *string[]* =  ['wmv']

▪ **video/x-msvideo**: *object*

*Defined in [mime.ts:260](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/mime.ts#L260)*

* **extensions**: *string[]* =  ['avi']