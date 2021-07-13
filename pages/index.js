import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSideBar({githubUser}) {
  return (
      <Box>
        <img src={`https://github.com/${githubUser}.png`}
             style={{borderRadius: '8px'}} alt={githubUser}/>
      </Box>
  );
}

export default function Home() {
  const githubUser = 'joaorca';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
      <>
        <AlurakutMenu githubUser={githubUser}/>
        <MainGrid>
          <div className={'profileArea'} style={{gridArea: 'profileArea'}}>
            <ProfileSideBar githubUser={githubUser}/>
          </div>
          <div className={'welcomeArea'} style={{gridArea: 'welcomeArea'}}>
            <Box>
              <h1 className={"title"}>
                Bem vindo(a)
              </h1>

              <OrkutNostalgicIconSet />
            </Box>
          </div>
          <div className={'profileRelationsArea'}
               style={{gridArea: 'profileRelationsArea'}}>
            <ProfileRelationsBoxWrapper>
              <h2 className={'smallTitle'}>Favoritos
                ({pessoasFavoritas.length})</h2>
              <ul>
                {pessoasFavoritas.map((item) => {
                  return (
                      <li key={item}>
                        <a href={`/users/${item}`}>
                          <img src={`https://github.com/${item}.png`}
                               alt={item}/>
                          <span>{item}</span>
                        </a>
                      </li>
                  );
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
          </div>
        </MainGrid>
      </>
  );
}
