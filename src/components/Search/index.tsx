import React, { useCallback, useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import * as S from './styles';

interface SearchProps {
  placeHolder?: string;
}

export const Search: React.FC<SearchProps> = ({ placeHolder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputToggle, setInputToggle] = useState(false);

  const handleClick = useCallback(() => {
    setInputToggle(!inputToggle);
    inputRef.current?.focus();
  }, [inputToggle]);

  return (
    <>
      <S.Wrapper className={inputToggle ? 'show' : ''}>
        <FaSearch onClick={handleClick} />
        <S.Input
          ref={inputRef}
          placeholder={placeHolder}
          autoFocus
          aria-label="search"
          title="search"
        />
      </S.Wrapper>
      {!inputToggle && (
        <S.Button onClick={handleClick} role="button" aria-label="search">
          <FaSearch />
        </S.Button>
      )}
    </>
  );
};
