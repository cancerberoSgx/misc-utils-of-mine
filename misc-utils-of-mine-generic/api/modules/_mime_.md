[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["mime"](_mime_.md)

# Module: "mime"

## Index

### Functions

* [getExtensionsForMimeType](_mime_.md#getextensionsformimetype)
* [getMimeTypeForExtension](_mime_.md#getmimetypeforextension)

### Object literals

* [commonExtensionMimeTypeMap](_mime_.md#const-commonextensionmimetypemap)

## Functions

###  getExtensionsForMimeType

▸ **getExtensionsForMimeType**(`mimeType`: string): *undefined | "" | string[]*

Defined in src/mime.ts:14

Returns known extensions for given MimeType or undefined if none is found. This only considers nginx mime
type list form https://github.com/jshttp/mime-db

**Parameters:**

Name | Type |
------ | ------ |
`mimeType` | string |

**Returns:** *undefined | "" | string[]*

___

###  getMimeTypeForExtension

▸ **getMimeTypeForExtension**(`extension`: string): *undefined | string*

Defined in src/mime.ts:6

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

Defined in src/mime.ts:20

▪ **application/atom+xml**: *object*

Defined in src/mime.ts:21

* **extensions**: *string[]* = ['atom']

▪ **application/java-archive**: *object*

Defined in src/mime.ts:24

* **extensions**: *string[]* = ['jar', 'war', 'ear']

▪ **application/javascript**: *object*

Defined in src/mime.ts:27

* **extensions**: *string[]* = ['js']

▪ **application/json**: *object*

Defined in src/mime.ts:30

* **extensions**: *string[]* = ['json']

▪ **application/mac-binhex40**: *object*

Defined in src/mime.ts:33

* **extensions**: *string[]* = ['hqx']

▪ **application/msword**: *object*

Defined in src/mime.ts:36

* **extensions**: *string[]* = ['doc']

▪ **application/octet-stream**: *object*

Defined in src/mime.ts:39

* **extensions**: *string[]* = ['bin', 'exe', 'dll', 'deb', 'dmg', 'iso', 'img', 'msi', 'msp', 'msm']

▪ **application/pdf**: *object*

Defined in src/mime.ts:42

* **extensions**: *string[]* = ['pdf']

▪ **application/postscript**: *object*

Defined in src/mime.ts:45

* **extensions**: *string[]* = ['ps', 'eps', 'ai']

▪ **application/rss+xml**: *object*

Defined in src/mime.ts:48

* **extensions**: *string[]* = ['rss']

▪ **application/rtf**: *object*

Defined in src/mime.ts:51

* **extensions**: *string[]* = ['rtf']

▪ **application/vnd.apple.mpegurl**: *object*

Defined in src/mime.ts:54

* **extensions**: *string[]* = ['m3u8']

▪ **application/vnd.google-earth.kml+xml**: *object*

Defined in src/mime.ts:57

* **extensions**: *string[]* = ['kml']

▪ **application/vnd.google-earth.kmz**: *object*

Defined in src/mime.ts:60

* **extensions**: *string[]* = ['kmz']

▪ **application/vnd.ms-excel**: *object*

Defined in src/mime.ts:63

* **extensions**: *string[]* = ['xls']

▪ **application/vnd.ms-fontobject**: *object*

Defined in src/mime.ts:66

* **extensions**: *string[]* = ['eot']

▪ **application/vnd.ms-powerpoint**: *object*

Defined in src/mime.ts:69

* **extensions**: *string[]* = ['ppt']

▪ **application/vnd.oasis.opendocument.graphics**: *object*

Defined in src/mime.ts:72

* **extensions**: *string[]* = ['odg']

▪ **application/vnd.oasis.opendocument.presentation**: *object*

Defined in src/mime.ts:75

* **extensions**: *string[]* = ['odp']

▪ **application/vnd.oasis.opendocument.spreadsheet**: *object*

Defined in src/mime.ts:78

* **extensions**: *string[]* = ['ods']

▪ **application/vnd.oasis.opendocument.text**: *object*

Defined in src/mime.ts:81

* **extensions**: *string[]* = ['odt']

▪ **application/vnd.openxmlformats-officedocument.presentationml.presentation**: *object*

Defined in src/mime.ts:84

* **extensions**: *string[]* = ['pptx']

▪ **application/vnd.openxmlformats-officedocument.spreadsheetml.sheet**: *object*

Defined in src/mime.ts:87

* **extensions**: *string[]* = ['xlsx']

▪ **application/vnd.openxmlformats-officedocument.wordprocessingml.document**: *object*

Defined in src/mime.ts:90

* **extensions**: *string[]* = ['docx']

▪ **application/vnd.wap.wmlc**: *object*

Defined in src/mime.ts:93

* **extensions**: *string[]* = ['wmlc']

▪ **application/x-7z-compressed**: *object*

Defined in src/mime.ts:96

* **extensions**: *string[]* = ['7z']

▪ **application/x-cocoa**: *object*

Defined in src/mime.ts:99

* **extensions**: *string[]* = ['cco']

▪ **application/x-java-archive-diff**: *object*

Defined in src/mime.ts:102

* **extensions**: *string[]* = ['jardiff']

▪ **application/x-java-jnlp-file**: *object*

Defined in src/mime.ts:105

* **extensions**: *string[]* = ['jnlp']

▪ **application/x-makeself**: *object*

Defined in src/mime.ts:108

* **extensions**: *string[]* = ['run']

▪ **application/x-perl**: *object*

Defined in src/mime.ts:111

* **extensions**: *string[]* = ['pl', 'pm']

▪ **application/x-pilot**: *object*

Defined in src/mime.ts:114

* **extensions**: *string[]* = ['prc', 'pdb']

▪ **application/x-rar-compressed**: *object*

Defined in src/mime.ts:117

* **extensions**: *string[]* = ['rar']

▪ **application/x-redhat-package-manager**: *object*

Defined in src/mime.ts:120

* **extensions**: *string[]* = ['rpm']

▪ **application/x-sea**: *object*

Defined in src/mime.ts:123

* **extensions**: *string[]* = ['sea']

▪ **application/x-shockwave-flash**: *object*

Defined in src/mime.ts:126

* **extensions**: *string[]* = ['swf']

▪ **application/x-stuffit**: *object*

Defined in src/mime.ts:129

* **extensions**: *string[]* = ['sit']

▪ **application/x-tcl**: *object*

Defined in src/mime.ts:132

* **extensions**: *string[]* = ['tcl', 'tk']

▪ **application/x-x509-ca-cert**: *object*

Defined in src/mime.ts:135

* **extensions**: *string[]* = ['der', 'pem', 'crt']

▪ **application/x-xpinstall**: *object*

Defined in src/mime.ts:138

* **extensions**: *string[]* = ['xpi']

▪ **application/xhtml+xml**: *object*

Defined in src/mime.ts:141

* **extensions**: *string[]* = ['xhtml']

▪ **application/xspf+xml**: *object*

Defined in src/mime.ts:144

* **extensions**: *string[]* = ['xspf']

▪ **application/zip**: *object*

Defined in src/mime.ts:147

* **extensions**: *string[]* = ['zip']

▪ **audio/midi**: *object*

Defined in src/mime.ts:150

* **extensions**: *string[]* = ['mid', 'midi', 'kar']

▪ **audio/mpeg**: *object*

Defined in src/mime.ts:153

* **extensions**: *string[]* = ['mp3']

▪ **audio/ogg**: *object*

Defined in src/mime.ts:156

* **extensions**: *string[]* = ['ogg']

▪ **audio/x-m4a**: *object*

Defined in src/mime.ts:159

* **extensions**: *string[]* = ['m4a']

▪ **audio/x-realaudio**: *object*

Defined in src/mime.ts:162

* **extensions**: *string[]* = ['ra']

▪ **font/woff**: *object*

Defined in src/mime.ts:165

* **extensions**: *string[]* = ['woff']

▪ **font/woff2**: *object*

Defined in src/mime.ts:168

* **extensions**: *string[]* = ['woff2']

▪ **image/gif**: *object*

Defined in src/mime.ts:171

* **extensions**: *string[]* = ['gif']

▪ **image/jpeg**: *object*

Defined in src/mime.ts:174

* **extensions**: *string[]* = ['jpeg', 'jpg']

▪ **image/png**: *object*

Defined in src/mime.ts:177

* **extensions**: *string[]* = ['png']

▪ **image/svg+xml**: *object*

Defined in src/mime.ts:180

* **extensions**: *string[]* = ['svg', 'svgz']

▪ **image/tiff**: *object*

Defined in src/mime.ts:183

* **extensions**: *string[]* = ['tif', 'tiff']

▪ **image/vnd.wap.wbmp**: *object*

Defined in src/mime.ts:186

* **extensions**: *string[]* = ['wbmp']

▪ **image/webp**: *object*

Defined in src/mime.ts:189

* **extensions**: *string[]* = ['webp']

▪ **image/x-icon**: *object*

Defined in src/mime.ts:192

* **extensions**: *string[]* = ['ico']

▪ **image/x-jng**: *object*

Defined in src/mime.ts:195

* **extensions**: *string[]* = ['jng']

▪ **image/x-ms-bmp**: *object*

Defined in src/mime.ts:198

* **extensions**: *string[]* = ['bmp']

▪ **text/css**: *object*

Defined in src/mime.ts:201

* **extensions**: *string[]* = ['css']

▪ **text/html**: *object*

Defined in src/mime.ts:204

* **extensions**: *string[]* = ['html', 'htm', 'shtml']

▪ **text/mathml**: *object*

Defined in src/mime.ts:207

* **extensions**: *string[]* = ['mml']

▪ **text/plain**: *object*

Defined in src/mime.ts:210

* **extensions**: *string[]* = ['txt']

▪ **text/vnd.sun.j2me.app-descriptor**: *object*

Defined in src/mime.ts:213

* **extensions**: *string[]* = ['jad']

▪ **text/vnd.wap.wml**: *object*

Defined in src/mime.ts:216

* **extensions**: *string[]* = ['wml']

▪ **text/x-component**: *object*

Defined in src/mime.ts:219

* **extensions**: *string[]* = ['htc']

▪ **text/xml**: *object*

Defined in src/mime.ts:222

* **extensions**: *string[]* = ['xml']

▪ **video/3gpp**: *object*

Defined in src/mime.ts:225

* **extensions**: *string[]* = ['3gpp', '3gp']

▪ **video/mp2t**: *object*

Defined in src/mime.ts:228

* **extensions**: *string[]* = ['ts']

▪ **video/mp4**: *object*

Defined in src/mime.ts:231

* **extensions**: *string[]* = ['mp4']

▪ **video/mpeg**: *object*

Defined in src/mime.ts:234

* **extensions**: *string[]* = ['mpeg', 'mpg']

▪ **video/quicktime**: *object*

Defined in src/mime.ts:237

* **extensions**: *string[]* = ['mov']

▪ **video/webm**: *object*

Defined in src/mime.ts:240

* **extensions**: *string[]* = ['webm']

▪ **video/x-flv**: *object*

Defined in src/mime.ts:243

* **extensions**: *string[]* = ['flv']

▪ **video/x-m4v**: *object*

Defined in src/mime.ts:246

* **extensions**: *string[]* = ['m4v']

▪ **video/x-mng**: *object*

Defined in src/mime.ts:249

* **extensions**: *string[]* = ['mng']

▪ **video/x-ms-asf**: *object*

Defined in src/mime.ts:252

* **extensions**: *string[]* = ['asx', 'asf']

▪ **video/x-ms-wmv**: *object*

Defined in src/mime.ts:255

* **extensions**: *string[]* = ['wmv']

▪ **video/x-msvideo**: *object*

Defined in src/mime.ts:258

* **extensions**: *string[]* = ['avi']
