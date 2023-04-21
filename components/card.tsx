import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from "@mui/material/Link";
import Image from 'next/image';


const card = (
  <React.Fragment>
    <CardContent>
      <Link href='#' underline='none' variant="h5" component="div">
        <Image
        src="/images/trust_wallet_horizontal_blue.svg"
        width={100}
        height={100}
        alt="trust wallet logo"
        className="w-[300px] relative right-[13%]"
        />
      </Link>
      <Link href='#' underline='none' variant="h5" component="div">
      <Image
        src="/images/Metamask-logo.svg"
        width={100}
        height={100}
        alt="metamask logo"
        className="w-[200px] mb-[40px]"
        />
      </Link>
      <Link href='#' underline='none' variant="h5" component="div">
      <Image
        src="/images/Coinbase-logo-1.svg"
        width={100}
        height={100}
        alt="Coinbase logo"
        className="w-[200px] mb-[40px]"
        />
      </Link>
      <Link href='#' underline='none' variant="h5" component="div">
      <Image
        src="/images/Crypto.com-logo.svg"
        width={100}
        height={100}
        alt="Crypto.com logo"
        className="w-[200px] mb-[40px]"
        />
      </Link>
      <Link href='#' underline='none' variant="h5" component="div">
      <Image
        src="/images/atomic_wallet_logo_black.svg"
        width={100}
        height={100}
        alt="Atomic wallet logo"
        className="w-[125px] relative right-[8px] mb-[20px]"
        />
      </Link>
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className=' absolute top-[10vh] right-[37.5vw] flex flex-col items-center rounded-[20px]'>{card}</Card>
    </Box>
  );
}