import React from 'react';

type LinkMenuProps = {
  text: string;
  emote: '👋' | '🧐' | '🔗' | '👨‍💻' | '📫';
};

export default function LinkMenu({ text, emote }: LinkMenuProps) {
  return (
    <span className="dark:text-text-dark text-text-light dark:bg-transparent bg-primary rounded-md p-2 w-auto">{`${emote} ${text}`}</span>
  );
}
