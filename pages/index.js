import Link from 'next/link';
import Layout from '../components/Layout';

//外部スタイルシート呼び出し
export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.jsa</p>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
      </button></Link>
  </Layout>
);
