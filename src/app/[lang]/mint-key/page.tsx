'use client';

import Image from 'next/image';

import Button from '@/components/ui/button';
import Dropdown from '@/components/ui/dropdown';
import Input from '@/components/ui/input';
import Progress from '@/components/ui/progress';
import Tooltip from '@/components/ui/tooltip';

import bitcoin from '@public/images/satochain/bitcoin.png';
import clipboard from '@public/images/satochain/clipboard.png';
import dropdown from '@public/images/satochain/dropown.png';
import minus from '@public/images/satochain/minus.png';
import plus from '@public/images/satochain/plus.png';
import warning from '@public/images/satochain/warning.png';

export default function MintKeyPage() {
  return (
    <div className="container mx-auto pt-12">
      <div className="grid w-full grid-cols-10 items-start gap-8">
        <div className="col-span-6 bg-black0d">
          {/* header */}
          <div className="bg-lin p-8">
            <h1 className="text-[46px]/[44px] font-bold tracking-[0.23px] text-white">
              Mint your keys
            </h1>
          </div>
          {/* section 2 */}
          <div className="min-key_section">
            <div className="mb-3 flex items-center justify-between">
              <p className="grey-box p-1">Tier 0 - SOLD OUT</p>
              <p className="grey-box p-1">Tier 1 - PROCESSING</p>
            </div>
            <Progress progress={30} />
          </div>
          {/* section 3 */}

          <div className="min-key_section ">
            <div className="flex items-center justify-between">
              <div className="max-w-[300px]">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl/[normal] font-normal text-white">
                    Sato Entry Key
                  </span>
                  <Tooltip content="Warning">
                    <Image
                      src={warning.src}
                      width={16}
                      height={16}
                      alt="waring"
                    />
                  </Tooltip>
                </div>
                <span className="text-sm/[150%] text-white/[0.7]">
                  The Key to asserting your eligibility for network challenges
                  and incentives.
                </span>
              </div>
              <div className="w-[150px]">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm/[150%] font-normal uppercase text-white/[0.7]">
                    Quantity
                  </span>
                  <Tooltip content="Warning">
                    <Image
                      src={warning.src}
                      width={16}
                      height={16}
                      alt="waring"
                    />
                  </Tooltip>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-solid border-white/[0.14] p-1">
                  <Button className="!h-8 !w-8 rounded-[4px] !bg-white/[0.1] !p-0">
                    <Image src={minus.src} width={24} height={24} alt="minus" />
                  </Button>
                  <span className="text-white">1</span>
                  <Button className="!h-8 !w-8 rounded-[4px] !bg-white/[0.1] !p-0">
                    <Image src={plus.src} width={24} height={24} alt="minus" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="min-key_section">
            <div className="flex w-full items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xl/[normal] font-medium capitalize text-white">
                    1 x sato entry key
                  </span>
                </div>
                <span className="text-sm/[150%] text-white/[0.7]">
                  0.001 BTC per key
                </span>
              </div>
              <div className="w-[165px]">
                <Dropdown.Root>
                  <Dropdown.Trigger className="w-full">
                    <div className="flex h-14 w-full items-center justify-center gap-2 rounded border border-solid border-M3-sys-dark-outline px-4">
                      <Image
                        src={bitcoin.src}
                        width={24}
                        height={24}
                        alt="bitcoin"
                      />
                      <span className="text-M3-sys-dark-on-surface-variant">
                        Bitcoin
                      </span>
                      <Image
                        src={dropdown.src}
                        width={24}
                        height={24}
                        alt="bitcoin"
                      />
                    </div>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <Dropdown.Group>
                      <Button className="w-full">Remove</Button>
                    </Dropdown.Group>
                  </Dropdown.Content>
                </Dropdown.Root>
              </div>
            </div>
            <div className="mt-5 flex w-full items-center justify-between">
              <span className="text-xl/[normal] font-medium capitalize text-white">
                Pay
              </span>
              <span className="text-xl/[normal] font-medium capitalize text-white">
                0.001 BTC
              </span>
            </div>
          </div>

          {/* Section 5 */}
          <div className="min-key_section flex items-center gap-4">
            <Input placeholder="Input" label="Recipent Address" />
            <Input placeholder="Input" label="Referrer's Code" />
          </div>

          {/* section6 */}
          <div className="min-key_section px-6 py-8">
            <Button intent={'linear'} variant={'outline'} className="w-full">
              Confirm
            </Button>
          </div>
        </div>

        {/* LEFT */}
        <div className="col-span-4 bg-black0d  text-white">
          {/* section 1 */}
          <div className="min-key_section">
            <div className="flex items-center justify-between rounded bg-white/[0.04] p-3">
              <span className="text-base font-medium text-white">
                Key Balance
              </span>
              <span className="text-base font-bold text-[#FBB813]">
                1 Entry Key
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded bg-white/[0.04] p-3">
              <span className="text-base font-medium text-white">
                My Referral Code (5%):
              </span>
              <div className="flex items-center gap-3">
                <span className="text-base font-bold text-white/[0.7]">
                  8235a34374
                </span>
                <Image
                  onClick={() => {
                    navigator.clipboard.writeText('8235a34374');
                  }}
                  src={clipboard.src}
                  width={20}
                  height={20}
                  alt="clipboard"
                />
              </div>
            </div>
          </div>
          {/* section2 */}
          <div className="min-key_section">
            <div className="flex h-32 items-center justify-between">
              <span className="text-base/[normal] font-medium text-white">
                Gas Sharing Reward
              </span>
              <span className="text-base/[normal] font-medium text-white/[0.7]">
                0.137 sBTC
              </span>
            </div>
          </div>
          {/* section 3 */}
          <div className="min-key_section">
            <div className="flex h-32 items-center justify-between">
              <span className="text-base/[normal] font-medium text-white">
                Key Incentive Rewards
              </span>
              <span className="text-base/[normal] font-medium text-white/[0.7]">
                394,600 SATO
              </span>
            </div>
          </div>
          {/* section 4 */}
          <div className="min-key_section">
            <div className="flex h-32 items-center justify-between">
              <span className="text-base/[normal] font-medium text-white">
                Key Farm Rewards
              </span>
              <span className="text-base/[normal] font-medium text-white/[0.7]">
                835 SATO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
