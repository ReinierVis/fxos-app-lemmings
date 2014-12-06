/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky1.gif', 320, 1848, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 120, 186, 6];
  level_images['exit'] = ['ani', 'exit1.gif', 48, 66, 184, 1478, 6]; // +32, +36
var level_start = 50;
var start_pos = [[122,212]]; // +2, +26

var level = ',ab,a2b,a3b920a,a4b918a,a4b172ab744a,a3b171a4b36a5b700a,a3b89a3b78a6b33a10b187a4b4a4b498a,a3b53ab33a5bab4a3b2a5b59a12b21a3b4a13b184a15b497a,a3b53a4b21a3b4a7bab4a2b2a7b42a2b12a15b19a21b117a3b63a16b77a2b418a,a4b52a5b19a15ba2b4ab2a8b36a8b10a17b18a22b100a2b12a6b61a18b76a2b11ab39a2b365a,a4b52a6b18a18b7a9b33a14b3a21b6a6b4a24b42a2b12a2b36a8b10a8b42a2b12a2b2a19b70a2b3ab3a4b2a4b37a5b364a,a4b52a7b6a5b5a18b7a13b21abab4a17b2a22b2a38b38a2b3ab10a2b35a11b7a11b36a4b2a2b10a3b2a20b36ab21a3b4a3ba2babab3a5b2a3b3a4b21a3b4a10b200a2b40a2b116a,a5b51a18b3a22b5a14b19a2b2a21ba23b2a39b42a2b2a4b2a4b25a3b4a13b7a12b35a4b2a4b6a5b2a21b33a4b19a4b3a7ba3b3a5b2a2b3a6b19a6b2a11b89ab67ab36a8b30a2b5a2b3a2b112a,a6b49a19b3a22b5a14b19ab3a21ba23b2a41b22a3b4a3b3a2b3ab3a4b2a4b24a22b2ab3a15b23ab4ab3a4b2a4b6a5b2a24b21a3b4a7b18a4b3a11b2a6b3ab3a7b18a6b2a12b82a4b2a2b65a3b33a2b3a3ba4b2a3b21a4b9a2b20a2b87a,a8b46a19b3a23b5a15b7a6b4ab4a21ba23b2a42b20a6b3a4ba2babab3a5b2a3b3a3b19a21ba2b2a17b19a2ba2babab3a5b2a3b3a8b2a25b19a15b8a5b4a5b3a11ba7bab4a9b6a4b6a7b2a13b6a6b25a3b4a2b33a6ba6b59a9b21a3b11a2b2a4b2a4b20a5b3a2b3ab21a5b83a,a9b44a16b3ab2a25b2aba16b3a10b7a46b2a42b20a7b2a7ba3b3a5b2a2b3a5b6aba4b6a20b2a2b2a18b18a5ba3b3a5b2a2b3a10ba26b18a15b8a14b3a22b2a13b4a3b2a11b2a30b19a13b21a3b4a8ba7b56a4b2a3b2ab19a7b3a2b3ab3a4b2a4b9a6b4a6baba2babab3ab6a3b7a7b81a,a10b43a15b7a25b2aba16b3a10b7a47ba42b9a6b4a8ba12b2a6b3ab3a5b3a4b2a6b2a21b2a2b2a19b6a6b4a10b2a6b3ab3a10ba27b6a6b4a16b7a14b3a23b2a13b4a2b2a12b2a31b18a14b19a16ba8b36a6b13a4b2a4b21a9ba2babab3a5b2a3b3a22ba4ba3b3a5b2a2b3a2b3a7b81a,a10b43a15b6a26b2aba16b3a11b2ab3a47ba42b4a2b2a19ba12ba7bab4a7b2a5ba6ba22b2a2b2a19b5a21ba7bab4a11ba28b3a28b7a10b3ab2a24ba15b4ab2a13ba32b6a3b2ab4a16b18a26b33a9b3a2b3ab3a4b2a4b12a3b5a13ba3b3a5b2a2b3a32b2a6b3ab3a2b3a8b79a,a8b45a15b4a28b2aba16b2a12ba2b2a48ba43b4ab2a19ba23b2a8ba6b2a4b2a23b2ab2a20b4a32b2a12ba29b2a29b2ab3a9b7a40b7a13ba34b4a3b2a22b6a6b4a30b21a3b4a13ba2babab3a5b2a3b3a2b7a2b2a21b2a6b3ab3a32ba7bab4a3b3a9b78a,a7b46a16b4a27b2a18b2a11b2a2b2a48ba43b7a43b2a8ba6b2a4ba24b5a21b3a32b2a42b2a29ba2b2a10b6a40b7a14ba34b4a2b2a24b4a42b19a24ba3b3a5b2a2b3a4b7ab2a21ba7bab4a44b2a4b2a10b77a,a6b47a17b3a27b2a18ba12b2a2b2a91b7a44ba9ba5ba2ba3ba24b3aba21b3a32ba43b2a28b2a2b2a10b4a44b5a14ba35b4ab2a25b3a43b18a28b2a6b3ab3a5b9a32b2a45b2a4b2a10b77a,a6b47a18b3a26b2a18ba12b2a2b2a93b5a60ba3bab2a23b4aba21b3a76b2a28b2a2b2a11b4a43b5a50b7a25b3a44b6a6b4a29ba7bab4a6b8a33b2a45ba5ba11b3a2b72a,a6b47a19b2a26ba19ba13b2ab2a93b5a60ba5baba22b4aba21b2a77b2a28b2a2b2a12b3a43b5a49b7a26b3a58b2a40b2a7b8a33ba52ba11b3a3b71a,a6b47a19b3a25ba19ba13b5a93b5a59ba5b2aba22b2a3ba21b2a78ba29b2ab2a13b3a43b2aba51b5a26b2a59b2a40b2a7b2ab5a86ba10b3a5b70a,a6b47a20b2a45ba13b3aba94b2aba59ba5ba3ba21b2a25ba79ba29b5a14b2a43b2aba51b5a26b2a59b2a40ba8b2ab5a86ba6b3ab2a7b9a3b4ab52a,a6b47a21b2a44ba12b4aba94b2aba64ba26b2a25ba79ba29b3aba14b3a42b2aba51b5a26ba60b2a49ba3b2aba86ba5b7a8b3a2b4a3b2a2b52a,a5b48a22ba57b4aba94b2aba92ba25ba79ba28b4aba15b2a42b2aba52b2aba26ba60b2a49ba3b2aba86ba5b6a10b2a2b4a2b2a4b51a,a4b48a23ba57b2a3ba94b2aba92ba25ba108b4aba16b2a41b2a54b2aba26ba61ba49ba3b2aba92b4a12ba4b4ab2a5b49a,a4b48a22b2a57b2a98b2a94ba25ba108b2a3ba17ba41b2a54b2aba26ba61ba49ba3b2aba93b4a11ba4b7a7b46a,a3b49a22b3a56b2a98b2a94ba25ba108b2a21ba41b2a54b2aba26ba61ba49ba3b2a96b3a11ba3b7a9b44a,a3b49a22baba57ba98b2a229b2a20b2a41ba55b2a28ba61ba49ba3b2a97b3a16b5a10b43a,a3b48a23baba57ba98ba231ba20b3a40ba55b2a144b2a98b2a16b5a10b43a,a3b48a22b2a2ba56ba98ba231ba20baba96b2a144ba99b3a15b5a8b45a,a3b48a22ba4ba55ba330ba20baba96ba145ba100b2a16b2aba7b46a,a4b47a22ba391ba19b2a2ba95ba247b2a15b2aba6b47a,a5b46a434ba4ba343ba15b2aba6b47a,a7b44a434ba348ba15b2aba6b47a,a7b43a783b2a15b2a8b47a,a7b42a784b3a14b2a8b47a,a7b43a783baba14b2a8b47a,a7b44a782baba14ba8b48a,a8b44a780b2a2ba13ba7b48a,a9b44a779ba4ba20b48a,a11b42a779ba25b48a,a11b42a805b48a,a12b40a805b48a,a12b39a806b48a,a13b38a806b48a,2a12b39a805b49a,a11b40a805b49a,a11b39a806b48a,a11b38a807b47a,a11b37a808b46a,a11b38a807b45a,a11b38a808b44a,a11b39a808b43a,2a12b38a807b44a,a12b39a806b44a,a13b38a806b44a,a14b37a806b44a,a15b37a806b42a,a16b36a806b42a,2a15b36a807b42a,a14b36a808b42a,a13b37a808b42a,a13b37a808b43a,2a14b36a809b42a,a17b34a808b43a,2a17b34a574b4a229b44a,a14b37a570b10a227b44a,a12b39a568b13a227b42a,a9b41a567b16a227b40a,a8b41a566b19a226b39a,a8b42a564b21a225b39a,a8b42a563b22a225b39a,a9b41a562b23a224b39a,a13b38a560b25a223b38a,a12b40a558b26a224b37a,a12b40a557b27a224b35a,a12b41a555b28a223b35a,a12b41a554b29a223b36a,a12b40a554b30a223b37a,a12b41a552b31a222b38a,a12b42a551b31a222b38a,a13b42a550b32a220b40a,a14b41a550b32a219b41a,a16b39a550b32a219b41a,2a17b38a550b33a217b41a,a17b39a549b33a217b40a,a18b39a548b33a218b38a,a18b39a548b34a217b38a,a17b40a548b34a217b38a,a16b40a549b34a216b38a,a16b39a550b34a216b37a,a16b38a551b34a216b37a,a16b37a552b34a216b37a,a16b37a552b35a215b38a,2a16b37a553b34a215b38a,a16b37a553b34a215b39a,a17b36a554b33a214b40a,a17b37a553b34a116ia96b40a,a18b36a553b34a213b40a,a16b38a552b35a213b40a,a13b41a552b35a214b39a,a12b42a552b35a213b41a,a12b42a552b35a100ba112b41a,a12b42a552b36a98b3a110b42a,a13b41a552b36a97b4a26b4a3b4a73b42a,a17b38a551b36a93bab45a71b42a,a16b40a550b37a91b50a69b42a,a15b42a549b37a82ba3ba3b52a67b43a,a14b44a548b37a9ba9ba61b3ab57aba64b44a,a12b46a159ba9ba359ba9ba8b39a5b5aba4b4a58b65a61b46a,a11b47a157b5aba4b4a349ba5b5aba4b4a6b41ab21a50bab67a60b47a,a10b48a150b4ab20a3ba30ba9ba300b4ab20a3b65a47b71a58b48a,a10b48a77ba9ba17ba9baba9ba19ba2b26ab4a20ba5b5aba4b4a7ba289b27a2b68a4ba38b72a58b48a,a10b48a19ba9ba31ba7baba3b5aba4b4a3ba3ba5b5aba4b6aba4b4a16b38a3ba9ba2b4ab20a3b4a236ba9ba11ba9ba10ba5b100a2b4a9ba7ba9ba2ba3b76a8ba47b48a,a11b48a10ba5b5aba4b4a10ba9b2a5b5aba2b32ab32a11bab44aba4b39a213ba9baba5b5aba4b4aba5b5aba4b4a7b4ab112a4b4a3b5aba4b85aba4b4a46b48a,a11b48a7bab4ab20a5b5aba4b5ab77a10b92a25ba9ba168ba5b5aba4b6ab21ab20aba2b237a43b48a,a11b50a4b30ab96a7bab95a6ba8b2a4b5aba4b4a3b2a160b4ab305a41b48a,a11b181aba4b101ab5aba3b29a156bab312a39b48a,a12b328a136ba9b2a5b318a38b48a,a13b329a126ba5b5aba4b5ab321a38b47a,a13b330a110ba9ba3b4ab340aba36b47a,a13b330aba100ba5b5aba4b4ab348a35b47a,a13b332a97bab4ab366a35b47a,a13b332a96b375a34b47a,a13b334a93b377a33b47a,a14b334a88bab381a32b46a,a15b332a6b4a78b387a30b45a,a17b332a3b7a75b389a31b43a,a17b344a71b391a31b43a,a16b346a69b391a31b44a,a15b351a65b392a29b46a,a13b355a62b393a27b49a,a12b358a58b395a6ba4ba4ba4ba4b51a,a11b360a56b396abab11ab4ab4ab52a,a11b362a53b474a,a11b364a50b475a,a10b366a45bab477a,a10b368a42b480a,a10b369a40b481a,a10b369aba36b483a,a11b370a35b485a,2a10b373a31b488a,a9b375a29b489a,a8b375a30b490a,a7b378a28b491a,a6b381a26b494a,a6b381a25b496a,a6b382a24b497a';
