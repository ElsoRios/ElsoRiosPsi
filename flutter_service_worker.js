'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "77c47b52cd754e7b214fe59faa93461a",
".git/config": "bdf12cf811b96d72e7a6e86f2bfef9ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10f430ea1597a37919f93e5d1f7b032c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "934a31d017850089f35e283786b52306",
".git/logs/refs/heads/main": "d4ab337d8c6f44fc30e6ab47a497af68",
".git/logs/refs/remotes/origin/main": "a2ab3631d51aedae24771fb6d0dae89c",
".git/objects/00/dd73d690d843fa365dc96e059a8508f19ae512": "8aa540d4aaf704ec0fbcdf8c9ec5f115",
".git/objects/01/063c9b131477fabfd2d7020b570da82ee7881f": "161a79218d55d8d8adf0ce7dfdadc25c",
".git/objects/02/a88b78947a9298beb2aa42e6f70aa15eb7453b": "c15de0d9e01f8eece4a94f3cf1a2202c",
".git/objects/04/600a658fb5e4b08d1c3d06c7ff1f11d280a92f": "b37279d8e134fa843fd03222656196b3",
".git/objects/05/9a8661688029fabd2175bd9d29620547365ca5": "8d3bf65a259a7f5684c3e55738d737a4",
".git/objects/05/fbb2c7748433c8c1835979100fc1fd1f33cff0": "6936096644219efdb605722417a7c2f1",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/8276c2d6a9a7c0e7e0177c71151ca0d1d38280": "0019e09f72eefd54d52e62ea7b00cb12",
".git/objects/09/cb5f8645978495520b0a8f080aadde2ba07a84": "37c13593eb4ac00d1e972d588ddccd9a",
".git/objects/09/cc0ccea3f04ffd2b0c84b7beccf18dfe4938cb": "f978c797064019b99d9508b48cca63e0",
".git/objects/11/e5854591676051f5cbe199206459563267691e": "bfa351e1a98040c05491c2fa8abfb9a9",
".git/objects/11/feebf96df1a02ee8b8559b932a0b4b81a160bc": "8100557103209348b0270bbf2da35e6a",
".git/objects/13/16bf8014f0bd4adae7ae817136dc3effd72ed6": "70eb46f79872c5dc9f2f14d3e2dc8565",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e0aa340890c29f7c69037002fba0c3b4ef0068": "11bb15650ceba5d763da0cc8b4e8403b",
".git/objects/1b/128d1de707df4ba64704896f44bc6d2392b0e3": "70061f111e73efb23d41329c596f56fc",
".git/objects/1c/1ceb11ee3cd87a632bdf302f007eb6dce49f58": "01045686ff72c5449051a9684009ffe2",
".git/objects/1c/b19f39c146f52ce014bc9c6226bd57b0ff372b": "5dec1a2b84808053dfdfda93ede5a144",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5a19cba99b7022c037392db65553ddb97da3e3": "316b830365c54691978b8fac56ee7012",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/3c0c397d303129de266c0d5ba3971bbfb4df45": "d21e91083659c73c382aa51d23d7b208",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/0a6b94ae4bc6252e7f1242ca857b3c71f98dd6": "9b058a723ed093d71a6b1181f18c0237",
".git/objects/25/2d3684f6ce3635eb53a52f2457c6ce41bfb773": "1f68a5b78caec1f365c004fc3e76a720",
".git/objects/25/42f29d99cab70a75904f55cf5b3d69b6143855": "b1dae6f82fd177eab3038d0a905811c9",
".git/objects/26/bce20be38af15142ed2584a20dcaad46bbb096": "dfa6d248f8dff9eabb730805b2cff245",
".git/objects/29/59e37f13c897cd0a2b9a43c460dbdf0299bd7d": "72d14e5274dd288788d986fa8572bd06",
".git/objects/2b/11003736aaa1a61f58fc2efa9683260612028c": "e001da3f9a756cc06155fc84b601ec2d",
".git/objects/2b/b0924fce2ed40fa4fd70d438e4b830f0b89709": "fcda32380567cde3df912051917dcba4",
".git/objects/31/4271cf9356ac22c4d0e870f47fd32d5117bd87": "5978c68b1ffda4690d5690db833e3c91",
".git/objects/32/713767098d22e8834c2ca1c333a7acb3843c01": "c50510ef96744f9342fedba76f06d736",
".git/objects/32/82202a4f4817933b2f5bb43e4192154f93dc6e": "f4b280b01ed556c31add84a7a35618b4",
".git/objects/34/f9639e482dc57dd61ae8dafa46d5f355beeeba": "5a88dd231f28086e9d8ec102908da98c",
".git/objects/37/c8144186e58527304f78197824da5891ebb7af": "4d864901b0c621e49d13d8426e4881bf",
".git/objects/39/2cc5089dc4739d7096c8c69cf6b9e25cdf541e": "ef04feeec2307e6e9605b444f13e24a8",
".git/objects/39/d77598b6aa7509f4277ee27738148965ea0859": "e76c1cd66c1bee6900d78a52b833e718",
".git/objects/3d/2c24e5ff55ba10a7aed3276bd044c81f0b6dea": "936b4406b2125243e2a95a4b75f605a6",
".git/objects/42/34e355a6cda72ee9f22b60db4cb454c2e58e88": "d932771d2fb0d04ab0c5868f260275db",
".git/objects/42/e39e949c9a731f34802bfcf3827908c0f50147": "0ec92e6cc21c26d83ebc9abf9ed434f6",
".git/objects/43/94ea81711409c9a45745e423635955ebbaedb8": "844ebdcbf36990cc8dad05f68109f9df",
".git/objects/45/d0bc68e8cafa0d2acf447a7d989c386f91bcd2": "538f8ccd4d5e2021ab0db21aa06d624f",
".git/objects/47/292f890262235fe67c206fd0698309e77e781e": "2ff097e53625ba4efb9df5c248ed6474",
".git/objects/47/90746135e412ba62445e2c4a4c874b9c8bc855": "87ecc098dc865c58f685f41b7118c9a5",
".git/objects/49/6ddcdaf179057cedf0bb21b504895d238799e6": "7d2099d40395bc997084c104b6bbd786",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/9c7d74b20aa85c9f5dd30cb14c66f2237628f4": "2a141a377a16bea4b7e241ac19e5fcfe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/25e1c6a11a1073437213637531e6a9d8f9b91c": "f2406379db2d97b31c1e33b50372ffeb",
".git/objects/52/d43beda22069eb5f87a94e27518a9fafd244ed": "a9941d04eb11a37cc551429d57f3800e",
".git/objects/52/db7ff30aaec72c095e33340e2e0c3df0a89153": "00456d8185621450159ee26602794953",
".git/objects/53/16cef935f8d8167c48101d0312077b752ff98e": "746c2f80df22d5ac9ca6aed12ab4a837",
".git/objects/53/38f6f8954722233cfb09b463332efad64326d9": "69d11c70dd4dbbf48bbba3baaf800c2d",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/52212da651a5e38db5358d14c9142c25e5dc84": "5d1970fcbf4e8b0ea99f6cb19a13e530",
".git/objects/60/341689e02430ca3dfb4cb2168608178d7f5603": "b362e66e633bcfad242612a33e84b712",
".git/objects/60/e7134b7946e927f14a6e49fa79d316b1f03bc8": "02f237a9fb63525a2ee42a83075aa5e6",
".git/objects/64/a655a63318bba5166e6494a76f6eada09b3494": "3f05ce8a3773f223923609170b8fbd6f",
".git/objects/65/81aa3bf9fe70f3fe8ca07f8d62eaaaf0d26b9d": "36c63d3b44c3340d793849d3ed8d29a9",
".git/objects/68/aee4bd453c740a1e65863a3cd9402729c8042e": "1200a7d619e7ecd69567babe7705c435",
".git/objects/68/b55e5153489d6d02e96174cbde490ccf7f45a9": "34deb2de85d54b512f4fff4613e47446",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/b27ea84d2669d74885c9ca390e597d6e7310c5": "27a0ad0316b9f037b49a31fb007fa2e8",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/83/894f0edba518572469d5ac8bfe07c66b54de21": "544a3c3e73fa49bafac6a2a534b6d2f0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/5d6a49e93d012c0467301a35075a11ed6a01c2": "47bef4e3e4ea13c0f59eafdd5d23ee63",
".git/objects/87/233d71a8bea4bb372e7a2f0230b75dcebb9cfc": "63a431f3b5499d3d9860e11ac4c63748",
".git/objects/87/580b5a7dab8536442f66b64f3a8091eac39e93": "4edaa410cde91326b4dfcc62cddce9d4",
".git/objects/87/64f9246544c473479212ad86d50c4c4d99dea9": "e66435af85a90707141937fc30b02340",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5d0a88b263c7b644c41c0fbb5300cf7a2a2997": "4e2debf17d6b84644d42f0827d7efc1a",
".git/objects/8e/0a93f6734e368484b3f45a320975b6579485bf": "d8555aa8b97a7bb36c9a905837f84c52",
".git/objects/8f/2621d4dd7c163cbbc82c681f5a3f9a1866afa0": "d7981dc078bc76a0ff15119fcd973bd4",
".git/objects/90/021431b1e7de45fd8841e9843895b542735779": "a79e0cb658ed0c6a747744abfc9a8404",
".git/objects/90/69a26017059d69309e3509de862ae449dc1401": "7ba85171ec9f3aafa185df57db12f88c",
".git/objects/91/325ce4bb90932365a9506d32627f423e4b0b01": "d60267affe3a23df505ab69307585848",
".git/objects/91/3c67dd0c22e78f7284889ad7344c4f29469aef": "ec0ca256caa0325f4ab5190dd71891ae",
".git/objects/92/3fa9f0af0a8e65906fe14ec391034885b1f971": "dfcd2f3c7d25f9e0cba2b7d602829641",
".git/objects/92/70fbe3a576e378b0fe62290870c70c5d2f7b35": "c2cb67830cb8947c43f22ff44ae84bfb",
".git/objects/93/1e250e65ace7530cf4527163c508bcb85ade52": "4f006c05fbef08e83e6cf2f4c5d7ce79",
".git/objects/94/266cfcbfad0ce4a6ee8aad5f9272aefb4b16ff": "f4483f525f1e052fd161a6fae3415130",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/1a13d21fc9630cf97c741639b0d3b989a339fd": "58645e84c47ee20b1ab34e14169be1ba",
".git/objects/96/382e9147c6fa2595cf152e7c7904ccf81721ba": "fb257128661eb9ecd9d25e6e4fede241",
".git/objects/98/6396803f23b779c47dbeb93997b2ca8a4892f9": "d215e119de232710809a992b81d7f066",
".git/objects/9a/68ad15e8f74f594fafb34a1ba0f8acea3375d0": "ab729d558babb9c533e239e5df3f7376",
".git/objects/9c/a5ea77de25e9bb9d3321dd2128a896292779b6": "b714aca81ae2ea74e362fc12de5064e1",
".git/objects/9e/3f6b83caed01700991a25002e8a8163f0b3fde": "05ade82565ab091ae23e1c444c3fdfb6",
".git/objects/9e/4770495010616b30644db72d88ec34fe7e7ebd": "2f17e766c17448215feb8a33953ba3e3",
".git/objects/a0/1f57f2ee0bd1b4eabccb87ddc3cdb1cabfec6c": "e553f4ad92d8cd75e7140c9bc932ac9f",
".git/objects/a0/d148f2280e2dbe987d1eb77f2a123ac366a6c7": "fdae7bbbab7533c98ae1acbfd12ff3a1",
".git/objects/a1/0b511fb1f2252c0eafc60961e27de31a87ccfb": "e7769bf2143d4ac5ffc4bf5e975ce6f9",
".git/objects/a1/f472c74a3359628315648f85543d047dc8f68f": "744824e9bb819254d02db9e7f6acf497",
".git/objects/a4/9982eb3761809fe2a09411872debef4211d2e8": "b094c9c9158f488bdf778fa8a1ee2625",
".git/objects/a8/2b8ce3826b0e52aea218bd3bcd64cda3407e10": "36d970104823f679fde5c4db759c1560",
".git/objects/a8/88cb6a2c7855ab88e202d4692f95a039c9c8e8": "8de4f462bf3eec5c4b7c2066f122a9cb",
".git/objects/aa/627804461d8b2cc601db08b1533fa7c1c98fb0": "4ce68815b9171964a6feed880ace9a78",
".git/objects/ab/9ad6a778567d51c28ecae26901c482c506ded0": "3c372cedb2c2c81ec6baf9105c008eb4",
".git/objects/ab/9ebe7a059d2c3ff366512bbe78cf99e5c217f5": "6cee2dd31209072748fb0b0d9e835e33",
".git/objects/af/4d005ffe0b17ab0e29ea8ec14cdb7a26978970": "1b49d834e3c82f352da72c397989bdec",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/5d72290733ae18ec231804ed37f7bac5605063": "92b3fce02bb4da6ca6b53172da383fad",
".git/objects/b2/8d341e8ed297510dfb7f15d0ee0004836795ca": "59b9032c2a8a0c74f80a2c04febee90a",
".git/objects/b4/3d8801ef2ae38694662cfc538a3c73671898a9": "0d9ca7438f4472dabcd3d8e4ed670c40",
".git/objects/b4/c13835cea48250f66baabdf046bb02f1f90e17": "e4ebe744267857c470c05180a490669b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/c2acca1a81c7f0aba2a31efdc96ccf863becd9": "95cab70e0a7eac5547ed478f51c3b6b1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2758134cd63df0c291de085320c65abe96e775": "c10e0e29cdc504fdbf17f1dccfa4f435",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/83c74e6c662635e5214c3d72096fcaa8a6535f": "a5cc61dd1d876bfbfbb38b6d5aa29802",
".git/objects/bd/4bfdcb9f7a8ef6227030f8486056835040b910": "b1a50848ece2a1f64fc8a3c4e20b59a1",
".git/objects/bd/73da09de9d525297a113494ab8d5da6fbe65cb": "61b53807888c1540f4f7ff662999cf80",
".git/objects/c2/5652bbad207c7f6723e53994e084123f83f21d": "cffe14442d1270e45a2ff0983ee9b99a",
".git/objects/c2/5b1feb1841d89031fd115e960c43204e049b04": "ddc8939cb23c167b58f611659d5bbe52",
".git/objects/c5/10a0e6d49a22345843242b88447d8eecbd1ddf": "58ee0a40a11b9f0fa116f01a504c3128",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/8a58939990348c0be3ab94078d48dd4173779c": "800950030fb31395640c2dac5bd63f0b",
".git/objects/c6/d41610e571dabce5eebd2c6a1745db0ef1232d": "a2f0de65fd936751ae917ca86c7baac0",
".git/objects/c7/3e9a62207d824d6d1f6386d078442fee355af9": "14a640f5d957177764a418da9acccb9c",
".git/objects/c7/f0b32af78ef5c2317e43fe8a74195bdb59c380": "65e59bbef0f9d6038fb82d95a8ce4e60",
".git/objects/ca/caa553080c519197abc8c82aa8b6cfc2554a25": "e3e99d7c318e6bab7caff000d190598a",
".git/objects/cb/db6b616a6eaef2dd55a73ddf6ccd60cfa7d611": "59fb1fc4cd0531abe05c58ee418f1b0b",
".git/objects/cc/555cd2857c47cddbc3d9e39619bcf214c375dd": "a0859ea5376753db44dcab9a89450ae6",
".git/objects/d1/0680b23203847494b55393ab290d7fb20f40bf": "f6f2ef6c82c81ab00e73b7ee27c1bc1f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8d69d2881da106a17e62c043aa19abec6db367": "2dd42704c061c52e572c192dd4993f75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c543eba03dd72d2dbd9f0e2bc5bd172953f8f9": "7b3c536e980730bbfd141f651379bb25",
".git/objects/d8/507359662d002866adbe6cfa272a847f8afee6": "a485e04a2981e09a5b7bcd3b0ecd6a1e",
".git/objects/db/3e2c1d53ca19484df5db4720d0fd4bc568eb55": "5ad2027b0a4322c3963bac9aa1b6496a",
".git/objects/dc/acd2b0df1cf08994b647a64983bb7e44d134e3": "c3b47ddf7301567b95b71a57b22008b8",
".git/objects/dd/9a0db3465a0773ac5c8f2952d70838c67b644b": "9393b1228584a316b40b00f07e1a31be",
".git/objects/de/ef90a6d138fe31be8a3188d5bfb82661059ce8": "8e99f14e1a09a6cdaf93ff2b64fd0291",
".git/objects/df/a858bcfbd136054527452af5990555554de44f": "adf55fc712ef605260f455f8fe042c33",
".git/objects/df/b2eb5eb8613659e4765ea6bf504a905dc73ef9": "e8916710ff31aa5267f3eafd9d92b557",
".git/objects/e6/a276a0db8a2c80c277a0a480f5069fb1597de7": "091ccf9a3d601a78ba8d6562c2c37bfb",
".git/objects/e6/c5930e681c6188a4c5b03d8c94ffe8a510de1a": "c78a7c08330481af3d394be3487f06f0",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3cdc43e1ebc6ec3b25df476847e0519f4d199d": "a0ba9ad99afd5cd29077b9434073b34d",
".git/objects/ed/c91b3de0bbfce031721c092bb8be778878ac38": "c8807746a160996f657d1f91183a64e6",
".git/objects/ed/d18ee842c9b4a8eab3e700de12467478c66e6a": "c671c47bf0a29498e1f0f3bc419fdd7d",
".git/objects/ee/c8746873088e54140ecf6cfb92e9faec284e09": "7117d9f178dec27f7cda2ef4fe97d903",
".git/objects/ee/d130726dc4b9a9f1aa88108e6b7b3a5b713ee8": "a5a72054d10b54b61c9d54b19e269dd0",
".git/objects/ee/dcca951fdd65b8ebb60bbfcb6ae3ad1d6caa25": "9e0da4cfeb8487578230ad7e0d8f6a53",
".git/objects/ef/2026e8984297703b999d8332c8e428175870ea": "9f5d7d19a3883270d45b03e4bcf9ff5c",
".git/objects/f0/39c9016b0ebde46df5f20c4965a715960c39ab": "2ce81b52df4595ef6462f49505c28572",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/625118a218f9a22e09b42f9357d1bb5495f227": "5e75de6ef0c654d1ffddd9acbbcf5b52",
".git/objects/f7/5e08d79776dd5434efbcc343529e474e2ac84b": "e652324976fbe046a0b09bdad4660ef0",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fa/b3f4d5b71385325c1cf23f37331e2113615bb0": "f4ced3784a9a0c5f5aabf258e56bd3f8",
".git/objects/fd/e4060f1a3bb80eecff200dff14e815dd941757": "5e3e426c12d5db3b775a044cceff9bc9",
".git/refs/heads/main": "a1bba833cc0c3ab51f6768e6dc9aaf3f",
".git/refs/remotes/origin/main": "a1bba833cc0c3ab51f6768e6dc9aaf3f",
"assets/AssetManifest.bin": "68711b61bd13fe5fb007c6ae6f90f104",
"assets/AssetManifest.bin.json": "0682e3c97e08ccf59d9a2afa0a5fb9fc",
"assets/AssetManifest.json": "7d44a78d24a9aeab60e96fe0cc19ea6d",
"assets/assets/chair_professional_photo.jpg": "abee6c38df604bb937df514d275b3c1a",
"assets/assets/instagram_post_1.jpg": "ec60b34630c12d8d7c7f2f5b0013ba07",
"assets/assets/instagram_post_2.jpg": "084229a6c74d083fe9b95d21a83c4fa8",
"assets/assets/instagram_post_3.jpg": "8000cc582c4fdebf0f4ec26617356322",
"assets/assets/instagram_post_4.jpg": "b7abd0f8000c9edca4f4358eec32fb96",
"assets/assets/landscape_logo.svg": "758711f56abc0003ee36c868df5125a3",
"assets/assets/logo_name.png": "916ab5f63be2b070af0b09b39285b700",
"assets/assets/photo_book.jpg": "86e9432c41348b515aec98fcfc7a59c8",
"assets/assets/photo_pc.jpg": "d3bedf9db4320221b5678b8d216418c8",
"assets/assets/professional_photo.png": "6440cb422233ef42a0e8330df5906c16",
"assets/assets/testimonials_background.png": "9a5bc7799c073f1a345d154d9e1bff68",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "954ff2667411153f31112fe9e5ab7053",
"assets/NOTICES": "dd2a51fbb893f103187d18be7266f498",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57e071380cc6fa5e81d923820e496348",
"/": "57e071380cc6fa5e81d923820e496348",
"main.dart.js": "90c27d3d835cb99749d9599537b82e22",
"manifest.json": "46e4127f14b9a4d7fe2a66873c3d30e4",
"version.json": "b2475851872346176245ae1f3202a978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
