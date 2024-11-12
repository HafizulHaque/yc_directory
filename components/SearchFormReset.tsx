'use client';

import Link from "next/link";

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    form.reset();
  }

  return (
    <button onClick={reset}>
      <Link href={'/'} className="search-btn text-white">X</Link>
    </button>
  )
}

export default SearchFormReset
