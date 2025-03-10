type LinkMenuProps = {
  text: string;
  emote: '👋' | '🧐' | '🔗' | '👨‍💻' | '📫';
  id: string;
};

export default function LinkMenu({ text, emote, id }: LinkMenuProps) {
  return (
    <span
      id={id}
      className="dark:text-text-dark text-text-light bg-transparent rounded-md p-2 w-auto"
    >{`${emote}  ${text}`}</span>
  );
}
