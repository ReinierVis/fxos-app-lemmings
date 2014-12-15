/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky5.gif', 320, 3200, 0, 0, 0];
  level_images['door'] = ['doors', 'door3.gif', 50, 82, 112, 1094, 6];
  level_images['exit'] = ['ani', 'exit4.gif', 46, 76, 112, 2244, 6]; // +30, +40
  level_images['icewater1'] = ['ani', 'icewater.gif', 32, 128, 288, 584, 6];
  level_images['iceberg'] = ['gfx', 'iceberg3.gif', 36, 22, 284, 584, 7];
  level_images['icewater2'] = ['ani', 'icewater.gif', 32, 128, 288, 712, 6];
  level_images['steelrod1'] = ['gfx', 'steelrod1.gif', 38, 38, 282, 778, 7];
  level_images['icewater3'] = ['ani', 'icewater.gif', 32, 128, 288, 840, 6];
  level_images['steelsquare1'] = ['gfx', 'steelsquare1.gif', 52, 64, 268, 816, 7];
  level_images['icewater4'] = ['ani', 'icewater.gif', 32, 128, 288, 968, 6];
  level_images['icewater5'] = ['ani', 'icewater.gif', 32, 128, 288, 1096, 6];
  level_images['steelrod2'] = ['gfx', 'steelrod2.gif', 32, 76, 288, 1060, 7];
  level_images['icewater6'] = ['ani', 'icewater.gif', 32, 128, 288, 1224, 6];
  level_images['icewater7'] = ['ani', 'icewater.gif', 32, 128, 288, 1352, 6];
  level_images['steelball'] = ['gfx', 'steelball.gif', 48, 76, 272, 1310, 7];
  level_images['icewater8'] = ['ani', 'icewater.gif', 32, 128, 288, 1480, 6];
  level_images['icewater9'] = ['ani', 'icewater.gif', 32, 128, 288, 1608, 6];
  level_images['icewater10'] = ['ani', 'icewater.gif', 32, 128, 288, 1736, 6];
  level_images['icewater11'] = ['ani', 'icewater.gif', 32, 128, 288, 1864, 6];
  level_images['icewater12'] = ['ani', 'icewater.gif', 32, 128, 288, 1992, 6];
  level_images['icewater13'] = ['ani', 'icewater.gif', 32, 128, 288, 2120, 6];
  level_images['marble3'] = ['gfx', 'marble3.gif', 40, 84, 280, 2082, 7];
  level_images['steelblock1'] = ['gfx', 'steelblock2.gif', 50, 50, 158, 2230, 6];
  level_images['steelblock2'] = ['gfx', 'steelblock2.gif', 50, 50, 158, 2280, 6];
  level_images['steelblock3'] = ['gfx', 'steelblock3.gif', 50, 32, 208, 2264, 6];
  level_images['steelblock4'] = ['gfx', 'steelblock3.gif', 50, 32, 258, 2264, 6];
  level_images['steelblock5'] = ['gfx', 'steelblock3.gif', 50, 32, 308, 2264, 6];
  level_images['icewater14'] = ['ani', 'icewater.gif', 32, 128, 288, 2248, 7];
  level_images['icewater15'] = ['ani', 'icewater.gif', 32, 128, 288, 2376, 6];
  level_images['icewater16'] = ['ani', 'icewater.gif', 32, 128, 288, 2504, 6];
  level_images['icewater17'] = ['ani', 'icewater.gif', 32, 128, 288, 2632, 6];
  level_images['icewater18'] = ['ani', 'icewater.gif', 32, 128, 288, 2760, 6];
  level_images['icewater19'] = ['ani', 'icewater.gif', 32, 128, 288, 2888, 6];
  level_images['icewater20'] = ['ani', 'icewater.gif', 32, 128, 288, 3016, 6];
  level_images['icewater21'] = ['ani', 'icewater.gif', 32, 128, 288, 3144, 6];
var level_start = 800;
var start_pos = [[114,1120]]; // +2, +26

var level = 'a548b23a240b173a,a547b23a241b173a,a546b23a242b173a,a219b3a26b3a294b23a243b173a,a218b5a24b5a292b23a244b173a,a217b7a22b7a290b23a245b173a,a217b8a21b8a288b23a246b173a,a216b11a18b11a285b23a247b173a,a216b12a17b12a283b23a248b173a,a215b14a15b14a10b3a268b23a249b173a,a215b15a14b15a8b5a13b3a29b3a218b23a250b173a,a214b17a12b17a6b7a11b5a27b5a216b23a251b173a,a214b18a11b18a5b8a9b7a25b7a214b23a252b173a,a172b3a38b20a9b20a3b11a7b8a14b3a7b8a212b23a253b173a,a171b5a36b23a6b23ab12a5b11a11b5a5b11a209b23a254b173a,a170b7a35b24a5b37a4b12a9b7a4b12a207b23a255b173a,a170b8a33b26a3b39a2b14a8b8a2b14a205b23a256b33a32b3a33b3a35b34a,a169b11a31b27a2b40ab15a6b26a203b23a257b33a32b3a33b3a35b34a,a169b12a29b87a5b27a201b23a258b33a32b3a33b3a35b34a,a168b14a28b88a3b29a199b23a259b33a32b3a33b3a35b34a,a168b15a26b90a2b30a197b23a260b33a32b3a33b3a35b34a,a167b17a25b124a194b23a261b33a32b3a33b3a35b34a,a167b18a23b126a192b23a262b33a32b3a33b3a35b34a,a166b20a22b127a190b23a263b33a32b3a33b3a35b34a,a165b23a19b129a188b23a264b33a32b3a33b3a35b34a,a165b24a17b131a186b23a295b3a32b3a33b3a35b3a,a164b26a16b133a183b23a296b3a32b3a33b3a35b3a,a164b27a14b135a181b23a297b3a32b3a33b3a35b3a,a163b29a13b136a179b23a298b3a32b3a33b3a35b3a,a163b31a10b138a177b23a299b3a32b3a33b3a35b3a,a162b33a9b139a175b23a300b3a32b3a33b3a35b3a,a162b34a7b142a172b23a301b3a32b3a33b3a35b3a,a161b36a6b143a170b23a302b3a32b3a33b3a35b3a,a161b37a4b145a168b23a303b3a32b3a33b3a35b3a,a160b40a2b146a166b23a304b3a32b3a33b3a35b3a,a159b42ab147a164b23a305b3a32b3a33b3a35b3a,a159b191a162b23a306b3a32b3a33b3a35b3a,a140b3a15b193a160b23a307b3a32b3a33b3a35b3a,a139b5a14b193a159b23a308b3a32b3a33b3a35b3a,a138b7a12b194a158b23a309b3a32b3a33b3a35b3a,a138b8a11b194a157b23a310b3a32b3a33b3a35b3a,a137b11a8b195a156b23a311b3a32b3a33b3a35b3a,a137b12a7b195a155b23a312b3a32b3a33b3a35b3a,a116b3a17b14a5b197a153b23a313b3a32b3a33b3a35b3a,a115b5a16b15a4b198a151b23a314b3a32b3a33b3a35b3a,a114b7a14b17a3b199a149b23a315b3a32b3a33b3a35b3a,a114b8a13b18a2b200a147b23a316b3a32b3a33b3a35b3a,a113b11a10b20a2b199a146b23a317b3a32b3a33b3a35b3a,a113b12a8b222a145b23a318b3a32b3a33b3a35b3a,a112b14a7b222a144b23a319b3a32b3a33b3a35b3a,a112b15a5b223a143b23a320b3a32b3a33b3a35b3a,a111b17a4b223a142b23a321b3a32b3a33b3a35b3a,a111b18a2b224a141b23a322b3a32b3a33b3a35b3a,a110b20ab224a140b23a323b3a32b3a33b3a35b3a,a109b245a140b23a324b3a32b3a33b3a35b3a,a109b245a139b23a325b3a32b3a33b3a35b3a,a108b246a138b23a326b3a32b3a33b3a35b3a,a108b247a136b23a327b3a32b3a33b3a35b3a,a107b249a99b7a28b23a328b3a32b3a33b3a35b3a,a107b251a94b13a24b23a329b3a32b3a33b3a35b3a,a106b253a86b25a18b43a310b3a32b3a33b3a35b3a,a106b254a82b31a14b44a310b3a32b3a33b3a35b3a,a105b256a79b35a11b45a310b3a32b3a33b3a35b3a,a105b257a77b37a9b46a310b3a32b3a33b3a35b3a,a104b259a75b39a7b47a310b3a32b3a33b3a35b3a,a103b261a73b41a5b48a310b3a32b3a33b3a35b3a,a103b261a72b44a2b49a310b3a32b3a33b3a35b3a,a101b263a71b96a310b3a32b3a33b3a35b3a,a100b264a71b96a201b7a102b3a32b3a33b3a35b3a,a99b265a70b97a198b13ab7a91b3a32b3a33b3a35b3a,a99b265a70b97a196b26a88b3a32b3a33b3a35b3a,a98b266a69b98a195b29a86b3a32b3a33b3a35b3a189ia,a98b266a68b99a194b31a85b3a32b3a33b3a35b3a,a55b3a39b266a68b67ab32a193b33a84b3a32b3a33b3a35b3a,a54b5a38b266a67b67a2b32a186b41a83b3a32b3a33b3a35b3a,a53b7a36b267a66b67a3b32a183b45a82b3a32b3a33b3a35b3a,a53b8a35b267a65b67a4b32a181b48a81b3a32b3a33b3a35b3a,a52b11a32b268a65b66a5b32a180b49a81b3a32b3a33b3a35b3a,a52b12a30b269a64b66a6b32a179b51a80b3a32b3a33b3a35b3a,a51b14a29b268a65b67a5b32a178b53a79b3a32b3a33b3a35b3a162e50a,a51b15a27b270a64b67a5b32a177b56a77b3a32b3a33b3a35b3a162e50a,a50b17a10b3a13b272a61b69a4b32a176b58a76b3a32b3a33b3a35b3a162e50a,a50b18a8b5a11b274a60b69a4b33a175b59a75b3a32b3a33b3a35b3a162e50a,a49b20a6b7a10b275a59b69a4b34a173b61a74b3a32b3a33b3a35b3a135b3a24e50a,a48b23a4b8a8b277a57b71a3b35a172b62a73b3a32b3a33b3a35b3a134b5a23e50a,a48b24a2b11a5b279a55b73a2b36a171b63a72b3a32b3a33b3a35b3a132b8a22e50a,a47b26ab12a4b280a53b75ab37a167b66a72b3a32b3a33b3a35b3a131b10a21e50a,a47b40a2b282a51b115a163b70a71b3a32b3a33b3a35b3a130b11a21e50a,a46b42ab282a51b116a160b72a71b3a32b3a33b3a35b3a128b14a20e50a,a46b325a50b35a3b80a158b73a71b3a32b3a33b3a35b3a127b16a19e50a,a45b326a50b35a2b82a5b3a7b2a9b2a7b2a20b2a7b2a20b2a7b2a10b2a7b3a7b3a7b3a7b3a5b75a70b3a32b3a33b3a35b3a126b18a18e50a,a45b326a50b34a2b84a3b5a5b3a9b3a5b3a20b3a5b3a20b3a5b3a10b3a5b5a5b5a5b5a5b5a3b76a70b3a32b3a33b3a35b3a124b21a17e50a,a44b327a49b35ab45a18b23ab3ab3a3b3a11b3a3b3a22b3a3b3a22b3a3b3a12b3a3b3ab3a3b3ab3a3b3ab3a3b3ab3ab77a70b3a32b3a33b3a35b3a123b23a16e50a,a44b327a49b34ab47a18b25a3b3ab3a13b3ab3a24b3ab3a24b3ab3a14b3ab3a3b3ab3a3b3ab3a3b3ab3a3b80a70b3a32b3a33b3a35b3a122b26a14e50a,a43b328a49b33ab48a19b23a5b5a15b5a26b5a26b5a16b5a5b5a5b5a5b5a5b80a69b3a32b3a33b3a35b3a120b29a13e50a,a42b328a50b32ab49a20b23a5b3a17b3a28b3a28b3a18b3a7b3a7b3a7b3a6b82a67b3a32b3a33b3a35b3a119b31a12e50a,a42b328a50b31ab50a21b23a3b5a15b5a26b5a26b5a16b5a5b5a5b5a5b5a5b83a64b7a28b7a29b7a31b7a116b33a11e50a,a41b329a50b82a22b23ab3ab3a13b3ab3a24b3ab3a24b3ab3a14b3ab3a3b3ab3a3b3ab3a3b3ab3a3b85a60b13a22b13a23b13a25b13a112b35a10e50a,a41b329a50b83a22b25a3b3a11b3a3b3a22b3a3b3a22b3a3b3a12b3a3b3ab3a3b3ab3a3b3ab3a3b3ab49ab37a57b17a18b17a19b17a21b17a109b36a10e50a,a40b330a49b84a23b23a5b3a9b3a5b3a20b3a5b3a20b3a5b3a10b3a5b5a5b5a5b5a5b45a9b37a55b19a16b19a17b19a19b19a108b36a10e50a,a40b330a48b53ab31a24b23a5b3a7b3a7b3a7b4a7b3a7b3a7b4a7b3a7b3a7b4a7b3a7b3a7b3a7b43a7b41ab3a7b3a7b4a7b3a7b3a7b22a14b21a15b21a17b21a107b36a10e50a,a39b330a48b53a2b32a24b23a5b3a5b3a9b3a5b6a5b3a9b3a5b6a5b3a9b3a5b6a5b5a5b5a5b5a5b45a5b47a5b5a5b6a5b5a5b5a5b24a12b23a13b23a15b23a106b36a10e50a,a39b331a47b52a3b32a25b23a5b3a3b3a11b3a3b3a2b3a3b3a11b3a3b3a2b3a4b2a11b3a3b3a2b3a3b3ab3a3b3ab3a3b3ab3a3b43ab3a3b3a2b40ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b26a10b25a11b25a13b25a104b37a10e50a,a38b333a45b52a5b31a26b23a5b3ab3a13b3ab3a4b3ab3a13b3ab3a4b3ab3a13b3ab3a4b3ab3a3b3ab3a3b3ab3a3b3ab43a3b3ab3a4b38a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab28a8b27a9b27a11b27a103b37a10e50a,a38b334a44b51a6b32a26b23a5b5a15b5a6b5a15b5a6b5a15b5a6b5a5b5a5b5a5b45a5b5a6b37a4b5a5b5a6b5a5b5a5b31a8b27a9b27a11b27a103b37a27e16a,a38b335a43b50a7b32a27b23a5b3a17b3a8b3a17b3a8b3a17b3a8b3a7b3a7b3a7b43a7b3a8b37a4b3a7b3a8b3a7b3a7b31a6b29a7b29a9b29a102b36a28e16a,a38b336a41b50a8b33a27b23a3b5a15b5a6b5a15b5a6b5a15b5a6b5a5b5a5b5a5b45a5b5a6b38a3b5a5b5a6b5a5b5a5b32a6b29a7b29a9b29a102b36a28e16a,a39b335a41b49a9b33a28b23ab3ab3a13b3ab3a4b3ab3a13b3ab3a4b3ab3a13b3ab3a4b3ab3a3b3ab3a3b3ab3a3b43ab3a3b3ab3a4b3ab35a2b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab29a6b29a7b29a9b29a102b36a28e16a,a39b335a41b48a11b32a29b25a3b3a11b3a3b3a2b3a3b3a11b3a3b3a2b3a3b3a11b3a3b3a2b3a3b3ab3a3b3ab3a3b3ab43a3b3ab3a3b3a2b3a3b34ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3ab31a4b31a5b31a7b31a100b37a28e16a,a38b336a41b47a12b33a29b23a5b3a9b3a5b6a5b3a9b3a5b6a5b3a9b3a5b6a5b5a5b5a5b45a5b5a5b6a5b36a5b5a5b6a5b5a5b5a2b31a4b31a5b31a7b31a100b37a28e16a,a38b336a41b46a13b33a30b23a5b3a7b3a7b4a7b3a7b3a7b4a7b3a7b3a7b4a7b3a7b3a7b43a7b3a7b4a7b34a7b3a7b4a7b3a7b3a3b31a4b31a5b31a7b31a98b39a28e16a,a37b337a41b45a15b32a31b23a5b3a5b3a20b3a5b3a20b3a5b3a10b3a5b5a5b5a5b45a5b5a5b6a5b36a5b5a5b6a5b5a5b5a2b31a4b31a5b31a7b31a97b40a28e16a,a37b337a41b44a16b32a32b23a5b3a3b3a22b3a3b3a22b3a3b3a12b3a3b3ab3a3b3ab3a3b3ab39ab3a3b3ab3a3b3a2b3a3b3ab34a3b3ab3a3b3a2b3a3b3ab3a3b3ab3ab31a4b35ab31a7b31a96b41a28e16a,a36b338a41b43a18b31a33b23a5b3ab3a24b3ab3a24b3ab3a14b3ab3a3b3ab3a3b3ab3a2b38a3b3ab3a3b3ab3a4b3ab3a2b35ab3a3b3ab3a4b3ab3a3b3ab3a3b34a4b67a7b31a95b42a28e16a,a36b337a41b43a19b31a34b23a5b5a26b5a26b5a16b5a5b5a5b5a3b37a5b5a5b5a6b5a3b38a5b5a6b5a5b5a5b33a4b32a2b33a7b31a94b43a28e16a,a35b338a40b43a20b32a34b23a5b3a28b3a28b3a18b3a7b3a7b3a4b36a7b3a7b3a8b3a5b36a7b3a8b3a7b3a7b31a6b30a4b31a9b29a95b42a29e16a,a35b338a40b42a22b31a35b23a3b5a26b5a26b5a16b5a5b5a5b5a3b37a5b5a5b5a6b5a4b37a5b5a6b5a5b5a5b32a6b29a6b30a9b29a94b43a29e16a,a34b339a39b42a23b31a36b23ab3ab3a24b3ab3a24b3ab3a14b3ab3a3b3ab3a3b3ab3a2b34ab3a3b3ab3a3b3ab3a4b3ab3a3b38a3b3ab3a4b3ab3a3b3ab3a3b3ab29a6b29a7b29a9b29a93b44a29e16a,a34b339a39b41a24b32a36b25a3b3a22b3a3b3a22b3a3b3a12b3a3b3ab3a3b3ab3a3b3ab33a3b3ab3a3b3ab3a3b3a2b3a3b3ab40ab3a3b3a2b3a3b3ab3a3b3ab3a3b27a8b28a6b29a11b27a93b46a28e16a,a32b341a39b40a26b31a37b23a5b3a20b3a5b3a20b3a5b3a10b3a5b5a5b5a5b35a5b5a5b5a5b6a5b5a2b33ab5a5b6a5b5a5b5a4b27a8b29a4b30a11b27a92b48a27e16a,a31b341a39b40a27b31a38b23a5b2a20b2a7b2a20b2a7b2a10b2a7b3a7b3a6b34a7b3a7b3a7b4a7b3a4b32a2b3a7b4a7b3a7b3a6b25a10b25ab3a2b3a2b25a13b25a92b49a27e16a,a30b342a39b39a28b31a39b23a5b2a19b2a7b2a20b2a7b2a10b3a5b5a5b5a4b36a5b5a5b5a5b6a5b5a4b31ab5a5b6a5b5a5b5a5b25a7b27a3b6a4b26a7b3a2b23a3b3a7b3a7b2a68b49a27e16a,a30b342a39b38a29b31a40b23a3b3a19b3a5b3a20b3a5b3a11b3a3b3ab3a3b3ab3a2b38a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b34ab3a3b3a2b3a3b3ab3a3b3ab3a3b27a5b5ab21a5b4a6b26a5b5a2b21a3b5a5b5a5b3a68b49a27e16a,a29b343a39b37a30b31a41b23ab3a21b3a3b3a22b3a3b3a13b3ab3a3b3ab3a3b38a2b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab34a3b3ab3a4b3ab3a3b3ab3a3b3ab3a2b20ab3a3b3ab3ab19a5b6a5b23ab3a3b3ab3a2b19a3b3ab3a3b3ab3a3b3a69b49a27e16a,a29b343a39b36a31b31a42b25a23b3ab3a24b3ab3a15b5a5b5a5b37a3b5a5b5a5b5a6b5a5b36a5b5a6b5a5b5a5b5a4b18a3b3ab3a3b3ab19a3b3a2b3a3b23a3b3ab3a3b3ab20ab3a3b3ab3a3b3ab3a69b50a27e16a,a28b348a35b35a33b29a44b23a25b5a26b5a17b3a7b3a7b35a5b3a7b3a7b3a8b3a7b3ab30a7b3a8b3a7b3a7b3a7b15a5b5a5b3ab14a2b3ab3a4b3ab3a3b13ab3a5b5a5b5ab13a2b5a5b5a5b5a70b50a27e16a,a28b348a35b34a34b29a45b23a25b3a28b3a17b5a5b5a5b35a5b5a5b5a5b5a6b5a5b36a5b5a6b5a5b5a5b5a7b9ab3a7b3a7b5a2b8a5b5a6b5a5b9ab5a7b3a7b3a5b7a6b3a7b3a7b3a71b50a27e16a,a17b3a7b349a36b32a35b29a46b23a23b5a26b5a15b3ab3a3b3ab3a3b37a3b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab34a3b3ab3a4b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b5a7b3a7b3a7b3a8b3a7b3a7b3a7b5a5b5a5b5a6b5a5b5a5b5a68b51a28e16a,a16b5a6b349a36b31a36b32a44b23a21b3ab3a24b3ab3a13b3a3b3ab3a3b3ab35ab3ab3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b34ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b5a6b5a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a66b52a28e16a,a15b7a4b350a35b31a37b32a45b23a19b3a3b3a22b3a3b3a11b3a5b5a5b37a3b5a5b5a5b5a5b6a5b5a5b36a5b6a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a64b54a27e16a,a15b8a2b351a35b30a38b32a46b23a17b3a5b3a20b3a5b3a10b2a7b3a7b34a6b3a7b3a7b3a7b4a7b3a7b34a7b4a7b3a7b3a7b5a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b6a5b5a5b5a5b3a61b57a26e16a,a14b362a34b30a39b32a46b24a5b3a7b3a7b3a7b4a7b3a7b3a7b5a5b5a5b35a5b4a7b3a7b3a7b4a7b3a7b34a7b4a7b3a7b3a7b4a7b3a7b3a7b5a5b5a5b5a5b6a5b5a5b5a5b5a7b3a7b3a7b4a7b3a7b3a7b2a60b59a25e16a,a14b362a34b29a40b32a46b25a3b5a5b3a9b3a5b6a5b3a9b3a5b3ab3a3b3ab3a3b3ab33a3b6a5b5a5b5a5b6a5b5a5b36a5b6a5b5a5b5a5b6a5b5a5b5a5b5a7b3a7b3a7b4a7b3a7b3a7b5a5b5a5b5a5b6a5b5a5b5a5b3a59b60a25e16a,a13b363a34b29a40b32a45b27ab3ab3a3b3a11b3a3b3a2b3a3b3a11b3a3b3a3b3ab3a3b3ab3a3b33ab3a2b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab34a3b3a2b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b6a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a59b61a25e16a,a13b363a32b32a39b32a44b31a3b3ab3a13b3ab3a4b3ab3a13b3ab3a5b5a5b5a4b36a4b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b30ab3ab3a4b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a59b62a25e16a,a12b364a32b32a39b32a43b31a5b5a15b5a6b5a15b5a7b3a7b3a5b31ab3a6b5a5b5a5b5a6b5a5b5a4b31ab5a6b5a5b5a5b5a6b5a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b5a6b5a5b5a5b5a60b62a25e16a,a12b364a32b32a39b32a42b33a5b3a17b3a8b3a17b3a7b5a5b5a5b29ab5a6b3a7b3a7b3a8b3a7b3a5b31a2b3a8b3a7b3a7b3a8b3a7b3a7b3a7b5a5b5a5b5a6b5a5b5a5b5a7b3a7b3a7b3a8b3a7b3a7b3a61b62a25e16a,a11b365a32b32a39b32a41b35a3b5a15b5a6b5a15b5a5b3ab3a3b3ab3a3b33ab3a4b5a5b5a5b5a6b5a5b5a4b31ab5a6b5a5b5a5b5a6b5a5b5a5b5a7b3a7b3a7b3a8b3a7b3a7b3a7b5a5b5a5b5a6b5a5b5a5b5a60b62a25e16a,a10b366a32b32a39b32a40b37ab3ab3a13b3ab3a4b3ab3a13b3ab3a3b3a3b3ab3a3b37a3b3a2b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b34ab3a4b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b5a6b5a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a58b63a25e16a,a10b366a32b32a39b32a39b41a3b3a11b3a3b3a2b3a3b3a11b3a3b3ab3a5b5a5b35a5b6a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab34a3b3a2b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a57b62a26e16a,a9b367a32b32a39b32a38b41a5b3a9b3a5b6a5b3a9b3a5b5a7b3a6b34a7b4a5b5a5b5a5b6a5b5a5b36a5b6a5b5a5b5a5b6a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b6a5b5a5b5a5b3a56b39ab22a26e16a,a9b367a31b33a39b32a37b43a5b3a7b3a7b4a7b3a7b3a7b5a5b5a4b36a5b4a7b3a7b3a7b4a7b3a7b34a7b4a7b3a7b3a7b4a7b3a7b3a7b5a5b5a5b5a5b6a5b5a5b5a5b5a7b3a7b3a7b4a7b3a7b3a7b2a56b39a2b21a26e16a,a8b295a3b70a30b34a39b32a36b45a5b3a5b3a20b3a5b3a11b3a3b3ab3a2b34ab3a3b6a5b5a5b5a5b6a5b5a5b36a5b6a5b5a5b5a5b6a5b5a5b5a5b5a7b3a7b3a7b4a7b3a7b3a7b5a5b5a5b5a5b6a5b5a5b5a5b3a56b38a3b21a26e16a,a8b294a7b2a3b62a29b35a39b32a35b47a5b3a3b3a22b3a3b3a13b3ab3a3b37a3b3ab3a2b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab34a3b3a2b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b6a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a57b38a3b21a26e16a,a7b295a15b11ab47a28b36a39b32a34b23a3b23a5b3ab3a24b3ab3a15b5a5b35a5b5a4b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b30ab3ab3a4b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3a2b3a3b3ab3a3b3ab3a3b3a3b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a57b38a5b20a26e16a,a7b294a20b6a2b47a27b37a39b32a33b23a5b23a5b5a26b5a17b3a7b33a7b3a6b5a5b5a5b5a6b5a5b5a5b29a2b5a6b5a5b5a5b5a6b5a5b5a5b5a5b3ab3a3b3ab3a3b3ab3a4b3ab3a3b3ab3a3b3ab3a5b5a5b5a5b5a6b5a5b5a5b5a58b38a5b19a27e16a,a6b294f102b38f103b23f97b32f346a2b37f,a6b294f101b39f102b23f98b31f347a2b37f,a5b294f101b40f101b23f98b31f348a2b36f,a4b294f101b41f100b23f99b31f348a2b36f,a4b294f100b42f99b23f100b31f348ab36f,a3b294f100b43f98b23f101b31f348ab36f,a3b293f100b44f97b23f102b31f348ab35f,a2b294f99b45f96b23f103b31f348ab35f,a2b293f99b46f95b23f104b31f348ab34f,ab294f98b47f94b23f103b32f349ab33f,ab293f98b48f93b23f102b34f349b34f,b293f98b49f92b23f102b35f349b33f,b293f97b50f91b23f102b35f350b33f,b292f97b51f90b23f102b36f350b32f';
