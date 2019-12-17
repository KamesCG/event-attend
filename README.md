# EventAttend

A Ethereum ticketing system built with WalletConnect.

Network: Rinkeby

Libraries:
- WalletConnect
- Kickback Contracts
- 3Box (Coming Soon)

Example: https://event-attend.netlify.com/

# Known Bugs

### Gas Allowance
Due to the internal contract calls by the Kickback contracts the network does not accuarely measure gas costs. Causing WalletConnect to sporadically fail due to gas limit issues.

I have been able to purchase a ticket using WalletConnect, but it only works sporadically.

```
Error: gas required exceeds allowance (9500000) or always failing transaction
    at index.js:13143
    at Array.forEach (<anonymous>)
    at t.trigger (index.js:13141)
    at r.<anonymous> (index.js:12871)
    at index.js:6408
    at Object.next (index.js:6421)
    at s (index.js:6308) ""
```
# Screenshots

![](https://imgur.com/yrSDg90.png)
![](https://imgur.com/bbDKPLk.png)
![](https://imgur.com/DjHBJjH.png)
![](https://imgur.com/cMumoj7.png)

