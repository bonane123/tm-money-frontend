import { styled } from 'styled-components';

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  & h2 {
    margin-bottom: 2rem;
  }
`;

const StyledPersons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  
`;

const StyledUser = styled.div`
  background-color: var(--color-grey-100);
  border-radius: 10px;
  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }
`;

const UserImage = styled.img`
  width: 30rem;
  height: 30rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const PersonDesc = styled.p`
  padding: 1rem 2rem;
  text-align: center;
  & h4 {
    text-transform: uppercase;
  }
  & p {
    font-size: 15px;
    color: var(--color-grey-400);
  }
`;

const userData = [
  {
    id: '1',
    photo: 'Jeannette.jpg',
    name: 'Uwamahoro Jeannette',
    position: 'Financial Manager',
  },
  {
    id: '2',
    photo: 'adolphe.jpg',
    name: 'Niyigena Adolphe',
    position: 'Founder & CEO',
  },
  {
    id: '3',
    photo: 'bonane.jpg',
    name: 'Ndayishimye Bonane',
    position: 'Software Engineer',
  },
];

function OurTeam() {
  return (
    <StyledTeam>
      <h2>Our Team</h2>
      <p>
        Our team consist of talented individuals dedicated to customer
        satisfaction.
      </p>
      <StyledPersons>
        {userData.map((user) => (
          <StyledUser key={user.id}>
            <UserImage src={user.photo} alt='financial manager' />
            <PersonDesc>
              <h4>{user.name}</h4>
              <p>{user.position}</p>
            </PersonDesc>
          </StyledUser>
        ))}
      </StyledPersons>
    </StyledTeam>
  );
}

export default OurTeam;
