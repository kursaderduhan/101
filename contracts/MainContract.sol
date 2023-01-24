// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;
// import "./YuzbirToken.sol";
// import "./Items.sol";
// import './Nft101.sol';
// contract MainContract {

//     Yuzbir public yuzbir;
//     Items public items;
//     Nft101 public nft101;
   
//     constructor(address _yuzbirAddress, address _itemsAddress, address _nftAddress) {
//          yuzbir = Yuzbir(_yuzbirAddress);
//          items = Items(_itemsAddress);
//          nft101 = Nft101(_nftAddress);

//          addItem("pen", 0, 2000000000000000000);
//          addItem("eraser", 1, 1000000000000000000);
//          addItem("brush", 2, 2000000000000000000);

//     }

//     struct User {
//         uint ID;
//         address userAddress;
//     }

//     struct Item {
//         uint ID;
//         string name;
//         uint price;
//     }
    
//     // Faucet için kullanılan yapı

//     mapping(address => uint) public lockTime;

//     function faucet (address _userAddress) external payable {
//         uint256 amount = 5000000000000000000;
//         require(block.timestamp > lockTime[_userAddress], "lock time has not expired. Please try again later");
//         //mint tokens
//         yuzbir.mint(_userAddress, amount);
//         //kullanıcı çekim yaptığı andan itibaren bir gün sayıyor
//         lockTime[_userAddress] = block.timestamp + 10;
//     }
//     function newOwner(address _newOwner) external {
//         yuzbir.transferOwnership(_newOwner);
//     }

//     // kullanıcının balance'ini görmek için kullanılan fonksiyon
//      function userBalance(address _userBalance) external view returns(uint256){
//          return yuzbir.balanceOf(_userBalance);
//      }

//     mapping(address => User) public users;

//     // tokenları burn etmek için 
//     function burn(uint256 _amount) public {
//         yuzbir.burnFrom(msg.sender, _amount);
//     }

//     // itemleri satın almak için kullanılan fonksiyon
//     function buyItem(uint _id) public {
//         yuzbir.burnFrom(msg.sender, 1 * idToItems[_id].price);
//         items.mint(msg.sender, _id, 1, "");
//     }
//     // Bütün itemleri aynı anda almak için kullanılan fonksiyon
//     function allBuyItem() public {
//         yuzbir.burnFrom(msg.sender, 5000000000000000000);
//         items.mint(msg.sender, 0, 1, "");
//         items.mint(msg.sender, 1, 1, "");
//         items.mint(msg.sender, 2, 1, "");
//     }

//     // nft oluşturmak için kullanılan fonksiyon bu fonk. ile elindeki tüm itemmleri yakıyoruz 
//     function createNft(bytes memory _json) public {
//         items.burn(msg.sender, 0, 1);
//         items.burn(msg.sender, 1, 1);
//         items.burn(msg.sender, 2, 1);
//         bytes memory jsonBytes = abi.encodePacked(_json);
//         nft101.safeMint(msg.sender, jsonBytes);
//     }


//     // itemleri oluşturmak için kullanılan yapı
//     mapping(uint => Item) public idToItems;
//     function addItem(string memory _name, uint _id, uint _price) private {
//         Item memory item;
//         item.ID = _id;
//         item.name = _name;
//         item.price = _price;
//         idToItems[_id] = item;
//     }
// }