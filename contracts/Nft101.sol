// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract Nft101 is ERC721, ERC721Burnable, Ownable {
//     using Counters for Counters.Counter;
//     Counters.Counter private _tokenIdCounter;

//     constructor() ERC721("Nft101", "N101") {}

//     function safeMint(address to, bytes memory _json) public onlyOwner {
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(to, tokenId, _json);
//     }

//     function _burn(uint256 tokenId) internal override(ERC721) {
//         super._burn(tokenId);
//     }
// }