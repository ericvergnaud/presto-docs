The documentation web site is currently 100% static.

However it relies on static resources shared with the Factory, namely:
 - /js/lib/require.js
 - /js/lib/prompto.core.bundle.js
 - /js/lib/prompto.core.bundle.js.gz
 - /prompto/prompto.pec
 - /prompto/prompto.pec.gz

You need to copy these from the Factory into the public folder.
This is done using the./refresh_libs.sh script.
This needs to be automated somehow.


