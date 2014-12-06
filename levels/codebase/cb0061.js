/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'taxing1.gif', 320, 2454, 0, 0, 0];
  level_images['door'] = ['doors', 'door1.gif', 50, 82, 32, 86, 6];
  level_images['exit'] = ['ani', 'exit2.gif', 50, 82, 76, 2264, 6]; // +34, +34
  level_images['trap1'] = ['traps', 'chain.gif', 82, 34, 208, 2092, 6];
var level_start = -10;
var start_pos = [[34,112]]; // +2, +26
var traps = [
  [131, 1049, 'trap1', 'chain', 4000, 10, 0]
];

var level = 'b1218a,8,15a585ba,a584b3a,a584b4a,a579b3ab6a,a578b11a8b3a,a577b13a5b10a,a577b14a2b13a,a577b14ab16a,a577b31a,a477ba99b32a,a476b3a98b32a,a476b4a97b32a,a471b3ab6a96b33a,a470b11a8b3a85b33a,a469b13a5b10a80b34a,a469b14a2b13a79b34a,a469b14ab16a77b34a,a469b31a77b34a,a469b32a76b34a,3a469b33a75b34a,a375ba93b33a75b34a,a374b3a92b34a74b34a,a374b4a91b34a74b34a,a369b3ab6a90b34a74b34a,a368b11a8b3a79b34a74b34a,a367b13a5b10a74b34a74b34a,a367b14a2b13a73b34a74b34a,a367b14ab16a71b34a74b34a,a367b31a71b34a74b34a,a367b32a70b34a74b34a,a367b32a70b34a74b34a538ia,a367b32a70b34a74b34a,a367b33a69b34a74b34a,2a367b34a68b34a74b34a,4a367b34a68b34a74b34a466b103a,2a367b34a68b34a74b34a466b6a3b94a,a367b34a68b34a74b34a466b5a4b94a,a367b34a68b34a74b34a463b9a3b94a,2a367b34a68b34a74b34a463b6a6b94a,a367b34a68b34a74b34a463b5a7b94a,a367b34a68b34a74b34a460b9a6b8a27b8a43b8a,2a41b46a280b34a68b34a74b34a460b6a9b8a27b8a43b8a,a39b50a278b34a68b34a74b34a460b5a10b8a27b8a43b8a,a38b52a277b34a68b34a74b34a457b9a9b8a27b8a43b8a,a38b53a276b34a68b34a74b34a457b9a9b8a27b59a,a37b54a276b34a68b34a74b34a457b6a12b8a27b59a,a37b54a276b34a68b34a74b34a457b5a13b8a27b59a,a37b54a276b34a68b34a74b34a454b9a12b8a27b59a,2a37b54a276b34a68b34a74b34a454b6a15b8a27b59a,a38b52a277b34a68b34a74b34a454b5a16b8a27b59a,a38b52a277b34a68b34a74b34a451b9a15b8a27b59a,a39b50a278b34a68b34a74b34a451b9a15b43a43b8a,a41b5ab34ab5a280b34a68b34a74b34a451b6a18b43a43b8a,a47b34a286b34a68b34a74b34a451b5a19b43a43b8a,a47b34a286b34a68b34a74b34a448b9a18b43a43b8a,2a47b34a286b34a68b34a74b34a448b6a21b43a43b8a,a47b34a286b34a68b34a74b34a448b5a22b43a43b8a,a47b34a286b34a68b34a74b34a435b19a21b43a43b8a,a47b34a286b34a68b34a74b34a440b14a21b8a27b8a43b8a,a47b34a286b34a68b34a74b34a440b11a24b8a27b15a36b8a,a47b34a286b34a68b34a74b34a437b13a25b8a27b15a36b8a,a47b34a286b34a68b34a74b34a436b15a24b8a27b8ab6a36b8a,a47b34a286b34a68b34a74b34a437b14a24b8a27b8a2b5a36b8a,a47b34a286b34a68b34a74b34a437b11a27b8a27b8ab9a33b8a,a47b34a286b34a68b34a74b34a434b14a27b8a27b8ab9a33b8a,a47b34a286b34a68b34a74b34a475b8a27b8a4b6a33b8a,a47b34a286b34a68b34a74b34a475b8a27b8a5b5a33b8a,a47b34a10b20a256b34a68b34a74b34a475b8a27b8a4b9a30b8a,2a47b34a10b20a256b34a68b34a74b34a475b8a27b8a7b6a30b8a,a47b34a10b20a256b34a68b34a74b34a475b8a27b8a8b5a30b8a,a47b34a10b20a256b34a68b34a74b34a475b8a27b59a,a47b34a10b20a256b34a68b34a74b34a384b18a73b8a27b59a,a47b34a10b20a256b34a68b34a74b34a384b10a44e4a33b8a27b59a,a47b34a10b20a256b43a50b52a56b52a375b10a44e4a33b8a27b59a,a47b34a10b20a247b52a50b52a56b52a375b13a41e4a33b8a27b59a,a47b34a10b20a247b43a3b6a50b6a3b34a3b6a56b6a3b34a3b6a372b17a40e14a23b8a27b59a,a47b34a10b20a247b6a3b34a4b5a50b5a4b34a4b5a56b5a4b34a4b5a372b16a41e14a23b8a27b59a,a47b34a10b20a247b5a4b34a3b9a44b9a3b34a3b9a50b9a3b34a3b9a369b16a41e14a23b8a27b59a,a47b34a10b20a244b9a3b34a3b9a44b9a3b34a3b9a50b9a3b34a3b9a369b15a42e4a8e2a23b8a19b16a19b8a16b8a,a47b34a10b20a244b9a3b34a6b6a44b6a6b34a6b6a50b6a6b34a6b6a366b9a51e4a8e2a23b8a19b16a19b8a16b8a,a47b34a10b20a244b6a6b34a7b5a44b5a7b34a7b5a50b5a7b34a7b5a366b9a51e4a8e2a23b8a19b6a2b8a19b8a16b8a,a47b34a10b20a244b5a7b34a6b9a38b9a6b34a6b9a44b9a6b34a6b9a363b6a66e2a23b8a19b5a3b8a19b8a16b8a,a47b34a10b20a241b9a6b34a6b9a38b9a6b34a6b9a44b9a6b34a6b9a363b5a67e2a23b8a16b9a2b8a19b8a16b8a,a47b34a10b20a241b9a6b34a9b6a38b6a9b34a9b6a44b6a9b34a9b6a360b9a66e2a23b8a16b9a2b8a19b8a16b8a,a47b34a10b20a241b6a9b34a10b5a38b5a10b34a10b5a44b5a10b34a10b5a360b9a66e2a23b8a16b6a5b8a19b8a16b8a,a47b34a10b20a241b5a10b34a9b9a32b9a9b34a9b9a38b9a9b34a9b9a357b6a69e2a23b8a16b5a6b8a19b8a16b8a,a47b34a10b20a238b9a9b34a9b9a32b9a9b34a9b9a38b9a9b34a9b9a357b5a70e2a23b8a13b9a5b8a19b8a16b8a,a47b34a10b20a238b9a9b34a12b6a32b6a12b34a12b6a38b6a12b34a12b6a354b9a69e2a23b8a13b9a5b8a19b8a16b8a,a47b34a10b40a218b6a12b34a13b5a32b5a13b34a13b5a38b5a13b34a13b5a354b9a69e2a23b8a13b6a8b8a19b8a16b8a,a47b34a10b40a218b5a13b34a12b9a26b9a12b34a12b9a32b9a12b34a12b9a351b6a72e2a23b8a13b5a9b8a19b8a16b8a,a47b34a10b40a215b9a12b34a12b9a26b9a12b34a12b9a32b9a12b34a12b9a351b5a73e2a23b43a19b8a16b8a,a47b34a10b40a215b9a12b34a15b6a26b6a15b34a15b6a32b6a15b34a15b6a348b9a72e2a23b43a19b8a16b8a,a47b34a10b40a215b6a15b34a16b5a26b5a16b34a16b5a32b5a16b34a16b5a348b9a72e2a23b43a19b8a16b8a,a47b34a10b40a215b5a16b34a15b9a20b9a15b34a15b9a26b9a15b34a15b9a345b6a75e2a23b43a19b8a16b8a,a47b34a10b40a212b9a15b34a15b9a20b9a15b34a15b9a26b9a15b34a15b9a345b5a76e2a23b43a19b8a16b8a,a41b5ab34ab5a4b40a212b9a15b34a18b6a20b6a18b34a18b6a26b6a18b34a18b6a342b9a75e2a23b43a19b8a16b8a,a39b50a2b40a212b6a12b5ab34ab5a13b5a20b5a13b5ab34ab5a13b5a26b5a13b5ab34ab5a13b5a342b9a63ha11e2a23b43a19b8a16b17a,a38b52ab40a212b5a11b50a10b9a14b9a10b50a10b9a20b9a10b50a10b9a339b6a78e2a23b43a19b8a16b17a,a38b52ab40a209b9a9b52a9b9a14b9a9b52a9b9a20b9a9b52a9b9a339b5a79e2a23b8a27b8a19b8a16b8a3b6a,a37b94a209b9a9b52a12b6a14b6a12b52a12b6a20b6a12b52a12b6a336b9a78e2a23b8a27b8a19b8a16b8a4b5a,a37b94a209b6a11b54a12b5a14b5a12b54a12b5a20b5a12b54a12b5a336b9a78e2a23b8a27b8a19b8a16b8a3b9a,a37b94a209b5a12b54a11b9a8b9a11b54a11b9a14b9a11b54a11b9a333b6a81e2a23b8a27b8a19b8a16b8a3b9a,a37b94a206b9a11b54a11b9a8b9a11b54a11b9a14b9a11b54a11b9a333b5a82e2a23b8a27b8a19b8a16b8a6b6a,a37b94a206b9a11b54a14b6a8b6a14b54a14b6a14b6a14b54a14b6a330b9a81e2a23b8a27b8a19b8a16b8a7b5a,a38b93a206b6a14b54a15b5a8b5a15b54a15b5a14b5a15b54a15b5a330b9a67e10a4e2a23b8a27b8a19b8a16b8a6b9a,a38b52ab40a206b5a16b53a14b9a2b9a15b53a14b9a8b9a15b53a14b9a327b6a70e12a2e2a23b8a27b8a19b8a16b8a6b9a,a39b50a2b40a203b9a15b52a15b9a2b9a15b52a15b9a8b9a15b52a15b9a327b5a70e17a23b8a27b8a19b8a16b8a9b6a,a41b46a4b40a203b9a16b50a19b6a2b6a19b50a19b6a8b6a19b50a19b6a277b126e16b147a,a30b128a176b6a21b46a22b5a2b5a22b46a22b5a8b5a22b46a22b5a276b127e12b152a,a29b775a115b129e9b155a,a28b777a113b295a,a27b779a111b297a,a26b781a109b299a,a25b783a107b301a,a24b785a105b303a,a23b787a103b305a,a22b789a101b307a,a21b791a99b309a,a20b793a97b311a,a19b795a95b313a,a18b797a93b315a,a17b799a91b317a,a16b801a89b319a,a15b803a87b321a,a14b805a85b';