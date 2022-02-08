import React from "react";
import {
  FAQContainer,
  KeyInfoContainer,
  KeyInfoTitle,
  KeyInfoContent,
  FAQsContainer,
  FAQsTitle,
  FAQsSubTitle,
  FAQsContent,
  PolygonTitle,
  PolygonContent,
} from "./index.styled";
import profile from "../../assets/nextimg/profile.png/256/75d76d.png";
import logo1 from "../../assets/nextimg/bwpunks.png/256/75201f.png";
import logo2 from "../../assets/chubbies63a9.gif";
const FAQ = () => {
  return (
    <FAQContainer>
      <KeyInfoContainer>
        <KeyInfoTitle>Key Info</KeyInfoTitle>
        <KeyInfoContent>
          <li>
            <span>Sale Date:</span> September 18, 2021
          </li>
          <li>
            <span>Sale Date:</span> September 18, 2021
          </li>
          <li>
            <span>Maximum number of tokens:</span> 20,000
          </li>
          <li>
            <span>Tokens withheld from sale:</span> 500 (with giveaways and
            airdrops)
          </li>
          <li>
            <span>Price per token:</span> 100 MATIC (~0.039 ETH with negligible
            gas fee)
          </li>
          <li>
            <span>Token type:</span> ERC-721
          </li>
          <li>
            <span>Blockchain:</span> Polygon
          </li>
          <li>
            <span>Art file hosting:</span> IPFS
          </li>
          <li>
            <span>Metadata hosting:</span> IPFS and On-chain
          </li>
          <li>
            <span>Royalty fees:</span> 10% (lowered to 6% if #19999 is sold)
          </li>
          <li>
            <span>Number of traits:</span> 7
          </li>
          <li>
            <span>Number of attributes:</span> 84
          </li>
          <li>
            <span>Licensing:</span> <a href="/terms">non-exclusive license</a>{" "}
            for both personal and/or commercial use
          </li>
          <li>
            <span>Smart contract:</span>{" "}
            <a
              href="https://polygonscan.com/address/0x44F01563Dbcb67170a071Ea014Af58d2032eFF61"
              target="_blank"
              rel="noreferrer"
            >
              contract
            </a>
          </li>
        </KeyInfoContent>
      </KeyInfoContainer>
      <FAQsContainer>
        <FAQsTitle>FAQs</FAQsTitle>
        <FAQsSubTitle>Polygon</FAQsSubTitle>
        <FAQsContent>
          <li>
            <PolygonTitle>What is Polygon?</PolygonTitle>
            <PolygonContent>
              Polygon is Layer 2 scaling solution for Ethereum and a fantastic
              choice for our NFT. Polygon is very fast and scalable, enabling
              gas fee of ~$0.01 or less, which is crucial for this project as we
              do 10X more on the contract compared to other projects.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>How do I get started?</PolygonTitle>
            <PolygonContent>
              Get a{" "}
              <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                Metamask
              </a>{" "}
              chrome extension.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>How do I connect to the Polygon Chain?</PolygonTitle>
            <PolygonContent>
              If the Button on the Navbar doesn't help you add the Polygon Chain
              automatically for you, then you might need to follow{" "}
              <a
                href="https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask/"
                target="_blank"
                rel="noreferrer"
              >
                these steps
              </a>{" "}
              to add the Polygon network to your Metamask wallet.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>WHow do I get MATIC or Polygon ETH?</PolygonTitle>
            <PolygonContent>
              <a
                href="https://coinmarketcap.com/currencies/polygon/"
                target="_blank"
                rel="noreferrer"
              >
                MATIC
              </a>{" "}
              is the coin required to pay for gas fee and also buy and combine
              BittyBots. You can watch a{" "}
              <a
                href="https://www.youtube.com/watch?v=LAv_wpDVLlM"
                target="_blank"
                rel="noreferrer"
              >
                Youtube Tutorial
              </a>{" "}
              here.
            </PolygonContent>
            <PolygonContent>
              It's a little complicated but please bear with us. First, you need
              to understand that ETH and MATIC can be on different chains. In
              order to purchase BittyBots on this site, you need to have{" "}
              <strong>MATIC on the Polygon chain</strong>. Once your MATIC is
              only Polygon, the gas fee becomes negligible.
            </PolygonContent>
            <PolygonContent>
              <h4>Method 1 (two gas fees)</h4>
              <ul>
                <li>
                  1. Get MATIC on the Ethereum mainnet using{" "}
                  <a
                    href="https://app.uniswap.org/#/swap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Uniswap
                  </a>{" "}
                  or some other services like Coinbase. This might require a gas
                  fee.
                </li>
                <li>
                  2. Go to the{" "}
                  <a
                    href="https://wallet.polygon.technology/wallet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Polygon Wallet
                  </a>{" "}
                  and use "Move Fund from Ethereum to Polygon" to move your
                  MATIC from Ethereum to Polygon. This will also require a
                  one-time gas fee.{" "}
                </li>
              </ul>
            </PolygonContent>
            <PolygonContent>
              <h4>Method 2 (one gas fee)</h4>
              <ul>
                <li>
                  1. Bridge your ETH to Polygon using the{" "}
                  <a
                    href="https://wallet.polygon.technology/wallet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Polygon Wallet
                  </a>
                  . This will require a gas fee.
                </li>
                <li>
                  2. Swap the ETH with MATIC on a service like{" "}
                  <a
                    href="https://quickswap.exchange/#/swap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    QuickSwap
                  </a>
                  . You will need a little bit of MATIC to pay for the gas fee
                  for this swap and you can get it for free from this{" "}
                  <a
                    href="https://macncheese.finance/matic-polygon-mainnet-faucet.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Faucet
                  </a>{" "}
                  (0.003 MATIC per day).
                </li>
              </ul>
            </PolygonContent>
            <PolygonContent>
              <h4>Method 3 (free)</h4>
              <ul>
                <li>
                  1. If you're only looking to use your free combine, you can
                  get some MATIC to perform the operation for free from this{" "}
                  <a
                    href="https://macncheese.finance/matic-polygon-mainnet-faucet.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Faucet
                  </a>{" "}
                  (0.003 MATIC per day).
                </li>
              </ul>
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>
              My wallet is connected but I don't see my bots.
            </PolygonTitle>
            <PolygonContent>
              As this site fires a lot of web3 requests, sometimes the RPC node
              will be congested. You can either check back later or{" "}
              <a
                href="https://docs.dfyn.network/guides/changing-polygons-rpc-endpoint-on-metamask"
                target="_blank"
                rel="noreferrer"
              >
                change your RPC node
              </a>{" "}
              to a different one.
            </PolygonContent>
          </li>
        </FAQsContent>
        <FAQsSubTitle>General</FAQsSubTitle>
        <FAQsContent>
          <li>
            <PolygonTitle>What's an NFT?</PolygonTitle>
            <PolygonContent>
              An NFT, or “non-fungible token”, is a new way of collecting art.
              Compared to traditional art, it uses crypto technology and allows
              everyone to publicly see each others' collection. Each NFT has a
              programmable smart contract behind it that allows creators to do
              creative things such as airdropping, breeding, burning, or
              generating new tokens.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Why get a BittyBot?</PolygonTitle>
            <PolygonContent>
              <ul>
                <li>You like the GIF art and the BittyBots project</li>
                <li>Unique deflationary combine mechanism</li>
                <li>
                  Nonexclusive license with unlimited personal and/or commercial
                  use
                </li>
                <li>
                  Guaranteed access to our future projects (as proven with
                  Chubbies to BittyBots ownership)
                </li>
              </ul>
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>
              Other collections feature 10k or fewer tokens. Isn't 20k too many?
            </PolygonTitle>
            <PolygonContent>
              We wanted to create at least 10k tokens to reward the owners of
              the 10k Chubbies project. With the addition of the combination
              mechanism, some BittyBots will be burned and the collection is
              deflationary. This will make certain bots rarer than others, the
              collection size smaller and smaller, and in theory more expensive
              over time.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Are BittyBots good investments?</PolygonTitle>
            <PolygonContent>
              Months of hard work have been put into this project—various
              original art concepts, solidifying a unique combination mechanism,
              and much more—and we are constantly brainstorming ways to provide
              more value for BittyBots owners. We wish we could say “the price
              will go to the moon!” but the truth is that the NFT market is
              volatile and new NFTs are coming out every day. We are not
              financial advisors and cannot predict the future price of our
              project. We believe in BittyBots and have plans to continue
              developing more utility. Ultimately, if you like the art then
              there's no loss in collecting what you enjoy.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>What about profile pictures?</PolygonTitle>
            <PolygonContent>
              <img src={profile} width="100px" height="100px" alt="profile" />
              <br />
              We will be providing a profile image png in the bot's detail page
              at launch. It will look like the png above.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Future Plans</PolygonTitle>
            <PolygonContent>
              We believe in the smart contract aspect of the project and want to
              do cool things with it. We plan to deliver the combination
              mechanism and profile picture generator upfront. If BittyBots does
              well, we plan to explore a Bomberman-like game with abilities
              directly related to your bot's traits. Please note that we are a
              team of 2 and are working hard to build for this project.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>What can I do with my BittyBots?</PolygonTitle>
            <PolygonContent>
              You are free to use them for personal and/or commercial purposes
              under this <a href="/terms">non-exclusive license</a>.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Why I don't see my bot right away?</PolygonTitle>
            <PolygonContent>
              Due to the fair and transparent on-chain generation mechanism,
              BittyBots are first generated on-chain. You can view your bot's
              metadata right away in the <a href="/collection">My Bots</a> page.
              Our server needs to listen to the Mint event on the chain,
              generate the respective images (gifs, pngs, profile pictures) and
              upload them. This will take longer in the beginning as we are
              still optimizing the server but will take shorter (within 30
              minutes) after we set up everything.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>This is cool. How do I get involved?</PolygonTitle>
            <PolygonContent>
              Join our Discord to discuss with us.
            </PolygonContent>
          </li>
        </FAQsContent>
        <FAQsSubTitle>Airdrops</FAQsSubTitle>
        <FAQsContent>
          <li>
            <PolygonTitle>How do I claim free BittyBots?</PolygonTitle>
            <PolygonContent>
              <div>
                <img src={logo2} width="100px" height="" alt="logo" />
                <img src={logo1} width="100px" height="" alt="logo" />
              </div>
              There's nothing to do! Nearly 10000 BittyBots have ALREADY been
              airdropped to{" "}
              <a href="https://chubbies.io" target="_blank" rel="noreferrer">
                Chubbies
              </a>{" "}
              and{" "}
              <a href="https://bwpunks.com" target="_blank" rel="noreferrer">
                BWPunks
              </a>{" "}
              owners.{" "}
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Will rare Chubbies get rare BittyBots?</PolygonTitle>
            <PolygonContent>
              Godmode Chubbies (#0, #9999) will be guaranteed a rare BittyBot as
              a token of appreciation. All other Chubbies are treated the same.
            </PolygonContent>
          </li>
        </FAQsContent>
        <FAQsSubTitle>Combine</FAQsSubTitle>
        <FAQsContent>
          <li>
            <PolygonTitle>How do I "combine" my BittyBots?</PolygonTitle>
            <PolygonContent>
              You can head over to the Combine page (when launched) and choose
              between 2 to 5 of the BittyBots you own, at a time. You will be
              able to customize a new BittyBot by selecting your favorite parts
              from the bots you have selected. This action cannot be reverted
              and the selected BittyBots will be burned.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>Can I combine multiple times?</PolygonTitle>
            <PolygonContent>
              Combining selected bots is a one-time irreversible operation. The
              BittyBots used to combine will be burned to mint the new bot. You
              can combine bots up to 3 times.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>
              Can I combine into a BittyBot that already exists?
            </PolygonTitle>
            <PolygonContent>
              All BittyBots are unique. So you cannot create a BittyBot that
              already exists. The combination used for detecting duplication is
              as follows: Helmet, Face, Body, Arm, Engine.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>What does it cost to combine?</PolygonTitle>
            <PolygonContent>
              The first combine is free of charge. The second combine will cost
              100 MATIC and the final combine will cost 200 MATIC. The second
              and third combine are only there for people who want to build the
              strongest bot.
            </PolygonContent>
          </li>
          <li>
            <PolygonTitle>When will the Combine feature be ready?</PolygonTitle>
            <PolygonContent>
              We will deliver this feature immediately instead of including it
              as a roadmap activation! If there are no technical difficulties
              (finger crossed), we plan to enable it as soon as reveal.
            </PolygonContent>
          </li>
        </FAQsContent>
      </FAQsContainer>
    </FAQContainer>
  );
};

export default FAQ;
