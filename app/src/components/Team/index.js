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
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Paul Hoarau</h3>
            <p>Dévloppeur front-end, lead-dev front</p>
            <div className="links">
              <a href="https://github.com/Pauhoa">
                <GithubSvg className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/paulhoarau/">
                <LinkedinSvg className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Laurent Nunez</h3>
            <p>Développeur front-end, product owner</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img alt="member avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=UpDown&mouthType=Default&skinColor=Pale" />
          </div>
          <div className="team-member__infos">
            <h3>Jérémy Lefèvre</h3>
            <p>Développeur front-end, scrum master</p>
          </div>
        </div>
        <h2>L'équipe Back-End</h2>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=PastelRed&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Wahib Jouidir</h3>
            <p>Développeur back-end, git master</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Black" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Charaf Colo</h3>
            <p>Dévoloppeur back-end, lead-dev back</p>
            <div className="links">
              <a href="https://github.com/charafcolo">
                <GithubSvg className="link link-github" />
              </a>
              <a href="https://www.linkedin.com/in/charaf-colo-50a787199/">
                <LinkedinSvg className="link link-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member__image">
            <img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Heather&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" alt="member avatar" />
          </div>
          <div className="team-member__infos">
            <h3>Eddy Gavigniaux</h3>
            <p>Développeur back-end</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
