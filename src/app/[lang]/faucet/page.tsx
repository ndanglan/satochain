import Image from 'next/image';

import Footer from '@/components/layouts/common/Footer';
import FaucetForm from '@/components/layouts/faucet/FaucetForm';

import facet_logo from '@public/images/satochain/faucet_logo.png';

type Props = {};

const FaucetPage = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 items-center pb-[100px]">
        <FaucetForm />
        <div>
          <Image
            src={facet_logo.src}
            width={586}
            height={730}
            alt="facet_logo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaucetPage;
