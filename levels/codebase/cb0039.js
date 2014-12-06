/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky9.gif', 320, 3200, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 40, 1382, 6];
  level_images['exit'] = ['ani', 'exit1.gif', 48, 66, 232, 1394, 6]; // +32, +36
  level_images['bashrock1'] = ['ani', 'bashrock_right2.gif', 74, 78, 60, 1894, 4];
  level_images['bashrock2'] = ['ani', 'bashrock_left1.gif', 60, 88, 210, 764, 4];
  level_images['steelplate1'] = ['gfx', 'steelplate14.gif', 48, 288, 136, 698, 6];
  level_images['steelplate2'] = ['gfx', 'steelplate15.gif', 48, 864, 136, 1036, 6];
  level_images['steelplate3'] = ['gfx', 'steelplate16.gif', 48, 240, 184, 1850, 6];
  level_images['steelplate4'] = ['gfx', 'steelplate17.gif', 48, 96, 136, 1994, 6];
  level_images['steelplate5'] = ['gfx', 'steelplate17.gif', 48, 96, 88, 2042, 6];
  level_images['steelblock1'] = ['gfx', 'steelblock5.gif', 38, 48, 282, 2220, 6];
  level_images['steelblock2'] = ['gfx', 'steelblock5.gif', 38, 48, 282, 2268, 6];
  level_images['steelblock3'] = ['gfx', 'steelblock6.gif', 38, 48, 276, 418, 6];
  level_images['water1'] = ['ani', 'water.gif', 32, 128, 288, -94, 6];
  level_images['water2'] = ['ani', 'water.gif', 32, 128, 288, 34, 6];
  level_images['water3'] = ['ani', 'water.gif', 32, 128, 288, 162, 6];
  level_images['water4'] = ['ani', 'water.gif', 32, 128, 288, 290, 6];
  level_images['water5'] = ['ani', 'water.gif', 32, 128, 288, 2316, 6];
  level_images['water6'] = ['ani', 'water.gif', 32, 128, 288, 2316, 6];
  level_images['water7'] = ['ani', 'water.gif', 32, 128, 288, 2444, 6];
  level_images['water8'] = ['ani', 'water.gif', 32, 128, 288, 2572, 6];
  level_images['water9'] = ['ani', 'water.gif', 32, 128, 288, 2700, 6];
  level_images['water10'] = ['ani', 'water.gif', 32, 128, 288, 2828, 6];
  level_images['water11'] = ['ani', 'water.gif', 32, 128, 288, 2956, 6];
  level_images['water12'] = ['ani', 'water.gif', 32, 128, 288, 3084, 6];
var level_start = 1090;
var start_pos = [[42,1408]]; // +2, +26

var level = 'a259b863a,4a258b863a,a258b149a2b4ab99ab606a,a258b104ab44a2b2a3bab91a7b606a,a258b104ab3a2b34a3b2a2b2a7b35ab7ab46a5b2a4b46ab160ab393a,a258b104ab4abab2ab4a10b8a3b3a4b2a2b2a7b5ab4ab3a4b12ab4a2b3ab2ab3ab3ab20ab9a2b4aba5ba5b52a2b54a2b52a2b46a2b3a3b45ab70ab202abab54ab6a,a258b100a3b10a3b4a11b2ab3a2b3a5b2a3ba6ba2babab2abab3a4b3a3b4a3b8ab5a2b4ab2a2b3ab5ab5a2b3a8b4aba5ba5b4ab40ab6a2bab4ab40ab6a2b45a2b5a4b49a2b2ab43ab3a3b2a3b54ab4a2b194a4b3ab50a2b5ab4a,a258b70ab4a4bab2a2b8a5ba4b2ab4ab2a4b3a11b2ab2a3b3a5b2a3ba6ba3bab3a3b3a5b2a2b4a5b13ab4a2b2a2b8a2b2a6b2aba5b5ab2a3b2a5b8ab25ab7a5b5a2bab5ab3a3b20ab9a5bab3a2b33a2b10a2b5a9b32a4b3a2b3ab3a3b40ab4a3b2a4b44abab3a5b3a2b194a4baba2b49a3b8a,a258b69a2b4a3b2aba6b5a5ba3bab9a5b3a11bab2a3b2a7ba3ba6ba5baba3b2a6b3ab4a5b17a3b2a2bab6a3ba6bab2a5b5a2ba3ba7b12ab3a4b2a2bab6a6ba7bab3ab2ab3aba2b2a5b2a5b2a4b4a3ba12b5ab2ab6a2b7a4b2ab2ab6a9b3a2b5a10b9ab3a3b4a2b7ab2a5ba2babab3a5b2a3b20a2b9abab3a5b2a3b44a3b3a5b7a8b20a2b8a2b47ab103a5b4ab5a2b2a3b32ab5a2b8a,a258b68a3b5a2b4a6b5a5b2a2b10a7b2a11b3aba3ba7ba3ba5ba5b2aba3ba7b7a5b9ababab3a5b2a3b3a6b2a5b3a6b5a2ba3ba7b3ab3ab4ab3a4b2a2b8a6ba7bab3aba2b3aba2ba6b3a4b2a11b2a11b5aba2b6a2bab5a5b3a2b3a12b3a3b2aba10b4a2b3ab3a4b2a2b8ab2a8ba3b3a5b2a2b3a3b2aba2babab4a3b3a3b3a3b3a5b2a2b3a3ba4b20abab9a5b2a6b7a11b5aba5b5a2ba2b5ab43ab109a3b5abab7a5b9a2b9abab6a2b5a2b7a,a258b49a2b7a2b4ab2a4b5ab2aba7b5a6ba2b2a3b5a7b3a10b3a2bab2a7ba9ba5ba3ba9ba2b3aba6b6abababab3a5b2a2b4a7ba5b2a9b3a2ba11b3a3bab2abab3a5b2ab5aba7ba7bab2a2ba2b3a2baba7b2a4b2a12ba10ba2b2a2ba2b4a4ba2b4a5b3ab4a12b3a3b2aba11baba2babab3a5b2abab3a4b2a12b2a6b3ab3a3ba2b5a2b4a3b3a2b3a4b2a6b3ab3a3b2a5ba2b2ab2a4b5a2b2a4b5a5b3a5b6a12b5ab2a8b2aba3b3abab29a3b7a4b2ab104aba3b2a2b3ab7a6b3ab4ab6ab3ab8a2b5ab7a,a258b48a3b7a3b3a8b7aba8b2aba6bababa3b5a8b2a10b3a4baba6ba14ba14ba3b4a6b8a5b2a6b3ab3a8b2a4b2a9b3a2ba11baba5b2a3b3a5b3ab3a2ba17b2a5b2a4b2a7ba5b2a11b2a10ba2b2ab2a2b2aba7b3a6b3ab3a13b2a4b2aba11b2a3ba3b3a5b7a5b2a12ba7bab4a3ba4b4a2b4a2b4ab4a4ba7bab4a4b2a5bab2a2baba3b3a5ba4b5a7ba5bab3a13b5ab2a7b2aba4b3aba2b3a2b3ab3a4b4a2b6a7bab2a3b2a2b97a2b6a3b2a3b9a7b3ab2ab6ab5a2b5a5b4ab7a,a258b47a5b4a5b3a8b9a8b2aba6baba5b5a9b2a9baba3b2aba36ba3bab3a5b9a4ba7bab4a9b2a4ba9b4a2ba13ba6ba3b2a6b3ab3ab2a17ba6b2a13ba5b2a11ba11ba2ba2babab2a9b2a7b6a14b2a4b2aba12ba7b2a6b3ab3a6ba23b2a10b3a2b5ab8a16b2a6b2a3bab2a2b2aba3b3a4b2a4b5a7ba5b5a14b2aba2b2a5b2a2ba4b3a2ba3ba2babab3a5b2a3b3a9b2ab2a3ba3b94aba3b6a3ba4ba3b5a8b2a2ba2b4a3b4a2b3aba5b12a,a258b45a8b3a4b4a7b7ababa7b2aba6ba6bab2aba10ba9baba3ba3ba34ba5b2aba4ba2b2ab4a15b2a9ba2ba3ba10b2a17ba6ba3ba7bab4a2baba16ba6ba14ba6ba10b2a10ba3bab2ababa10b2a10b2a15ba5b2a13b2a6b2a7bab4a7b2a22b2a10b3a2b14a16b2a7ba3baba3ba3ba2b3a4ba6b2aba7b2a3b3aba15b2aba3ba5ba8b2a10ba3b3a5b2a2b3a10ba3b2a2ba2b94a2b2a2b3a2ba3ba4b2a2b5a8b2a4b4a4b5ab3a6b7aba2b3a,a258b45a8b3a4b3a9b8aba7b2aba6ba8b2aba10ba11ba2ba39ba5ba3ba3ba2b2aba3ba14b2a9ba3bab2a10b2a17ba6ba12bab2a2b2aba16ba6ba21ba10ba11ba3baba3b2a11ba10b2a15ba5b2a13ba7ba11b2a9ba22ba11b3ab8ab2ab3a16ba8ba5ba2ba7b3a3b2a6b2aba8ba3baba17b2aba3ba5ba8b2a14b3a5b3ab3a10ba4ba5b92a3b2a3b3a2b2ab2a5ba2b5a8b3a3b3a5babab4a9b5aba3b2a,a258b41ab3a8b3a4b3a9b7a3ba6b2a17b2aba9b2a59ba11b4a18ba10ba5baba9b2a24ba12bab2a2ba3ba15ba6ba21ba10ba15b2a5ba11ba10ba16ba5b2a12b2a7ba11b2a8b2a34b3ab2ab5aba2b2a26b2a3b2a10b3a3ba7b2aba8ba3ba19b2aba3b2a3b2a8ba15bab2a3b2ab4a16ba5b90a4b2a4b3a5baba4ba3b2aba7ba2ba3ba12b2a10b5aba3b3a,a258b40a2b3a8b3a5ba11b5a11b2a17b2aba9b3a70b2aba28ba5b2aba9b2a39ba2ba20ba28ba26ba6ba39ba5ba13ba20ba9ba34b7ab7a2b2a27ba3ba10b3a4ba7b2aba8ba23b2a6ba3ba9ba18ba3ba3b2a17b2a3b83a6ba5ba5b2a5b2aba4ba3b2aba7ba2b2ab2a12b2a10b7a4b2a,a258b40a2b2a9b3a5ba12b2aba11b2a17b2a11baba70b2a30ba5ba3ba8b2a63ba55ba6ba39ba5ba79b6a2b7a2b2a27ba3ba6b3ab2a13b2a10ba23b2a6ba3ba9ba18ba3ba3b2a18ba3bab81a6ba5ba5b2a5ba3ba3ba3b2aba7ba2ba2baba11ba11b3ababa5b2a,a258b39a3b2a9b2a6ba12b2aba11ba18b2a11baba70b2a35ba13b2a126ba39ba85b4a5b2ab3a2b2a27ba9b7a13b2a10ba23b2a6ba13ba18ba7ba19ba3bab67ab8a3ba7b2a3b2a5ba5ba8ba3b2aba6ba3bab2aba24b2ababa6ba,a258b38a4ba9b3a6ba12b2aba11ba18b2a10b2a2ba69b2a48b3a253b4a4b2abab2ab2a27ba9b6a14b2a34ba7ba13ba18ba27ba5b51a2bab4a2b4aba2b4a6ba8ba3ba6ba18b2a8ba3baba3ba23b2aba8ba,a258b38a4ba9b2a7ba12b2aba30ba11ba4ba68ba50b2a253b4a4b2abab5a27ba9b4a16ba35ba7ba13ba18ba27ba5b51a5b2a8ba3b3a15ba3ba6ba18b2a13ba28b2aba7b2a,a258b37a5ba9b2a7ba12b2a32ba11ba73ba50b2a253bab3a3b2abab3aba38b4a15ba104ba5b51a5b2a8b2a2b3a15ba10ba18b2a42b2a9b3a,a258b37a5ba9b2a20b2a169b2a253ba2b2a3b2a2b4aba39b3a128b48a6ba10ba2b3a15ba29ba43b2a9baba,a258b37a5ba10ba20b2a169b2a256b3a2b2a2b4aba40b3a127b42ab5a17ba2b2a16ba29ba43b2a9baba,a258b36a6ba10b2a19ba170b2a257b2a2b2a2b2a3ba41b2a128b41ab4a18ba2b2a90ba9b2a2ba,a258b36a18ba19ba171ba258b2aba3b2a45b3a128b39a2b3a19ba2ba91ba9ba4ba,a258b36a17b2a191ba259baba3b2a46b2a129b36a26ba2ba101ba,a258b35a18ba192ba259ba6ba47b2a129d36a28ba,a258b33a19b2a192ba258b2a6ba48ba129d36a28ba,a258b34a18ba452b3a5ba48ba128d37a28ba,a258b34a18ba452baba5ba47b2a127d37a29ba,a258b34a471baba53b3a125d36a,a258b33a471b2a2ba52baba125d35a,a258b32a472ba4ba51baba125d34a,a258b32a472ba55b2a2ba125d33a,a258b32a528ba4ba127d30a,a258b32a528ba132d29a,a258b32a661d29a,a257b33a661d29a,a257b33a661d28a,a257b33a662d25a,a257b33a664d24a43e48a,3a257b33a665d22a44e48a,a257b33a665d20a46e48a,2a257b33a665dad18a46e48a,a257b33a665da2d17a46e48a,a257b33a665da3d15a47e48a,2a257b33a665da2d16a47e48a,a257b33a665dad16a48e48a,a257b33a666d17a48e48a,a257b34a665d17a48e48a,a257b34a665d16a49e48a,a257b34a666d13a51e48a,a257b34a669d11a50e48a,3a257b34a669d10a51e48a33b4a,a257b34a669d8a53e48a31b7a,a257b34a670d6a54e48a30b9a,a257b34a672d3a55e48a29b10a,a257b34a730e48a28b12a,a257b34a58e144a24e432a48e48a52b13a,2a257b34a58e144a24e432a48e48a51b14a,2a256b35a58e144a24e432a48e48a51b14a,a256b36a57e144a24e432a48e48a51b14a,a256b37a56e144a24e432a48e48a51b15a,a256b37a56e144a24e432a48e48a50b16a,a256b38a55e144a24e432a48e48a49b17a,a256b39a54e144a24e432a48e48a48b18a,4a256b39a54e144a24e432a48e48a47b19a,a256b39a54e144a24e432a48e48a46b21a,a256b40a53e144a24e432a48e48a28b9a9b22a,a256b40a53e144a24e432a48e48a27b11a8b23a,a256b40a53e144a24e432a48e48a26b13a7b24a,a256b40a53e144a24e432a48e48a24b16a5b25a,a256b40a53e144a24e432a48e48a23b18a4b25a,a256b40a53e144a24e432a48e48a22b19a4b25a,a255b41a53e144a24e432a48e48a22b48a,a255b41a53e144a24e432a48e48a22b51a,a255b42a52e144a24e432a48e48a23b51a,a255b43a224b3a2b3ab3a4b2a4b7a2babab3a5b2a3b3a16b3a69b4a45b3a78b2a37ba94e120a23b52a,a255b44a225ba2babab3a5b2a3b3a6ba3b3a5b2a2b3a17b3a70b3a45b3a78b2a37ba94e120a23b52a,a255b45a227ba3b3a5b2a2b3a11b2a6b3ab3a17b3a70b3a45b3a78b2a37ba94e120a23b53a,a254b46a231b2a6b3ab3a11ba7bab4a18b2a71b3a45b2a79b2a132e120a24b53a,a253b47a231ba7bab4a23b2a19b2a71b2a46b2a80ba132e120a25b52a,a252b48a242b2a24b2a19ba72b2a46ba81ba132e120a25b52a,a252b48a242b2a24ba20ba72ba47ba81ba132e120a25b52a,a252b48a242ba46ba72ba47ba81ba132e120a25b52a,a253b48a288ba72ba47ba214e120a25b52a,a253b48a288ba72ba47ba214e120a25b53a,a253b48a288ba72ba47ba214e120a26b52a,a253b48a361ba262e120a27b51a,a254b48a623e120a29b49a,a251b51a100c11a512e120a29b49a,a250b52a99c13a511e120a28b50a,a249b53a95c20a508e120a27b51a,a248b54a94c22a507e120a25b53a,a247b55a93c24a506e120a24b55a,a246b56a93c25a505e120a23b57a,a245b57a93c25a505e120a23b58a,a244b58a93c25a505e120a23b59a,a243b59a92c27a504e120a22b60a,a242b60a92c27a504e120a21b61a,a240b63a91c27a504e120a20b62a,a239b65a90c27a507ba18ba39b3a2b3ab3a4b2a4b6a50b62a,a238b67a89c27a507ba18ba41ba2babab3a5b2a3b3a53b62a,a237b68a89c27a507ba63ba3b3a5b2a2b3a54b63a,a236b69a89c27a507ba67b2a6b3ab3a53b64a,a235b70a88c29a506ba67ba7bab4a54b64a,a234b72a87c29a585b2a55b64a,a233b73a87c29a585b2a55b65a,a232b74a87c29a585ba55b66a,a231b76a86c29a641b66a,a231b76aba84c29a641b66a,2a230b79a84c29a641b66a,a230b80a83c29a641b66a,a230b81a82c29a641b66a,a229b84a79c30a641b66a,a229b85aba71c35a184ba6bab4a444b68a,a229b88a69c37a170b5a4ba2b3a4b9a94ia347b69a,a228b89aba66c40a167b7ab10ab12a440b70a,a228b93a61c44a165b33a439b71a,a228b93a60b47a161b38a436b71a,a227b94a59b49aba9ba146bab39a99b2a59b4a271b71a,a226b96a9ba46b55aba4b4a121ba6ba14b42a67b4a28b3a37ba3b2a7baba4b7a269b70a,a209e17b98aba4b4a42b70a108b2a7b3a5b2a13b42a66b7a26b5ab2a29bab3ab5abab18a267b69a,a209e16b112a38b72a106b4abab8ab7a8b44aba9ba6ba45b9a26b10a24b36a266b69a,a209e16b113a3ba3ba28b73a97b2a3b28aba4b48a7b3a5b2a43b47a22b37aba264b69a,a209e14b115ab9a3ba9ba11b76a94b37a2b52abab6ab7a38b51a19b41a263b47e48a,a209e13b132aba4b4a8b79a89b112a3baba4ba23bab53a16b43a263b47e48a,a209e12b146a4b81a87b113a2b5a3b2a21b56aba12bab44a262b47e48a,a209e12b147ab83aba84b129a17b59a3ba7b47aba120babababa7ba49ba9ba65b47e48a,a209e12b234a81b133a6ba2ba3b61ab5ababab49a33ba9ba72ba2b10a4b4a33ba5ba3bab8a2b5a63b47e48a,f208ae12b234a79bab135abab130aba22ba2b10a3b5a69b25a22ba5b5ab26aba9ba48b47e48f,f208ae12b235a76b274a21b28aba9ba50b28a6ba9ba2b4ab38aba4b4a46b47e48f,f208ae11b236a75b276a10b2a8b32aba4b4a47b31a2b5aba4b60a9ba33b47e48f,f208ae11b238a72b277a2b2a4b8a3b47a42b107aba2b6a31b47e48f,f208ae10b240aba67b346a5ba33b122a28b47e48f,f208ae9b243a66b347a4b4a30b124a27b47e48f,f208ae9b244a65b358a27b124a27b47e48f,f208ae8b245a65b359a26b127a24b47e48f,f208ae7b247a64b359a26b128a23b47e48f,f208ae7b247a63b359a26b129a23b47e48f,f208ae7b247a63b360a25b131a21b47e48f,f208ae7b249a59bab362a21bab132a20b47e48f,f208ae8b248a59b366a19b134a20b47e48f,f208ae7b249a59b367a18b136a18b47e48f';
