import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';

//外部スタイルシート呼び出し
export default () =>(
  <Layout header="Next" title="Top page." footer="フッター">
    <p>Welcome to next.jsa</p>
    <Image fname="image.jpg" size="250"/>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
      </button></Link>
  </Layout>
);
