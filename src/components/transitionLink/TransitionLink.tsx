'use client';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

interface IProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const TransitionLink = ({ children, href, ...props }: IProps) => {
  const router = useRouter();

  const handleTransition = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const body = document.querySelector('body');

    body?.classList.add('page-transition');

    await sleep(300);
    router.push(href);
    await sleep(300);

    body?.classList.remove('page-transition');
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
