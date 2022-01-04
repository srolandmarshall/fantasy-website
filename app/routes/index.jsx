import { Link } from 'remix';


export default function Index() {
  return (
    <div>
      <h1>Munz League Website</h1>
      <ul>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
      </ul>
    </div>
  );
}