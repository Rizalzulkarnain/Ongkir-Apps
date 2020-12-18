import Logo404 from './404.svg';
import { NotFoundDiv, Wrapper } from './NotfoundStyle';
import { RouterLink } from '../../styles';

const Notfound = () => (
  <NotFoundDiv>
    <img src={Logo404} alt="" />
    <Wrapper>
      <h1>Page Not Found</h1>
      <p className="message">your page is looking for is _Not Found_.</p>
      <RouterLink to="/">Back to Home</RouterLink>
    </Wrapper>
  </NotFoundDiv>
);

export default Notfound;
