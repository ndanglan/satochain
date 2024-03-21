import React from 'react';

import Footer from '@/components/layouts/common/Footer';
import SwapForm from '@/components/layouts/swap/SwapForm';

type Props = {};

const SwapPage = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="py-[100px]">
        <SwapForm />
      </div>
      <Footer />
    </div>
  );
};

export default SwapPage;
