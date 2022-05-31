import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "John",
  email: "aaa@aaa.com",
  address: "aaaaaa"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
