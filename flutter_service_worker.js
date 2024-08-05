'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d7e3f790e56a6784b897cc488b7606a9",
".git/config": "008b8216f231310d3728a202b2c142b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fc085514e2d9e6580d3546d2b9aac552",
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
".git/index": "3fe1f0fc100d10660918af878bcada08",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1122758c84b74ba25d51a0c0edac41a",
".git/logs/refs/heads/main": "72709a0b22e537b35f49c12957c3da9e",
".git/logs/refs/remotes/origin/main": "917f2303721c9cea61c36d667620dcc8",
".git/objects/00/63de243f96995b39f96c10bfb3408d990906e6": "f9e2e15380093b32a127510acc0ea912",
".git/objects/01/063c9b131477fabfd2d7020b570da82ee7881f": "161a79218d55d8d8adf0ce7dfdadc25c",
".git/objects/04/6856d6cea1100e072106fff43818fb240554c9": "a1f82b5ad71cb0e60710d6373072e60e",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/4d8b723cde7b3d1f1ff4863e3ac67a0f6bd7a0": "2f0fe399ecc17516376ae7c3ca0f839f",
".git/objects/0d/fa202894965d53072b49c80595f7aa0c03ea20": "f4b38f390399efc4d70d1d5d930772de",
".git/objects/10/e4f137b3af0448d023faa63b7b55456ba4b93f": "607cbd6e3a06bd7cbc0906fbfac39759",
".git/objects/11/e5854591676051f5cbe199206459563267691e": "bfa351e1a98040c05491c2fa8abfb9a9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/e0aa340890c29f7c69037002fba0c3b4ef0068": "11bb15650ceba5d763da0cc8b4e8403b",
".git/objects/1c/1ceb11ee3cd87a632bdf302f007eb6dce49f58": "01045686ff72c5449051a9684009ffe2",
".git/objects/1c/b19f39c146f52ce014bc9c6226bd57b0ff372b": "5dec1a2b84808053dfdfda93ede5a144",
".git/objects/1e/c771029d4a06e299f3b71224c92a274a87ebdc": "315766e63c814fc352982ea9a7c8265e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/8888fa447496752e01cf2165d79c008afd96eb": "d5144a6ace588e8f923afbfc0c56ebbf",
".git/objects/25/2d3684f6ce3635eb53a52f2457c6ce41bfb773": "1f68a5b78caec1f365c004fc3e76a720",
".git/objects/30/8de908b55594ee776905c3647996cbbe2946fd": "0944533a70bdae0a10d471b4bde258d4",
".git/objects/37/a48fbb7e2c7b7c2580feaa56b750abc8e9933e": "99ccd91577e2599eb152d2b42438fb12",
".git/objects/37/c8144186e58527304f78197824da5891ebb7af": "4d864901b0c621e49d13d8426e4881bf",
".git/objects/39/66c68bf6f0510264e67277f2bd74d484876c27": "5cb7816db26d8013c903a16026986e57",
".git/objects/39/d77598b6aa7509f4277ee27738148965ea0859": "e76c1cd66c1bee6900d78a52b833e718",
".git/objects/3a/12f16dda96a8d161a300e557f510bbd59551fb": "977b2868b3600aa12fa9c3c8c72e8e4d",
".git/objects/3c/10bd088262194bf799cf3f481f1c0dd33124fd": "0e95aac12090f48b251c9c031a27c877",
".git/objects/3c/1d2f070d09b3cc49c6f646478e1d4e1bbed35a": "979058cff22cb4c34a0822ed89449487",
".git/objects/3f/3338ff97025c3bdd416f912be1b653af85a386": "c0425316d91761f8fc06da5aa4a13780",
".git/objects/41/191a563f2344dde27401af3b3c39ba10acae61": "82dd10e670c37eb14c74ec142d11fbce",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/44a082b1752dedc483cc8c6661cd89d2ff2089": "d3dd43a533c673b56e3e68344c609a21",
".git/objects/4a/9c7d74b20aa85c9f5dd30cb14c66f2237628f4": "2a141a377a16bea4b7e241ac19e5fcfe",
".git/objects/4b/2f33fc058af424679ed4847eb35f3ca68e5a1e": "fa6fc4811770f50dd5e3be5db03674c6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/362f4baf9f5f2a0ad5070cc680c1bb4e49b0fb": "5994ff4cc650921df67f643f9997ccf3",
".git/objects/51/47eeb120abe9fc79916f6417a5deeb2c322fd0": "16135ba5827aef1a8bd14e179ec15ab4",
".git/objects/52/d43beda22069eb5f87a94e27518a9fafd244ed": "a9941d04eb11a37cc551429d57f3800e",
".git/objects/53/58e38e47d9a7bfc9b21a864a0b348087582c34": "3a13ed6788269b377649748fb676d821",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/df8feb29cee3865b125a008f7372512ec8940c": "6f9d3848a53b5ba0b6c67ebad9f2913a",
".git/objects/58/516ad3f2c2e959463dc6769886151e251ef0ed": "753cab21c9ab10c88da88d501f3a4f0e",
".git/objects/58/fc94ba737aa7f5a370080d166ef4fee33a48ac": "a3a2004d1534a7800e48248dd120592c",
".git/objects/59/9d1f129a3f1f408f096297094283e111b7c32c": "baea2013f4cab733c87e29585354b6f2",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/341689e02430ca3dfb4cb2168608178d7f5603": "b362e66e633bcfad242612a33e84b712",
".git/objects/61/2b8ee5baa4d38d7670371df620c735331791b0": "448939a2db467d9b6d3983d31084d80d",
".git/objects/62/1e2385eb249cc876d6f3606cd04153dd721d46": "12141039083b97cc2c579f01a1a03c47",
".git/objects/63/6edd0c617ca2a4df254329dc2b1632276a7626": "cda97f6aa5b2b90a3791e485344d6ec9",
".git/objects/6a/b0d4ad889cd4c1a768c2301ddefcbed5434da7": "2a2186d8d337fac1a7704f40ca57697e",
".git/objects/6b/9227ab0c9f56f290f64f9595c5a8aff976ff15": "5b6a15c6a22d98249db5e1e833ebbd23",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/b27ea84d2669d74885c9ca390e597d6e7310c5": "27a0ad0316b9f037b49a31fb007fa2e8",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/75/6b1e2acc625451018f87436119e70f89cf2ccb": "4c47924901fb5fc4572b3338f8fb3150",
".git/objects/76/3ef9603905ed416d1d65866e160be00cde2f65": "2bc2481ad4da07d8c52cc29da6390312",
".git/objects/77/0264391db215cb20e17572de2f65ab93b98293": "e210f425e9030a98a3d64b15507e51dc",
".git/objects/7d/0461213d96296670119f85dd0682b28cc40ce3": "28b03bcd5cc22684833b2da2081b2f88",
".git/objects/7e/5b647efa06593a6662e65202cd42fbfc5a6f91": "58cb180455f69e7a0be15361d4db83d2",
".git/objects/7f/ef6aa309c7479604f515da5c4fcd100e547c95": "e5e7e51f838c67865eba1676fdfd80fe",
".git/objects/81/1e23b8bcde68523f1f4fd91abc51a0eb32d3a3": "f11a1ed770593d35191c2940d91a0a8e",
".git/objects/82/3683bd6856107b7fa0b5025a54fecd4ed3d229": "4b6cb298dce2f1821cbcd7331d3da588",
".git/objects/82/874eb05525c789208450e7f4cc9acb0bf8cdd1": "5e2bdae6d24b2146e5e70ffc4cb6b2f0",
".git/objects/82/ffe5f77c6d3533a832e7d9215157251dabe012": "b08c0d7d630ca6235b331c30287d38fe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/b559d9c1fd2c163a0e664b1e3a14a22bfa69b4": "fb5c78b7b1e817c583b8fb7e0b7f5e7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d48ca2d936658c5cc73d8edb92413b935a58af": "74464defc9c8ca6bcaa7c8eb3551c121",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/594c1c061d81a5ac7f50d16a256c0f17339dc9": "66844a1048b9b9be63674d7bd3a7f541",
".git/objects/8d/bc2a0c9cc675e47d2678100c054896d53b626d": "2628cc7e6bba77a6a1e0b340dabce3e8",
".git/objects/91/3c67dd0c22e78f7284889ad7344c4f29469aef": "ec0ca256caa0325f4ab5190dd71891ae",
".git/objects/93/6b5afded78f906a15c20d3cd09fdd8bd6876cc": "aa9a8375b0d51946f4d05b2c5987a188",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/1a13d21fc9630cf97c741639b0d3b989a339fd": "58645e84c47ee20b1ab34e14169be1ba",
".git/objects/97/178b418a9f524d596b9790e30af9775635674f": "a5ea48d582273bd94446e72ff5369631",
".git/objects/99/f94aa24fcaacce51be42040a6f058801adee9e": "558cfbff984dbc6faa84693db4dd7d45",
".git/objects/9c/5cafdec211c1f7671de62439006ee475ea81a8": "af918d5166dce3c69331f8080416be44",
".git/objects/9f/6764d5abbb1e23123ff2005cdc98e5c7c51e91": "16717ce80fc158ab257b5579d96871f9",
".git/objects/a0/1f57f2ee0bd1b4eabccb87ddc3cdb1cabfec6c": "e553f4ad92d8cd75e7140c9bc932ac9f",
".git/objects/a1/5539d23b5c46166093b24eecaac7ec99f72b77": "54899fc42886fb7435e290b947ddcb88",
".git/objects/a4/9982eb3761809fe2a09411872debef4211d2e8": "b094c9c9158f488bdf778fa8a1ee2625",
".git/objects/a4/9df2effd1da95f411f5f7b8fc0b6d2b40a5252": "3d8d575746957e39da5bc87f754c1638",
".git/objects/a8/2b8ce3826b0e52aea218bd3bcd64cda3407e10": "36d970104823f679fde5c4db759c1560",
".git/objects/a8/88cb6a2c7855ab88e202d4692f95a039c9c8e8": "8de4f462bf3eec5c4b7c2066f122a9cb",
".git/objects/aa/627804461d8b2cc601db08b1533fa7c1c98fb0": "4ce68815b9171964a6feed880ace9a78",
".git/objects/ab/6f3ed9e89f6875cda4153edcaa96021608baf1": "42fd7ff031b57a597d2fe7ff91df0f77",
".git/objects/ab/9aca747000bfee7a43ae22630ff4625e5575b1": "047599ce7b153fd5d33b3b254ffbe66c",
".git/objects/af/684d5b6c9df89b2f604f61a8e8200acd91d733": "bf0e5141be22199a999599cdbb818a0e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/b4e58be30568892e78642e12e7b48d52e9cba0": "f8ca245a2a23b13b0f3ac5bfd8458bb4",
".git/objects/b3/61bd8d88c083316ce5f312a4671ebdf4246a50": "e8503c1e0596dbe4bb89a1a8eb42b34d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/f6d11b6790c80a10a437eedbcb95516ef4deec": "a71de3b3da87bce113adae415e919db7",
".git/objects/b6/5b0fc52aec748957b46b7e0b3c6bd5678f5a58": "e0eb0a213b0290471a614cd3a1e5f1c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/b53384971159e8bdaa21f856d4ac74ed57bcde": "f31d6f318651149f397d4fe46a10be29",
".git/objects/bb/83c74e6c662635e5214c3d72096fcaa8a6535f": "a5cc61dd1d876bfbfbb38b6d5aa29802",
".git/objects/bd/4bfdcb9f7a8ef6227030f8486056835040b910": "b1a50848ece2a1f64fc8a3c4e20b59a1",
".git/objects/bd/bfb0167c8c1089760d9639ae0487820521dac9": "0bedc2c7a3c73e8a2f12d5eae84d67e9",
".git/objects/be/42e74bb65f3e7e60687e3574b8dd4ca4b240c1": "4c354f0a4bf9a9bea5e26d8fb873cbc1",
".git/objects/c0/d7e9a3bdeebbf4079a7cc5c3da593d78bfa6fe": "ced6df53332c1406fb7df5039428ece9",
".git/objects/c1/d3d39faaf841588aaf61532df3cdfb1c2f9bc1": "58fb764c3cc042c3acb64084a23466e7",
".git/objects/c1/f7730d1766d8c7befaac3bd49531daf8972590": "dae38f662370d7243028d59cd9e7ff2d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/642c313051153df4fed17be520667ea0c8bf8e": "243e81d5f3a8b3c28049913ad4d8b2c7",
".git/objects/c7/feef047443e8e5d8989f68fd85beced3570ce9": "5ee1ea802d00769f83cf6cfdb3833126",
".git/objects/c8/bded9c174f97d3141ae7191b9dd4f8848e91cb": "1a0442260f3d1f8011b7e2078b826fd5",
".git/objects/cc/555cd2857c47cddbc3d9e39619bcf214c375dd": "a0859ea5376753db44dcab9a89450ae6",
".git/objects/ce/1bfcc0057c2e4a62033ba9b243686418d64812": "aa5e982c0fbf963b5be857b89d2f4589",
".git/objects/d1/0680b23203847494b55393ab290d7fb20f40bf": "f6f2ef6c82c81ab00e73b7ee27c1bc1f",
".git/objects/d1/d1fa2a083abd1877d34e0e6949f93d5352c689": "f2290416730c2f04d8663256870b002f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8d69d2881da106a17e62c043aa19abec6db367": "2dd42704c061c52e572c192dd4993f75",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/acd2b0df1cf08994b647a64983bb7e44d134e3": "c3b47ddf7301567b95b71a57b22008b8",
".git/objects/de/ef90a6d138fe31be8a3188d5bfb82661059ce8": "8e99f14e1a09a6cdaf93ff2b64fd0291",
".git/objects/df/cf111941c0d6271efe702ad7dae3a36ee7c75c": "747f27e94d4f98c70fefe4ebd6a298f7",
".git/objects/e2/52dcedad0183049cc687c268dd703eea1dbbb3": "f73cb0ae31894c56ff66272379f1c6df",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/6dcc351a62f4b83fa62de117fb6bd26541c566": "c6f61322f402c78af260babae28faa95",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/39c9016b0ebde46df5f20c4965a715960c39ab": "2ce81b52df4595ef6462f49505c28572",
".git/objects/f0/ad8c53775013f994332aed090a4c81386c8678": "149ae12beacd5fb86aa5b44141fa4450",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c888a4e370ac8b51632b4e17af87d096aae42e": "e2b929514b6b8edd49a28ab07ceace90",
".git/objects/f5/70ee5d7c4de56c4e011bfa07c1e8c646f37d78": "ded1082e0adedf7c479302bfd475a491",
".git/objects/f7/4b8a623e339c569706b3656fd072016fa28df2": "71c74ab55afd0d0acf3bedf65afe116d",
".git/objects/f7/4c8e5736394b42e337ef2b340fa5544f702136": "260a2554b65f8f7549fa1a23ce8ea3c9",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/ff/28c72de3bdf823bf706d9cfe62c8753cfaf69a": "7cb3b625c3d034770fef4cf185150d7e",
".git/ORIG_HEAD": "173693f6e2222badc52ab4c3ab18ae38",
".git/refs/heads/main": "99fc01777c0d635604b2aad30bc37848",
".git/refs/remotes/origin/main": "99fc01777c0d635604b2aad30bc37848",
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
"assets/NOTICES": "1de8e2f706b6c15b826c7cd177d2c6a3",
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
"CNAME": "932836f8cc04a0e753158bb3025b5a4c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cfb1e11c2dae4f933e407f91a305126",
"/": "8cfb1e11c2dae4f933e407f91a305126",
"main.dart.js": "4636c72d46b05fb862f7ef513059c227",
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
