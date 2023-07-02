type Props = {
  text: string;
  clickFn: () => void;
};
export default function ColorButton({ text, clickFn }: Props) {
  return (
    <div className='rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
      <button
        className='bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity'
        onClick={clickFn}>
        {text}
      </button>
    </div>
  );
}
