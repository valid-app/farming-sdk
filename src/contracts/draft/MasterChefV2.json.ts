export default {
"abi":[
{"inputs":[{"internalType":"uint256","name":"_rewardsPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"auth","type":"bool"}],"name":"AuthChanged","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Deposit","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"EmergencyWithdraw","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},
{"anonymous":false,"inputs":[],"name":"LogInit","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IERC20","name":"lpToken","type":"address"}],"name":"LogPoolAddition","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"}],"name":"LogSetPool","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"lastRewardBlock","type":"uint64"},{"indexed":false,"internalType":"uint256","name":"lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accRewardsPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Withdraw","type":"event"},
{"inputs":[{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"contract IRewardToken[]","name":"_rewards","type":"address[]"}],"name":"addRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256[]","name":"pids","type":"uint256[]"}],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"pending","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"uint128","name":"accRewardsPerShare","type":"uint128"},{"internalType":"uint64","name":"lastRewardBlock","type":"uint64"},{"internalType":"uint64","name":"allocPoint","type":"uint64"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"pools","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"rely","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardToken","outputs":[{"internalType":"contract IRewardToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"rewardsPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_who","type":"address"},{"internalType":"bool","name":"_allowed","type":"bool"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"int256","name":"rewardDebt","type":"int256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawAndHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"60806040523480156200001157600080fd5b5060405162002d3338038062002d33833981810160405260608110156200003757600080fd5b508051602082015160409092015190919060006200005d6001600160e01b03620000d316565b6001600160a01b03811660008181526020818152604091829020805460ff191660019081179091558251908152915193945091927f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d929181900390910190a25060018055600892909255600955600a55620000d7565b3390565b612c4c80620000e76000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806351eb05a6116100ee5780638d14e127116100975780639c52a7f1116100715780639c52a7f114610623578063d18df53c14610656578063d1abb9071461068f578063d936547e146106ce576101a3565b80638d14e127146105575780638dbdbe6d1461059257806393f1a40b146105d1576101a3565b8063613ec914116100c8578063613ec9141461046457806365fae35e1461050757806378ed5d1f1461053a576101a3565b806351eb05a6146103cf57806357a5b58c146103ec5780635eeb67101461045c576101a3565b806318fccc76116101505780632f940c701161012a5780632f940c701461034857806348cd4cb114610381578063509b6c3f14610389576101a3565b806318fccc76146102b35780631ab06ee5146102ec5780632b8bbbe81461030f576101a3565b80630ad58d2f116101815780630ad58d2f146102115780631526fe271461025257806317caf6f1146102ab576101a3565b8063022914a7146101a8578063081e3eda146101ef578063083c632314610209575b600080fd5b6101db600480360360208110156101be57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610701565b604080519115158252519081900360200190f35b6101f7610716565b60408051918252519081900360200190f35b6101f761071c565b6102506004803603606081101561022757600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16610722565b005b61026f6004803603602081101561026857600080fd5b5035610967565b604080516fffffffffffffffffffffffffffffffff909416845267ffffffffffffffff9283166020850152911682820152519081900360600190f35b6101f76109d5565b610250600480360360408110156102c957600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166109db565b6102506004803603604081101561030257600080fd5b5080359060200135610c92565b6102506004803603604081101561032557600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610e31565b6102506004803603604081101561035e57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff166110bf565b6101f76111f6565b6103a66004803603602081101561039f57600080fd5b50356111fc565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610250600480360360208110156103e557600080fd5b5035611230565b6102506004803603602081101561040257600080fd5b81019060208101813564010000000081111561041d57600080fd5b82018360208201111561042f57600080fd5b8035906020019184602083028401116401000000008311171561045157600080fd5b5090925090506115ba565b6101f76115ef565b6102506004803603602081101561047a57600080fd5b81019060208101813564010000000081111561049557600080fd5b8201836020820111156104a757600080fd5b803590602001918460208302840111640100000000831117156104c957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506115f5945050505050565b6102506004803603602081101561051d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661171f565b6103a66004803603602081101561055057600080fd5b5035611846565b6102506004803603604081101561056d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611853565b610250600480360360608110156105a857600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16611949565b61060a600480360360408110156105e757600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16611ba2565b6040805192835260208301919091528051918290030190f35b6102506004803603602081101561063957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611bc6565b6101f76004803603604081101561066c57600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16611d87565b610250600480360360608110156106a557600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff16611feb565b6101db600480360360208110156106e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16612354565b60006020819052908152604090205460ff1681565b60045490565b600a5481565b6002600154141561079457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155323314806107b657503360009081526002602052604090205460ff165b6107bf57600080fd5b6107c883611230565b6107d0612b40565b600484815481106107dd57fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff700100000000000000000000000000000000830481168486015278010000000000000000000000000000000000000000000000009092049091168285015288855260068352838520338652909252919092208151919350916108ac9161089b9164e8d4a510009161088e9189911663ffffffff61236916565b8161089557fe5b046123e5565b60018301549063ffffffff61245b16565b600182015580546108c3908563ffffffff6124da16565b816000018190555061090c8385600588815481106108dd57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16919063ffffffff61255116565b60408051858152905173ffffffffffffffffffffffffffffffffffffffff851691879133917f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec2132919081900360200190a4505060018055505050565b6004818154811061097457fe5b6000918252602090912001546fffffffffffffffffffffffffffffffff8116915067ffffffffffffffff7001000000000000000000000000000000008204811691780100000000000000000000000000000000000000000000000090041683565b60075481565b60026001541415610a4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260015532331480610a6f57503360009081526002602052604090205460ff165b610a7857600080fd5b610a8182611230565b610a89612b40565b60048381548110610a9657fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff70010000000000000000000000000000000083048116848601527801000000000000000000000000000000000000000000000000909204909116828501528785526006835283852033865290925291832082518154939550909392610b459264e8d4a510009261088e92911663ffffffff61236916565b90506000610b68610b6384600101548461245b90919063ffffffff16565b6125de565b6001840183905590508015610c4f5760035460005b81811015610c4c5760038181548110610b9257fe5b6000918252602080832090910154604080517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015260248201899052915191909216936340c10f1993604480850194919392918390030190829087803b158015610c1857600080fd5b505af1158015610c2c573d6000803e3d6000fd5b505050506040513d6020811015610c4257600080fd5b5050600101610b7d565b50505b604080518281529051879133917f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549181900360200190a350506001805550505050565b600080610c9d612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610d3257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b610d8d81610d8160048581548110610d4657fe5b600091825260209091200154600754907801000000000000000000000000000000000000000000000000900467ffffffffffffffff166124da565b9063ffffffff61265716565b6007819055508060048381548110610da157fe5b600091825260209182902001805467ffffffffffffffff9390931678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff9093169290921790915560408051838152905184927f942cc7e17a17c164bd977f32ab8c54265d5b9d481e4e352bf874f1e568874e7c928290030190a25050565b600080610e3c612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16610ed157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b6007544390610ee6908463ffffffff61265716565b60075560058054600181810183557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101805473ffffffffffffffffffffffffffffffffffffffff86167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051606081018252600080825267ffffffffffffffff808816602084019081528a8216948401948552600480548089018255935292517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b909201805493519451821678010000000000000000000000000000000000000000000000000277ffffffffffffffffffffffffffffffffffffffffffffffff95909216700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff949094167fffffffffffffffffffffffffffffffff000000000000000000000000000000009095169490941792909216929092179290921617905591546110879163ffffffff6124da16565b6040805186815290517f4710feb78e3bce8d2e3ca2989a8eb2f8bcd32a6a55b4535942c180fc4d2e29529181900360200190a3505050565b6002600154141561113157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001553233148061115357503360009081526002602052604090205460ff165b61115c57600080fd5b60008281526006602090815260408083203384529091528120805482825560018201929092556005805491929161119c918591849190889081106108dd57fe5b60408051828152905173ffffffffffffffffffffffffffffffffffffffff851691869133917f2cac5e20e1541d836381527a43f651851e302817b71dc8e810284e69210c1c6b919081900360200190a45050600180555050565b60095481565b6003818154811061120957fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60006004828154811061123f57fe5b60009182526020909120018054909150700100000000000000000000000000000000900467ffffffffffffffff164311156115b65760006005838154811061128357fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b1580156112f857600080fd5b505afa15801561130c573d6000803e3d6000fd5b505050506040513d602081101561132257600080fd5b50519050801561143557815460009061135a904390700100000000000000000000000000000000900467ffffffffffffffff166124da565b60075484546008549293506000926113aa917801000000000000000000000000000000000000000000000000900467ffffffffffffffff169061139e908690612369565b9063ffffffff61236916565b816113b157fe5b0490506113f6836113cd8364e8d4a5100063ffffffff61236916565b816113d457fe5b86546fffffffffffffffffffffffffffffffff1691900463ffffffff61265716565b84547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9190911617845550505b81547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004367ffffffffffffffff1602178255600480548391908590811061148b57fe5b60009182526020918290208354910180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92831617808255845467ffffffffffffffff70010000000000000000000000000000000091829004811682027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff90931692909217808455955478010000000000000000000000000000000000000000000000009081900483160277ffffffffffffffffffffffffffffffffffffffffffffffff9096169590951790915585546040805195820490921685529284018590529116828201525184917f0fc9545022a542541ad085d091fb09a2ab36fee366a4576ab63714ea907ad353919081900360600190a2505b5050565b8060005b818110156115e9576115e18484838181106115d557fe5b90506020020135611230565b6001016115be565b50505050565b60085481565b600080611600612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1661169557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b805160005b8181101561171a5760038382815181106116b057fe5b60209081029190910181015182546001808201855560009485529290932090920180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909316929092179091550161169a565b505050565b60008061172a612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166117bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155825190815291517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b6005818154811061120957fe5b60008061185e612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff166118f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b600260015414156119bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600155323314806119dd57503360009081526002602052604090205460ff165b6119e657600080fd5b6119ef83611230565b6119f7612b40565b60048481548110611a0457fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff8116825267ffffffffffffffff7001000000000000000000000000000000008204811683850152780100000000000000000000000000000000000000000000000090910416818401528784526006825282842073ffffffffffffffffffffffffffffffffffffffff871685529091529120805491925090611ab5908563ffffffff61265716565b81558151611afc90611aeb9064e8d4a510009061088e9088906fffffffffffffffffffffffffffffffff1663ffffffff61236916565b60018301549063ffffffff6126cb16565b8160010181905550611b4733308660058981548110611b1757fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692919063ffffffff61274a16565b60408051858152905173ffffffffffffffffffffffffffffffffffffffff851691879133917f02d7e648dd130fc184d383e55bb126ac4c9c60e8f94bf05acdf557ba2d540b47919081900360200190a4505060018055505050565b60066020908152600092835260408084209091529082529020805460019091015482565b600080611bd1612653565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff16611c6657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f417574683a204e6f6e20617574686f72697a6564206163636573730000000000604482015290519081900360640190fd5b611c6e612653565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611d0857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f417574683a2043616e6e6f742073656c662064656e7900000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526020818152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558051928352517f04621c7a72c7e94b37c72039e0f04559298838b45ae5af8bc47d1befd987d09d9281900390910190a250565b6000611d91612b40565b60048481548110611d9e57fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff70010000000000000000000000000000000083048116848601527801000000000000000000000000000000000000000000000000909204909116828501528885526006835283852073ffffffffffffffffffffffffffffffffffffffff89168652909252918320825160058054949650919492169288908110611e5557fe5b60009182526020918290200154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216926370a0823192602480840193829003018186803b158015611eca57600080fd5b505afa158015611ede573d6000803e3d6000fd5b505050506040513d6020811015611ef457600080fd5b5051602085015190915067ffffffffffffffff1643118015611f1557508015155b15611fa9576000611f3d856020015167ffffffffffffffff16436124da90919063ffffffff16565b90506000600754611f6b876040015167ffffffffffffffff1661139e6008548661236990919063ffffffff16565b81611f7257fe5b049050611fa483611f8e8364e8d4a5100063ffffffff61236916565b81611f9557fe5b8691900463ffffffff61265716565b935050505b611fe0610b638460010154611fd464e8d4a5100061088e87896000015461236990919063ffffffff16565b9063ffffffff61245b16565b979650505050505050565b6002600154141561205d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026001553233148061207f57503360009081526002602052604090205460ff165b61208857600080fd5b61209183611230565b612099612b40565b600484815481106120a657fe5b600091825260208083206040805160608101825291909301546fffffffffffffffffffffffffffffffff808216835267ffffffffffffffff700100000000000000000000000000000000830481168486015278010000000000000000000000000000000000000000000000009092049091168285015288855260068352838520338652909252918320825181549395509093926121559264e8d4a510009261088e92911663ffffffff61236916565b90506000612173610b6384600101548461245b90919063ffffffff16565b90506121b76121aa64e8d4a5100061088e87600001516fffffffffffffffffffffffffffffffff168a61236990919063ffffffff16565b839063ffffffff61245b16565b600184015582546121ce908763ffffffff6124da16565b835580156122ae5760035460005b818110156122ab57600381815481106121f157fe5b6000918252602080832090910154604080517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015260248201899052915191909216936340c10f1993604480850194919392918390030190829087803b15801561227757600080fd5b505af115801561228b573d6000803e3d6000fd5b505050506040513d60208110156122a157600080fd5b50506001016121dc565b50505b6122c0858760058a815481106108dd57fe5b60408051878152905173ffffffffffffffffffffffffffffffffffffffff871691899133917f8166bf25f8a2b7ed3c85049207da4358d16edbed977d23fa2ee6f0dde3ec2132919081900360200190a4604080518281529051889133917f71bab65ced2e5750775a0613be067df48ef06cf92a496ebf7663ae06609249549181900360200190a35050600180555050505050565b60026020526000908152604090205460ff1681565b600082612378575060006123df565b8282028284828161238557fe5b04146123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612ba86021913960400191505060405180910390fd5b90505b92915050565b80600081121561245657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b919050565b60008183038183128015906124705750838113155b80612485575060008312801561248557508381135b6123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612bc96024913960400191505060405180910390fd5b60008282111561254b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261171a9084906127db565b60008082121561264f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e7465676572206f766572666c6f7700000000000000000000000000000000604482015290519081900360640190fd5b5090565b3390565b6000828201838110156123dc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008282018183128015906126e05750838112155b806126f557506000831280156126f557508381125b6123dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612b616021913960400191505060405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526115e99085905b606061283d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166128b39092919063ffffffff16565b80519091501561171a5780806020019051602081101561285c57600080fd5b505161171a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612bed602a913960400191505060405180910390fd5b60606128c284846000856128cc565b90505b9392505050565b606082471015612927576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612b826026913960400191505060405180910390fd5b61293085612a7c565b61299b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612a0557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016129c8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612a67576040519150601f19603f3d011682016040523d82523d6000602084013e612a6c565b606091505b5091509150611fe0828286612a82565b3b151590565b60608315612a915750816128c5565b825115612aa15782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612b05578181015183820152602001612aed565b50505050905090810190601f168015612b325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60408051606081018252600080825260208201819052918101919091529056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e080aaf29459c47fba792a71babbeb69cec19ba24ea3d7c810401880f2289f8164736f6c634300060b0033"
}