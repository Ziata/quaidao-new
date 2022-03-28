import styles from "./GovernanceMain.module.css";

export const GovernanceMain = (props) => {
  return (
    <div className={styles.governance_main}>
      <div className={styles.section_grey}>
        <div className='container'>
          <h4>The goals of QUAI DAO are</h4>
          <ul className={styles.number_ul}>
            <li>Keep the governance of the project transparent</li>
            <li>Allow the community to be represented in the QUAI committee</li>
            <li>Effectively and securely govern QUAI ecosystem</li>
          </ul>
          <h4>QUAI Committee</h4>
          <p>
            QUAI Committee is a main executive DAO body. It consists of QUAI
            collective members, major investors and a community member. Initial
            members of the community are selected by the QUAI collective
            off-chain. Next the elected Community Member joins the Committee.
            After the Committee is formed members could be added or deleted from
            the Committee by Committee Voting. Community Members could be also
            replaced by the Community. The responsibilities of the Committee are
            as follows:
          </p>
          <ul className={styles.number_ul}>
            <li>Govern QUAI DAO in best interests of QUAI holders</li>
            <li>Grow the QUAI DAO portfolio of successful products</li>
            <li>Grow the QUAI ecosystem</li>
          </ul>
          <h4 className={styles.title_grey}>Technical information:</h4>
          <p>
            Each member of the Committee is a Membership token holder that could
            be minted and revoked by the QUAI Committee through the Committee
            Voting. Community Member should be first elected by the Community
            via a Community Voting.
          </p>
          <p>
            Membership token is a non-transferrable ERC-20 or ERC-721 token. One
            ETH address can not be a custodian of more than 1 Membership token.
          </p>
        </div>
      </div>
      <div className={styles.section_white}>
        <div className='container'>
          <h4>Committee Voting</h4>
          <p>
            Committee Voting is a governance tool that allows QUAI Committee to
            operate. Only proposals where the support and quorum that exceed the
            minimal thresholds should be enacted. Initial parameters of the
            Committee Voting are:
          </p>
          <ul>
            <li>
              Support > 50%. Support is the relative percentage of tokens that
              are required to vote “Yes” for a proposal to be approved. In our
              case more than 50% of the tokens used to vote on a proposal must
              vote “Yes” for it to pass.
            </li>
            <li>
              Quorum > 20%. Quorum is the relative percentage of tokens used to
              vote. In case of QUAI DAO >20% of minted Membership tokens should
              participate in any proposal voting. Eg. if there are 10 Committee
              Members then 3 of them should participate in the voting to make
              the proposal enactable.
            </li>
            <li>
              Voting duration = 1 day. Voting duration is the time between the
              proposal creation and results finalization.
            </li>
          </ul>
          <h4 className={styles.title_grey}>Technical information:</h4>
          <p>
            All parameters of Committee Voting (Support, Quorum, Voting
            duration) should be changeable by the Committee via Voting.
          </p>
        </div>
      </div>
      <div className={styles.section_grey}>
        <div className='container'>
          <h4>Community Voting</h4>
          <p>
            QUAI Community should be able to vote and elect the person who
            represents the community in the QUAI Committee. Community Member is
            elected for 1 year. All QUAI holders are able to participate in
            voting and add their person as a candidate. Initial parameters of
            the Community Voting are:
          </p>
          <ul>
            <li>
              Winner is an address that collected more votes than any other
              address
            </li>
            <li>Quorum > 0%. </li>
            <li>Voting duration = 7 days.</li>
          </ul>
          <h4 className={styles.title_grey}>Technical information:</h4>
          <p>
            Community Voting is a Quadratic Voting. The snapshot of the QUAI
            holders accounts should be done on a random day in 30-days period
            before the voting, eg. 25 days before voting or 2 days before
            voting. The goal of the snapshot is to create a list of addresses
            that can participate in voting. The random snapshot day should
            decrease the splitting funds threat. Next addresses from the
            snapshot should be able to buy voting power (VP) for themselves
            according to Quadratic Voting principles, eg.:
          </p>
          <div className={styles.table_main}>
            <div className={styles.table}>
              <div className={styles.row}>
                <div>1 VP</div>
                <div>for </div>
                <div>1 QUAI*</div>
              </div>
              <div className={styles.row}>
                <div>2 VP</div>
                <div>for </div>
                <div>4 QUAI</div>
              </div>
              <div className={styles.row}>
                <div>3 VP</div>
                <div>for </div>
                <div>9 QUAI</div>
              </div>
              <div className={styles.row}>
                <div>10 VP</div>
                <div>for </div>
                <div>100 QUAI</div>
              </div>
            </div>
            <div className={styles.table_info}>
              * 1 VP price should be confirmed by the Committee and can be
              changed by the Committee.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_white}>
        <div className='container'>
          <h4>VP requirements are as follows:</h4>
          <ul>
            <li>VP should be represented as NFT</li>

            <li>Is eligible for one voting only</li>

            <li>
              VP can be bought within several transactions but the price should
              be set according to the rules above. For example if the user's 1st
              purchase was 2VP for 4 QUAI then during his 2nd purchase he can
              only buy 3rd VP for 4 QUAI to make sure that in total he would pay
              9 QUAI for 3 VP.
            </li>

            <li>
              If user have NFT and would like to buy more votes he should swap
              his current NFT plus required amount of QUAI to a new NFT
            </li>

            <li>
              If user has already transferred his NFT somewhere he is not able
              to buy more votes for current voting
            </li>

            <li>
              To add gamification to the process of voting NFTs with different
              Voting Power should have different designs.
            </li>

            <li>
              {
                "For each kind of NFT there should be rare designs randomly issued to some users. Like each 1 of 1000 NFTs with 1<=VP<=10 has a specific design. The same thing is for:"
              }
              <br />
              {"1 of 900 NFTs with 10<VP<=20"}
              <br />
              {"1 of 800 NFTs with 20<VP<=30 "}
              <br />
              {"…"}
              <br />
              {"1 of 100 with 90<VP<=100"}
            </li>

            <li>All numbers and ranges above are subject to change</li>
          </ul>
          <h4>Committee Membership Revoke</h4>
          <p>
            Committee Membership could be revoked by the Committee via Committee
            Voting. In case the Committee Member was elected by the Community
            his Membership can not be revoked by the Committee but can be
            revoked by the Community via Community Voting.
          </p>
          <h4>Community Membership election</h4>
          <p>
            Candidates from the Community who would like to become a Committee
            Member should be first registered as candidates. Below you can find
            the requirements for candidates:
          </p>
          <ul className={styles.number_ul}>
            <li>
              Each candidate should be a QUAI holder with a minimum of QUAI
              equal to 2k USDT staked for a period equal to or more than 12
              months. These thresholds could be changed by the Committee. This
              makes everybody sure the candidate has skin in the game and will
              keep QUAI until the end of 1 year he is elected to represent the
              Community in the Committee.
            </li>
            <li>
              Candidate should be a QUAI holder for at least 3 months before the
              start of Community Voting. This term shows the candidate most
              likely knows the protocol and the Community.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
