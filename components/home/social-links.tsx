'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex gap-4"
    >
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com" target="_blank">
          <GithubIcon className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://twitter.com" target="_blank">
          <TwitterIcon className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://linkedin.com" target="_blank">
          <LinkedinIcon className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
    </motion.div>
  );
}