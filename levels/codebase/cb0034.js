/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky4.gif', 320, 3200, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 40, 902, 6];
  level_images['exit'] = ['ani', 'exit1.gif', 48, 66, 176, 2450, 6]; // +32, +36
  level_images['bashrock'] = ['ani', 'bashrock_right1.gif', 144, 94, 32, 1510, 4];
  level_images['steelplate1'] = ['gfx', 'steelplate1.gif', 144, 124, 32, 288, 6];
  level_images['steelplate1'] = ['gfx', 'steelplate2.gif', 144, 280, 176, 268, 6];
  level_images['steelplate1'] = ['gfx', 'steelplate3.gif', 118, 58, 176, 774, 6];
  level_images['steelplate1'] = ['gfx', 'steelplate4.gif', 144, 988, 176, 874, 6];
  level_images['water1'] = ['ani', 'water.gif', 32, 128, 288, 0, 7];
  level_images['water2'] = ['ani', 'water.gif', 32, 128, 288, 128, 7];
  level_images['water3'] = ['ani', 'water.gif', 32, 128, 288, 256, 7];
  level_images['water4'] = ['ani', 'water.gif', 32, 128, 288, 384, 7];
  level_images['water5'] = ['ani', 'water.gif', 32, 128, 288, 512, 7];
  level_images['water6'] = ['ani', 'water.gif', 32, 128, 288, 640, 7];
  level_images['water7'] = ['ani', 'water.gif', 32, 128, 288, 768, 7];
  level_images['water8'] = ['ani', 'water.gif', 32, 128, 288, 896, 7];
  level_images['water9'] = ['ani', 'water.gif', 32, 128, 288, 1024, 7];
  level_images['water10'] = ['ani', 'water.gif', 32, 128, 288, 1152, 7];
  level_images['water11'] = ['ani', 'water.gif', 32, 128, 288, 1280, 7];
  level_images['water12'] = ['ani', 'water.gif', 32, 128, 288, 1408, 7];
  level_images['water13'] = ['ani', 'water.gif', 32, 128, 288, 1536, 7];
  level_images['water14'] = ['ani', 'water.gif', 32, 128, 288, 1664, 7];
  level_images['water15'] = ['ani', 'water.gif', 32, 128, 288, 1792, 7];
  level_images['water16'] = ['ani', 'water.gif', 32, 128, 288, 1920, 7];
  level_images['water17'] = ['ani', 'water.gif', 32, 128, 288, 2048, 7];
  level_images['water18'] = ['ani', 'water.gif', 32, 128, 288, 2176, 7];
  level_images['water19'] = ['ani', 'water.gif', 32, 128, 288, 2304, 7];
  level_images['water20'] = ['ani', 'water.gif', 32, 128, 288, 2432, 7];
  level_images['water21'] = ['ani', 'water.gif', 32, 128, 288, 2560, 7];
  level_images['water22'] = ['ani', 'water.gif', 32, 128, 288, 2688, 7];
  level_images['water23'] = ['ani', 'water.gif', 32, 128, 288, 2816, 7];
  level_images['water24'] = ['ani', 'water.gif', 32, 128, 288, 2944, 7];
  level_images['rock'] = ['gfx', 'rock4.gif', 154, 114, 166, 2944, 8];
  level_images['water25'] = ['ani', 'water.gif', 32, 128, 288, 3072, 7];
var level_start = 640;
var start_pos = [[42,928]]; // +2, +26

var level = ',6a583b7a,a582b9a,a581b11a,a580b12a,a579b14a,a578b15a,a577b17a,a576b19a,a575b20a,a574b23a,a144e62a368b24a177d4a,a144e62a368b24a173d10a,a144e62ba366b26a170d14a,a144e62ba366b27a167d17a,a144e62ba365b28a165d20a,a144e62a365b30a163d22a,a144e62a364b31a162d24a,a144e62a363b32a161d25a,a144e62a362b33a160d26a,a144e62a361b34a159d28a,a144e62a360b36a157d29a,a144e62a359b37a156d30a,a144e62a358b38a155d31a,a144e62a358b38a154d32a,a144e62a358b38a153d33a,a144e62a357b40a152d33a,2a144e62a357b41a151d34a,a144e62a356b42a151d34a,3a144e62a355b43a151d35a,2a144e62a142b7a206b43a151d35a,a144e62a141b9a196b7ab44a151d36a,a144e62a140b11a194b53a151d36a,a144e62a139b12a193b54a151d36a,a144e62a138b14a191b55a151d36a,a144e62a137b15a190b56a151d36a,a144e62a136b17a188b58a150d36a,a144e62a135b19a186b59a150d37a,a144e62a134b20a185b60a150d37a,a144e62a133b23a182b61a150d37a,a144e62a133b24a180b63a149d37a,a144e62a133b24a180b70a142d37a,a144e62a132b26a179b71a141d38a,a144e62a132b27a173b77a140d38a,a144e62a132b27a172b78a140d38a,a144e62a131b29a170b80a139d38a,a144e62a131b30a168b81a139d38a,a144e62a131b31a166b83a138d38a,a144e62a130b32a165b85a137d39a,a144e62a130b33a163b86a137d39a,a144e62a120b7a3b33a162b89a135d39a,a144e62a119b9ab35a160b91a134d40a,a144e62a118b47a158b92a134d40a,a144e62a117b48a158b93a133d40a,a144e62a116b51a156b94a132d41a,a144e52a5b4a116b53a154b95a132d42a,a144e52a6b3a115b54a154b96a131d42a,a144e52a6b3a90b7a17b56a153b96a131d42a,a144e52a6b3a89b9a15b58a151b97a131d42a,a144e52a6b2a89b11a13b59a151b97a131d42a,a144e52a6b2a88b12a13b60a150b97a131d43a,a144e52a6ba88b14a12b60a149b99a130d43a,a144e52a6ba87b15a11b61a142b106a130d43a,a144e52a6ba86b17a10b61a141b107a130d44a,a144e52a6ba85b19a9b61a140b108a130d44a,a144e52a6ba84b20a8b63a8b7a123b109a130d44a,a144e52a6ba83b23a6b63a7b9a121b111a129d44a,a144e52a90b24a5b64a5b11a119b112a4b6ab4a114d44a,a144e52a90b24a4b65a4b12a118b114ab14a113d44a109b6ab4a,a144e52a89b26a3b66a2b14a116b133a110d44a107b14a,a144e52a89b27a2b82a115b135a109d44a106b18a,a144e52a89b27ab84a113b137a108d45a105b19a,a144e52a88b114a112b117ab19a108d45a105b19a,a144e52a88b114a112b117ab20a107d45a106b18a,a144e52a88b116a109b139a107d45a106b18a577b4a,a144e52a87b118a108b140a106d46a104b19a573b10a,a144e52a87b118a108b141a105d46a104b19a571b13a,a144e52a87b119a106b143a104d46a104b19a569b16a,a144e52a79b128a105b137ab6a103d47a102b20a2ba564b19a,a134e140b113e12b4a43e485a559b21a,a134e139b114e12b5a42e485a558b22a,a134e138b115e13b4a42e484a558b23a,a134e137b116e13b4a42e482a559b25a,a134e136b118e12b4a41e482a559b26a,a134e135b119e12b4a41e481b2a557b27a,a134e134b120e12b5a40e481b2a556b28a,a134e133b121e11b6a40e480b4a554b29a,a134e132b122e12b5a39e480b6a552b30a,a134e132b123e12b4a39e479b7a551b31a,a134e132b123e12b4a39e478ab2ab5a550b31a,a134e131b125e12b4a38e476a3b2ab6a549b32a,a134e131b125e13b3a38e475a4b2ab6a549b32a,a134e131b125e13b4a37e475a4ba3b6a548b32a,a134e130b126e14b3a37e474a5ba3b7a547b32a,a134e130b126e14b3a37e473a10b7a547b33a,a134e130b126e14b3a37e237b7e228ba10b2ab5a310ia235b33a,a134e129b127e14b3a37e236b9e226b2a10b2ab6a25b4a516b33a,a134e129b127e14b3a37e235b11e224ab2a10b2ab7a20b10a514b34a,a69b7a58e129b127e15b2a37e233b13e222a3b2a10b2a2b2ab4a17b13a513b34a,a68b9a57e128b128e16ba36e232b16e220b2a2b2a10ba3b2ab5a14b16a512b34a,a67b11a56e127b130e17a35e233b16e219b2a2b2a10ba3b2abab4a11b19a511b34a,a66b12a56e127b130e17a34e233b17e218aba4ba14b2abab4a10b21a510b34a,a65b14a55e126b131e18a33e232b19e215ba2ba4ba14b2a2b6a8b22a238b4a7b5a40b4a7b5a200b34a,a64b15a55e126b131e18a33e231b20e214b2a2ba4ba14b2a4b4a7b23a235b28ab19a8b28a191b35a,a63b17a54e124b133e19a32e230b24e211ba8ba14b2a4b6a4b25a231b90a188b35a,a62b19a53e123b134e20a31e230b24e210b2a23ba5b35a230b92a35b4a149b34a,a61b20a53e122b136e19a30e231b24e209baba23ba6b34a229b94a30b10a147b34a,a60b23a51e122b136e19a30e230b26e208a33b34a228b95a28b13a145b35a,a60b24a50e122b136e20a29e230b27e206ba33b34a226b97a26b16a143b37a,a60b24a50e122b137e19a29e230b27e205aba33b34a224b100a23b19a141b39a,a59b26a49e122b138e18a29e229b29e203a36b2ab31a222b103a21b21a139b41a,a59b27a48e120b140e19a27e230b29e202ba36b2ab31a220b108a17b22a138b43a,a59b27a48e120b141e18a27e230b29e201b2a36b2ab32a217b113a13b23a137b45a,a58b29a47e120b142e17a26e230b30e200ab2a36ba2b32a216b117a9b25a135b47a,a58b29a47e119b143e18a24e231b30e198a2b3a36ba2b32a215b123a3b26a134b48a,a58b29a47e119b144e17a24e230b32e196a3b3a39b32a214b153a133b49a,a57b30a47e118b145e17a23e231b32e196a2b4a39b33a213b153a132b51a,a57b30a47e117b146e18a24e228b33e195bab5a39b33a213b153a132b51a,a57b31a46e117b146e19a24e226b34e194b6aba39b33a212b154a132b51a,a56b32a46e117b146e19a24e226b34e193b7aba39b34a207b158a132b51a,a55b33a46e117b147e17a26e225b36e190b4ab3aba39b34a206b159a132b51a,a55b33a46e118b146e17a27e222b38e189ab3a2b2a42b34a205b161a131b51a,a54b34a46e118b146e17a27e221b39e187b2ab3a2b2a42b34a203b163a131b51a,a54b35a45e117b147e16ba28e219b40e186b3a2b2a2b2a42b34a201b165a131b51a,a52b37a45e117b148e15ba28e219b41e184b4a2b2a2b2a42b34a200b166a131b52a,a51b39a44e117b148e15ba28e219b41e184b3a4b2ab2a42b35a140b4a55b167a130b52a,a50b40a44e113b152e14b2a28e217b43e182b5a4b5a42b35a136b10a53b167a130b52a,a50b40a44e113b153e12b3a28e219b40e182b2ab3a4b3aba43b34a134b13a51b168a130b52a,a50b40a44e112b154e12b3a29e217b42e180b3ab2a4b4aba43b34a132b16a38b4a7b170a129b53a,a50b40a44e110b156e12b3a29e217b42e179b3a2b2a4b4aba44b33a130b19a34b184a129b53a,a50b40a44e110b156e11b4a29e216b42e179b4a2b2a4b2a3ba44b34a128b21a30b187a129b53a,a49b41a44e109b157e11b4a29e215b43e178a2b3a2b2a4b2a48b34a127b22a29b188a129b54a,a49b41a44e108b158e10b5a29e215b43e178a2bab2ab2a4b2a47b35a43b4a7b5a67b23a28b189a129b54a,a48b42a44e107b159e10b5a30e213b44e178a2bab5a5ba47b35a40b28a57b25a26b190a130b53a,a47b43a44e106b161e7b8a29e212b46e175b2a2bab3aba5ba47b35a37b34a53b26a24b193a129b53a,a47b43a44e105b162e5b10a30e211b47e173ab2a3b4aba5ba47b35a36b36a51b27a22b196a128b53a,a46b44a44e104b164e3b11a30e211b47e173ab2a3b4aba5ba47b36a34b37a50b28a20b198a128b53a,f1473b54f,5f1473b55f,6f1473b56f,3';
