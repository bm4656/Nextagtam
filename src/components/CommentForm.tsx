import SmileIcon from './ui/icons/SmileIcon';

export default function CommentForm() {
  return (
    <form className='flex border-t border-neutral-300 items-center px-2'>
      <SmileIcon />
      <input
        className='w-full border-none outline-none p-3'
        type='text'
        placeholder='Add a comment...'
      />
      <button className='font-bold text-sky-600 ml-2'>Post</button>
    </form>
  );
}
