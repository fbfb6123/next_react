import Link from 'next/link';
import style from '../static/Style';
import Counter from '../components/Counter';

//外部スタイルシート呼び出し
export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js</p>
  <hr />
  <Counter />
  
</div>
