import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;

const App = () => {
  return (
    <div>
      <Button>click</Button>
      <Landing />
    </div>
  );
};

export default App;
