/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'mayhem7.gif', 320, 2574, 0, 0, 0];
  level_images['door'] = ['doors', 'door2.gif', 50, 82, 64, 710, 6];
  level_images['exit'] = ['ani', 'exit3.gif', 48, 68, 160, 1394, 6]; // +32, +36
  level_images['poison1'] = ['ani', 'poison.gif', 48, 128, 272, 64, 6];
  level_images['poison2'] = ['ani', 'poison.gif', 48, 128, 272, 192, 6];
  level_images['poison3'] = ['ani', 'poison.gif', 48, 128, 272, 320, 6];
  level_images['poison4'] = ['ani', 'poison.gif', 48, 128, 272, 448, 6];
  level_images['poison5'] = ['ani', 'poison.gif', 48, 128, 272, 576, 6];
  level_images['poison6'] = ['ani', 'poison.gif', 48, 128, 272, 704, 6];
  level_images['poison7'] = ['ani', 'poison.gif', 48, 128, 272, 832, 6];
  level_images['poison8'] = ['ani', 'poison.gif', 48, 128, 272, 960, 6];
  level_images['poison9'] = ['ani', 'poison.gif', 48, 128, 272, 1088, 6];
  level_images['poison10'] = ['ani', 'poison.gif', 48, 128, 272, 1216, 6];
  level_images['poison11'] = ['ani', 'poison.gif', 48, 128, 272, 1344, 6];
  level_images['poison12'] = ['ani', 'poison.gif', 48, 128, 272, 1472, 6];
  level_images['poison13'] = ['ani', 'poison.gif', 48, 128, 272, 1600, 6];
  level_images['poison14'] = ['ani', 'poison.gif', 48, 128, 272, 1728, 6];
  level_images['poison15'] = ['ani', 'poison.gif', 48, 128, 272, 1856, 6];
  level_images['poison16'] = ['ani', 'poison.gif', 48, 128, 272, 1984, 6];
  level_images['poison17'] = ['ani', 'poison.gif', 48, 128, 272, 2112, 6];
  level_images['poison18'] = ['ani', 'poison.gif', 48, 128, 272, 2240, 6];
  level_images['pillar1'] = ['gfx', 'pillar2.gif', 48, 10, 272, 636, 7];
  level_images['pillar2'] = ['gfx', 'pillar2.gif', 48, 10, 272, 648, 7];
  level_images['pillar3'] = ['gfx', 'pillar2.gif', 48, 10, 272, 734, 7];
  level_images['pillar4'] = ['gfx', 'pillar2.gif', 48, 10, 272, 746, 7];
  level_images['rock1'] = ['gfx', 'rock6.gif', 76, 314, 244, 2260, 7];
  level_images['shredder1'] = ['ani', 'shredder.gif', 32, 60, 200, 674, 6];
var level_start = 483;
var start_pos = [[66,736]]; // +2, +26

var level = 'a8b32a173b5ab7a9b4a3b5a37b5a13b2a11b16a87b8a76b8a54b8a8b8a44b8a34b65a5b2a6b2a6b2a6b2a5b2a6b5a,2a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a87b264a52b5a5b2a6b2a6b2a6b2a5b2a6b5a,4a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a87b321a5b2a6b2a6b2a6b2a5b2a6b5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a87b8a76b8a54b8a8b8a44b8a34b65a5b2a6b2a6b2a6b2a5b2a6b5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b92a54b8a8b8a44b8a34b8a52b5a5b2a6b2a6b2a6b2a5b2a6b5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b264a52b5a5b2a6b2a6b2a6b2a5b2a6b5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b264a46b18a6b2a6b2a6b2a5b2a6b5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b264a46b18a6b2a6b2a6b2a5b2ab16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b376a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b8a76b292a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a90b8a76b8a54b8a8b8a44b8a34b8a46b66a,2a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a400b66a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a400b16a34b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a450b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a453b5ab5a,29a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a451b16a,8a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a453b5ab5a,3a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a172b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a169b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a169b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,7a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a172b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a172b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,3a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a24b48a12b16a72b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4a8b32a173b5ab7a9b4a3b5a37b5a13b2a13b5ab5a24b48a12b24a64b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4b48a165b5ab7a9b4a3b5a37b5a13b2a13b5ab5a24b48a20b24a56b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4b48a165b5ab7a9b4a3b5a37b5a13b2a13b5ab5a24b48a28b24a48b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4a8b32a173b5ab7a9b4a3b5a37b5a13b2a13b5ab5a108b24a40b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a116b24a32b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,4a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a124b24a24b5a23b5a15b5a23b5a15b5a22b5a16b5a66ia65b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a124b24a24b5a23b5a15b5a23b5a15b5a22b5a16b5a132b5ab5a,3a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a22e4a106b24a16b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a20e8a104b24a16b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a18e12a102b24a16b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a16e16a100b24a16b5a23b5a15b5a23b5a15b5a22b5a16b5a130b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a16e16a108b192a16b74a29b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a16e16a108b192a17b73a29b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a18e12a110b192a18b71a30b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a18e12a110b192a19b69a31b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9a2e4a2j9a111b32a16b32a16b32a16b32a28b67a34b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a111b32a16b32a16b32a16b32a29b65a35b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a111b32a16b32a16b32a16b32a30b63a36b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a111b32a16b32a16b32a16b32a31b61a37b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a119b16a32b16a32b16a32b16a40b59a38b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a119b16a32b16a32b16a32b16a41b57a39b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9e8j9a119b16a32b16a32b16a32b16a42b55a40b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a11j9a2e4a2j9a119b16a32b16a32b16a32b16a43b53a41b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a13b5ab5a19e10a127b16a32b16a32b16a32b16a44b51a42b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a17e8a8b16a104b16a32b16a32b16a32b16a45b49a43b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b34e6b25a104b16a32b16a32b16a32b16a46b47a44b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b65a104b16a32b16a32b16a32b16a47b45a45b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a33b16a104b16a32b16a32b16a32b16a48b43a46b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b65a104b16a32b16a32b16a32b16a49b41a47b5ab5a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b65a104b16a32b16a32b16a32b16a50b39a48b5ab5a426b4a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a33b16a104b16a32b16a32b16a32b16a51b37a49b5ab5a424b9a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a11b16a33b16a104b16a32b16a32b16a32b16a51b38a48b5ab5a393b4a25b12a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a50b40a47b5ab5a391b9a20b14a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a49b42a46b5ab5a389b12a18b16a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a48b36ab7a45b5ab5a387b14a18b17a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a47b7a2b27a3b7a44b5ab5a370b4a12b16a17b19a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a46b7a4b25a5b7a43b5ab5a368b9a9b17a5b4a7b19a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a45b7a6b23a7b7a42b5ab5a366b12a8b19ab9a4b20a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a44b7a8b21a9b7a41b5ab5a364b14a6b32ab22a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a43b7a10b19a11b7a40b5ab5a363b16a3b57a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a42b7a12b17a13b7a39b5ab5a363b77a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a41b7a14b15a15b7a38b5ab5a363b78a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a40b7a16b13a17b7a37b5ab5a363b78a10b4a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a39b7a18b11a19b7a36b5ab5a363b79a7b9a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a38b7a20b9a21b7a35b5ab5a361b83a3b14a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a37b7a22b7a23b7a30b16a358b85ab19a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a36b7a24b5a24b16a21b16a358b106a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a35b7a26b3a25b53a357b107a,a16b16a181b5ab7a9b4a3b5a37b5a13b2a14b5ab5a38b5ab5a106b16a32b16a32b16a32b16a34b7a55b53a353b112a,a16b16f286b5fb5f38b5fb5f767b114a,a16b16f286b5fb5f38b5fb5f767b116a,2a16b16f286b5fb5f38b5fb5f767b117a,a16b16f286b5fb5f38b5fb5f765b119a,a16b16f286b5fb5f38b5fb5f763b121a,a16b16f286b5fb5f38b5fb5f762b123a,a16b16f286b5fb5f38b5fb5f762b124a,2a16b16f286b5fb5f38b5fb5f762b125a,a16b16f286b5fb5f38b5fb5f762b127a,a16b16f286b5fb5f38b5fb5f760b129a8b4a,a16b16f286b5fb5f38b5fb5f758b132a5b9a,a16b16f286b5fb5f38b5fb5f758b132a3b12a,a16b16f286b5fb5f38b5fb5f757b148a,a16b16f286b5fb5f38b5fb5f753b153a,a16b16f286b5fb5f38b5fb5f752b155a,a16b16f286b5fb5f38b5fb5f752b';
