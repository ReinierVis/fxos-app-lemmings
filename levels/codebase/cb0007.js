/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'fun7.gif', 320, 2108, 0, 0, 0];
  level_images['door'] = ['doors', 'door2.gif', 50, 82, 160, 430, 6];
  level_images['exit'] = ['ani', 'exit3.gif', 48, 68, 144, 1530, 6]; // +32, +36
  level_images['poison1'] = ['ani', 'poison.gif', 48, 128, 272, 92, 6];
  level_images['poison2'] = ['ani', 'poison.gif', 48, 128, 272, 220, 6];
  level_images['poison3'] = ['ani', 'poison.gif', 48, 128, 272, 1724, 6];
  level_images['poison4'] = ['ani', 'poison.gif', 48, 128, 272, 1852, 6];
  level_images['rock1'] = ['gfx', 'rock1.gif', 70, 150, 250, 0, 7];
  level_images['rock2'] = ['gfx', 'rock2.gif', 98, 166, 222, 1942, 7];
  level_images['rock3'] = ['gfx', 'rock3.gif', 18, 20, 302, 328, 7];
var level_start = 270;
var start_pos = [[162,456]]; // +2, +26

var level = 'a145b74a150b74a150b74a150b74a,a146b73a151b73a151b73a151b73a,a147b71a153b71a153b71a153b71a,a148b69a155b69a155b69a155b69a,a149b67a157b67a157b67a157b67a,a150b67a155b69a155b69a155b67a,a151b67a153b71a153b71a153b67a,a152b67a151b73a151b73a151b67a,a153b66a150b74a150b74a150b67a,a154b68a145b79a145b79a145b68a,a155b68a143b81a143b81a143b68a,a156b69a139b85a139b85a139b69a,a157b70a135b89a135b89a135b70a,a158b69aba131bab89aba131bab89aba131bab69a,a159b47ab24a127b24ab47ab24a127b24ab47ab24a127b24ab47a,a160b45a3b26a121b26a3b45a3b26a121b26a3b45a3b26a121b26a3b45a,a161b43a5b27a117b27a5b43a5b27a117b27a5b43a5b27a117b27a5b43a,a162b41a7b26ab3a109b3ab26a7b41a7b26ab3a109b3ab26a7b41a7b26ab3a109b3ab26a7b41a,a163b39a9b32a103b32a9b39a9b32a103b32a9b39a9b32a103b32a9b39a,a164b37a12b34a95b34a12b37a12b34a95b34a12b37a12b34a95b34a12b37a,a165b35a14b34ab2a87b2ab34a14b35a14b34ab2a87b2ab34a14b35a14b34ab2a87b2ab34a14b35a,a166b33a17b39a79b39a17b33a17b39a79b39a17b33a17b39a79b39a17b33a,a167b31a19b41ab2a67b2ab41a19b31a19b41ab2a67b2ab41a19b31a19b41ab2a67b2ab41a19b31a,a168b29a22b48a55b48a22b29a22b48a55b48a22b29a22b48a55b48a22b29a,a169b27a26b46a2b8a33b8a2b46a26b27a26b46a2b8a33b8a2b46a26b27a26b46a2b8a33b8a2b46a26b27a,a170b25a28b56a2b7a4b5a4b7a2b56a28b25a28b56a2b7a4b5a4b7a2b56a28b25a28b56a2b7a4b5a4b7a2b56a28b25a,a171b23a31b64a2b7a2b64a31b23a31b64a2b7a2b64a31b23a31b64a2b7a2b64a31b23a,a172b21a34b135a34b21a34b135a34b21a34b135a34b21a,a173b19a38b2ab123ab2a38b19a38b2ab123ab2a38b19a38b2ab123ab2a38b19a,a174b17a42b123a42b17a42b123a42b17a42b123a42b17a,a174b16a46b117a46b15a46b117a46b15a46b117a45b16a,a174b16a49b111a50b13a50b111a50b13a50b111a48b16a,a174b16a52b2ab99ab2a54b11a54b2ab99ab2a54b11a54b2ab99ab2a51b16a,a174b16a57b95a60b9a60b95a60b9a60b95a56b16a,a174b16a61b5ab75ab5a65b7a65b5ab75ab5a65b7a65b5ab75ab5a60b16a,a174b16a68b73a73b5a73b73a73b5a73b73a67b16a,a174b16a72b4ab55ab4a78b3a78b4ab55ab4a78b3a78b4ab55ab4a71b16a,a174b16a80b8ab31ab8a175b8ab31ab8a175b8ab31ab8a79b16a,a174b16a90b8ab11ab8a195b8ab11ab8a195b8ab11ab8a89b16a,a174b16a656b16a,49a174b16a593ia62b16a,a174b16a656b16a,7a174b16a384b100a16b172a,4a174b16a372b112a16b172a,4a174b16a360b124a16b172a,4a174b16a348b136a16b172a,3a174b16a348b136a16b172a130b4a,a174b16a336b148a16b172a128b9a,a174b16a336b148a16b172a126b12a,a174b16a336b148a16b172a124b14a,a174b16a336b148a16b172a123b16a,a174b16a232b252a16b172a123b17a,a174b16a232b252a16b172a123b19a,2a174b16a232b252a16b172a123b20a,a174b16a232b252a16b172a121b22a,a174b16a232b252a16b172a119b24a,a174b16a232b252a16b172a119b25a,a174b16a232b252a16b172a118b27a2b4a,a174b16a232b252a16b172a114b40a,a26b4a144b16a232b252a16b172a113b42a,a24b9a141b16a232b252a16b172a113b42a,a22b12a3b4a133b16a232b252a16b172a113b43a,a20b14ab9a130b688a113b44a,a19b26a129b688a112b47a,2a19b29a126b688a112b48a,a19b32a123b688a113b47a2b4a,a19b33a122b688a115b54a,a17b35a122b688a115b55a,a15b38a121b688a114b56a,a15b39a120b688a114b57a,a14b42a118b688a114b58a,a10b46a118b688a114b60a,a9b48a117b688a113b61a,a7b50a117b688a113b62a,a5b52a117b688a113b62a,a5b53f116b688f113b62a,a5b54f115b688f113b63a,a4b55f115b688f113b64a,a4b56f114b688f113b64a,a4b58f112b688f112b66a,a4b58f112b688f112b68a,a3b60f111b688f110b70a,ab62f111b688f109b72a,ab63f110b688f108b73a,ab64f108b689f109b73a,b66f106b690f109b74a,b67f105b690f109b75a,b69f103b690f109b76a,b70f99b693f109b78a,b70f98b694f109b79a,b72f95b695f109b79a,b74f93b695f109b81a,b75f89b698f109b';
