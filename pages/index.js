import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

//外部スタイルシート呼び出し
export default () =>(
  <Layout header="Next" title="Top page." footer="フッター">
    <Counter />
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
      </button></Link>
  </Layout>
);
