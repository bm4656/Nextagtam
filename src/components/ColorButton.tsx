type Props = {
  text: string;
  clickFn: () => void;
  size?: 'small' | 'big';
};
export default function ColorButton({ text, clickFn, size = 'small' }: Props) {
  return (
    <div
      className={`rounded-md bg-gradien
      t-to-bl from-fuchsia-600 via-rose-500 to-amber-300 ${
        size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'
      }`}>
      <button
        className={`bg-white rounded-sm p-[0.3rem] hover:opacity-90 transition-opacity ${
          size === 'big' ? 'p-4 text-2xl' : 'p-[0.15rem] text-base'
        }`}
        onClick={clickFn}>
        {text}
      </button>
    </div>
  );
}
