import React from 'react';

type LinkMenuProps = {
  text: string;
  emote: '👋' | '🧐' | '🔗' | '👨‍💻' | '📫';
};

export default function LinkMenu({ text, emote }: LinkMenuProps) {
  return <span>{`${emote} ${text}`}</span>;
}
