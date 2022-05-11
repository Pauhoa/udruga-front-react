// styles
import './team.scss';
import { ReactComponent as GithubSvg } from '../../assets/github.svg';
import { ReactComponent as LinkedinSvg } from '../../assets/linkedin.svg';

function Team() {
  return (
    <div className="team">
      <div>
        <h2>L'équipe Front-End</h2>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Paul Hoarau</h3>
            <p>Dévloppeur front-end, lead-dev front</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Nom prénom</h3>
            <p>Courte description</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Nom prénom</h3>
            <p>Courte description</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <h2>L'équipe Back-End</h2>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Nom prénom</h3>
            <p>Courte description</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Nom prénom</h3>
            <p>Courte description</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue01&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Nom prénom</h3>
            <p>Courte description</p>
            <div className="links">
              <a href="#">
                <GithubSvg href="#" className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg href="https://www.linkedin.com/in/paulhoarau/" className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
