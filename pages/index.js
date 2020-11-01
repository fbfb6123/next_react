import Link from 'next/link';
import style from '../static/Style';

export default () =><div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>Welcome to next.js!</p>
  <hr />
  <div>
    <Link href="/other">
      <a>Go to Other page &gt;&gt;</a>
    </Link>
  </div>
</div>