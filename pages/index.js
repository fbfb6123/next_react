import Link from 'next/link';
import Layouts from '../components/Layout';

//外部スタイルシート呼び出し
export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js</p>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
      </button></Link>
  </Layout>
);
